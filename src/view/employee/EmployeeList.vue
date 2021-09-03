<template>
  <div class="employee-list">
    <div class="content">
      <div class="page-title">
        <div class="title">Danh sách nhân viên</div>
        <div class="page-feature">
          <base-button
            :buttonType="'btn misa-btn-default '"
            :buttonFunction="'btn-add'"
            :textButton="'Thêm nhân viên'"
            @click.native="addEmployee(false)"
          />
        </div>
      </div>
      <div class="filter-bar">
            <div class="icon-search"></div>
          <input
            class=" input-right "
            type="text"
            
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          />
      
  
        <base-button
          :buttonType="' m-second-button'"
          :buttonFunction="'m-btn-refresh'"
          :iconType="'icon-refresh'"
          @click.native="reloadData"
        />
        <base-button
          :buttonType="' m-second-button'"
          :buttonFunction="'m-btn-export'"
          :iconType="'icon-export'"
          @click.native="reloadData"
        />
      </div>
      <BaseTable
        :columns="coEmployee"
        :elements="employees"
        :idOfRow="rowemployeeId"
        @sendDelete="getDelete"
        @sendId="getIdToUpdate"
      />
    </div>
    <EmployeeDetail
      v-if="addEmployee"
      v-bind:isHide="isHideDialog"
      @addEmployee="addEmployee"
      v-bind:employeeId="employeeId"
      v-bind:formMode="formMode"
      @loadData="reloadData"
    />
    <!-- <base-popup
      :buttonFunction="'btn-delete'"
      :popupTitle="'Xóa bản ghi'"
      :popupContent="
        `Bạn có chắc muốn xóa nhân viên ` + `${employeeDeleted}` + ` không?`
      "
      :textButtonCancel="'Hủy'"
      :textButtonAccept="'Chấp nhận'"
      :isHidePopup="isHidePopupDelete"
      :btnAcceptClick="deleteEmployee(deleteList)"
    /> -->
  </div>
</template>


<script>

import BaseTable from "../../components/base/BaseTable.vue";
import FormatData from "../../utils/FormatData.js";
import EmployeeApi from "../../api/components/EmployeesAPI";
import $ from "jquery";
import BaseButton from "../../components/base/BaseButton.vue";
import EmployeeDetail from "../employee/EmployeeDetail.vue"
export default {
  components: {
      EmployeeDetail,
    // BaseDropDown,
    BaseTable,
    //BasePopup,
    BaseButton,
  },
  Name: "EmployeeList",

  data() {
    return {
      //Popup delete
      isHidePopupDelete: true,
      //mã nhân viên bị xóa
      employeeDeleted: "String",
      //danh sách id bị xóa
      deleteList: [],
      //hiện thị button xóa
      hiddenButtonDelete: {
        type: Boolean,
        default: true,
      },
      //Form nhân viên
      isHideDialog: true,
      formMode: null,
      employeeId: null,
      isShowed: {
        type: Boolean,
        default: false,
      },
      // POSITION

      positionData: [{ id: 0, value: "Chọn vị trí" }],
      // DEPARTMENT
      departmentData: [{ id: 0, value: "Chọn phòng ban" }],
      //Employee
      employees: [],
      employee: {},
      checkedId: [],
      rowemployeeId: {
        name: "EmployeeId",
      },
      coEmployee: [
        {
          name: "Mã nhân viên",
          textLeft: true,
          id: "EmployeeCode",
        },
        {
          name: "Họ tên",
          textLeft: true,
          id: "FullName",
        },
        {
          name: "Giới tính",
          textLeft: true,
          id: "Gender",
        },
        {
          name: "Ngày sinh",
          textCenter: true,
          id: "DateOfBirth",
        },
        {
          name: "Điện thoại",
          textCenter: true,
          id: "MobilePhoneNumber",
        },
        {
          name: "Số CMND",
          textLeft: true,
          id: "IdentityNumber",
        },
        {
          name: "Chức danh",
          textLeft: true,
          id: "PositionName",
        },
        {
          name: "Tên đơn vị",
          textLeft: true,
          id: "DepartmentName",
        },
        {
          name: "Số tài khoản",
          textRight: true,
          id: "BankAccount",
        },
        {
          name: "Tên ngân hàng",
          textLeft: true,
          id: "BankName",
        },
        {
          name: "Chi nhánh tk ngân hàng",
          textLeft: true,
          id: "BankBranch",
        },
      ],
    };
  },

  methods: {
    /**
     * load dư liệu
     *
     */
    reloadData() {
      var point = this;
      point.employees = [];
      $("tbody").empty();
      EmployeeApi.getAll()
        .then((res) => {
          point.employees = res.data;
          console.log(res.data);
          point.employees.forEach((item) => {
            item.Salary = FormatData.formatMoney(item.Salary);
            item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
            item.Gender = FormatData.formatGender(item.Gender);
          });
        })
        .catch((res) => {
          console.log(res);
        });
    },

    //  /*
    //   Lấy mã nhân viên mới
    // */
    // getNewEmployeeCode() {
    //   EmployeesAPI.getNewEmployeeCode()
    //     .then((res) => {
    //       this.employeeId = res.data;
    //      // console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // },
    /**
     * Hien thi form chi tiet khi nhan button
     * CreatedBy:nqminh(1/8/2021)
     */
    addEmployee(isHide) {
      //   var vm=this;

      this.isHideDialog = isHide;
      this.formMode = 0;
    },
    deleteEmployee(deleteList) {
      var vm = this;
      console.log(deleteList);
      this.employeeDeleted = deleteList;
      EmployeeApi.delete(deleteList)
        .then(function () {
          vm.deleteList = "";
          this.isHidePopupDelete = true;
        })
        .catch((res) => {
          console.log(res);
        })
        .finally(() => {
          vm.reloadData();
        });
    },
    getDelete(deleteList) {
      this.deleteList = deleteList;
      console.log(this.deleteList);
    },

    getIdToUpdate(id) {
      this.employeeId = id;
      this.isHideDialog = false;
      this.formMode = 1;
      console.log("minh");
    },

    /**
     * Hiển thị popup Xóa
     */
    showPopupDelete(show) {
      this.isHidePopupDelete = show;
    },
  },

  created() {
    var vm = this;
    EmployeeApi.getAll()
      .then((res) => {
        vm.employees = res.data;
        vm.employees.forEach((item) => {
          item.Gender = FormatData.formatGender(item.Gender);

          item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
        });
      })
      .catch((res) => {
        console.log(res);
      });
  },

  watch: {
    // employees: function () {
    //   var vm = this;
    //   EmployeeApi.getAll()
    //     .then((res) => {
    //       vm.employees = res.data;
    //       vm.employees.forEach((item) => {
    //         item.Salary = FormatData.formatMoney(item.Salary);
    //         item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
    //       });
    //     })
    //     .catch((res) => {
    //       console.log(res);
    //     });
    // },

    deleteList: function () {
      if (this.deleteList.length == 0) {
        this.hiddenButtonDelete = true;
      } else {
        this.hiddenButtonDelete = false;
      }
    },
  },
};
</script>


<style scoped>
</style>
