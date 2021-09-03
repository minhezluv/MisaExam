<template>
  <div class="employee-detail">
    <!-- Dialog thêm nhân viên -->
    <div class="dialog dialog-employee" :class="{ 'dialog-show': isHide }">
      <div class="modal"></div>
      <div class="dialog-content">
        <div class="dialog-content-header">
          <div class="content-text-modal">THÔNG TIN NHÂN VIÊN</div>
          <base-button
            :buttonType="'m-second-button'"
            :buttonFunction="'m-btn-exit'"
            iconSize="icon-24"
            iconType="icon-exit"
            @click.native="btnExitClick"
          />
        </div>
        <div class="form__content" ref="FormData">
          <div class="form-element">
            <div class="form-row">
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Mã nhân viên"
                  elementModalID="input-employee-code"
                  :isRequired="true"
                >
                  <input
                    slot="inputModal"
                    type="text"
                    class="input-dialog-employee"
                    id="EmployeeCode"
                    fieldname="EmployeeCode"
                    v-model="employee.EmployeeCode"
                  />
                </BaseModalElement>
                <BaseModalElement
                  elementModalName="Họ và tên"
                  elementModalID="input-fullname"
                  :isRequired="true"
                >
                  <input
                   style="width:200px"
                    slot="inputModal"
                    id="FullName"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="FullName"
                    v-model="employee.FullName"
                  />
                </BaseModalElement>
              </div>
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Ngày sinh"
                  elementModalID="input-date-ofbirth"
                >
                  <input
                    slot="inputModal"
                    id="DateOfBirth"
                    type="date"
                    class="input-dialog-employee"
                    fieldname="DateOfBirth"
                    v-model="employee.DateOfBirth"
                  />
                </BaseModalElement>
                <BaseModalElement
                  elementModalName="Giới tính"
                  elementModalID="input-gender"
                >
                  <div
                    slot="inputModal"
                    id="v-model-radiobutton"
                    style="margin-top: 8px; display: flex; font-size: 13px"
                  >
                    <div>
                      <input
                        type="radio"
                        value="0"
                        id="male"
                        name="radio-group"
                        v-model="employee.Gender"
                      />
                      <label for="male">Nam</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1"
                        id="female"
                        name="radio-group"
                        v-model="employee.Gender"
                      />
                      <label for="female">Nữ</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="2"
                        id="another"
                        name="radio-group"
                        v-model="employee.Gender"
                      />
                      <label for="another">Khác</label>
                    </div>
                  </div>
                </BaseModalElement>
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-col">
                 <BaseModalElement
                elementModalName="Phòng ban"
                elementModalID="input-department"
              >
               
               
              </BaseModalElement>
                
              </div>
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Số CMTND/ Căn cước"
                  elementModalID="input-identity-number"
                  :isRequired="true"
                >
                  <input
                    slot="inputModal"
                    id="IdentityNumber"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="IdentityNumber"
                    v-model="employee.IdentityNumber"
                  />
                </BaseModalElement>
                <BaseModalElement
                  elementModalName="Ngày cấp"
                  elementModalID="input-identity-date"
                >
                  <input
                    slot="inputModal"
                    id="IdentityDate"
                   
                    type="date"
                    class="input-dialog-employee"
                    fieldname="IdentityDate"
                    v-model="employee.IdentityDate"
                  />
                </BaseModalElement>
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Chức danh"
                  elementModalID="input-position-name"
                >
                  <input
                  style="width:325px"
                    slot="inputModal"
                    id="PositionName"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="PositionName"
                    v-model="employee.PositionName"
                  />
                </BaseModalElement>
              </div>
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Nơi cấp"
                  elementModalID="input-identity-place"
                >
                  <input
                  style="width:320px"
                    slot="inputModal"
                    id="IdentityPlace"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="IdentityPlace"
                    v-model="employee.IdentityPlace"
                  />
                </BaseModalElement>
              </div>
            </div>
          </div>
          <div class="form-element">
            <div class="form-row">
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Địa chỉ"
                  elementModalID="input-address"
                >
                  <input
                  style="width:712px"
                    slot="inputModal"
                    id="Address"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="Address"
                    v-model="employee.Address"
                  />
                </BaseModalElement>
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Số điện thoại di động"
                  elementModalID="input-phoneNumber"
           
                >
                  <input
                   style="width:140px"
                    slot="inputModal"
                    id="MobilePhoneNumber"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="MobilePhoneNumber"
                    v-model="employee.MobilePhoneNumber"
                  />
                </BaseModalElement>
                <BaseModalElement
                  elementModalName="Số điện thoại cố định"
                  elementModalID="input-phoneNumber"
           
                >
                  <input
                       style="width:140px"
                    slot="inputModal"
                    id="TelephoneNumber"
                    type="text"
                    class="input-dialog-employee"
                    fieldname="TelephoneNumber"
                    v-model="employee.TelephoneNumber"
                  />
                </BaseModalElement>
              </div>
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Email"
                  elementModalID="input-email"
             
                >
                  <input
                     style="width:320px"
                    slot="inputModal"
                    type="text"
                    class="input-dialog-employee"
                    id="Email"
                    fieldname="Email"
                    v-model="employee.Email"
                  />
                </BaseModalElement>
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-col">
                <BaseModalElement
                  elementModalName="Tài khoản ngân hàng"
                  elementModalID="input-email"
               
                >
                  <input
                     style="width:140px"
                    slot="inputModal"
                    type="text"
                    class="input-dialog-employee"
                    id="BankAccount"
                    fieldname="Email"
                    v-model="employee.BankAccount"
                  />
                </BaseModalElement>
                 <BaseModalElement
                  elementModalName="Tên ngân hàng"
                  elementModalID="input-email"
            
                >
                  <input
                     style="width:140px"
                    slot="inputModal"
                    type="text"
                    class="input-dialog-employee"
                    id="BankName"
                    fieldname="BankName"
                    v-model="employee.BankName"
                  />
                </BaseModalElement>
              </div>
              <div class="form-row-col">
                 <BaseModalElement
                  elementModalName="Chi nhánh"
                  elementModalID="input-email"
           
                >
                  <input
                    slot="inputModal"
                    type="text"
                       style="width:320px"
                    class="input-dialog-employee"
                    id="BankBranch"
                    fieldname="BankBranch"
                    v-model="employee.BankBranch"
                  />
                </BaseModalElement>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-content-footer">
          <div class="dialog-footer-button">
            <base-button
              :buttonType="'m-second-button'"
              :buttonFunction="'m-btn-cancel'"
              :textButton="'Hủy'"
              @click.native="btnCancelClick"
            />
            <base-button
              :buttonType="'btn'"
              :buttonFunction="'m-btn-save'"
              :fontAwesome="'far fa-save'"
              @click.native="btnSaveClick"
              :textButton="'Lưu'"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Kết thức dialog thêm nhân viên -->
  </div>
</template>


<script>
//import BaseModalElement from "../../components/base/BaseModalElement.vue";
//import BaseDropdownModal2 from "../../components/base/BaseDropdownModal2.vue";
import BaseButton from "../../components/base/BaseButton.vue";
import FormatData from "../../utils/FormatData.js";
import EmployeesAPI from "../../api/components/EmployeesAPI";
import DepartmentApi from "../../api/components/DepartmentAPI";
import BaseModalElement from "../../components/base/BaseModalElement.vue";

//import _ from "lodash";
export default {
  components: {

    BaseButton,
    BaseModalElement,
  },
  data() {
    return {
      newEmployeeCode: null,
      employee: {},
     departmentData:[{id: 0, value: "Chọn phòng ban"}],
    };
  },
  props: {
    isHide: {
      type: Boolean,
      default: true,
      required: true,
    },

    employeeId: {
      type: String,
    },

    formMode: {
      type: Number,
    },
  },

  methods: {
    /*
      Lấy mã nhân viên mới
    */
    

    btnCancelClick() {
      // this.isHide=true;
      this.$emit("addEmployee", true);
      this.employee = {};
      
    },
    btnExitClick() {
      // this.isHide=true;
      this.$emit("addEmployee", true);
      this.employee = {};
  
    },

    /**
     * Lưu dữ liệu
     * CreatedBy: nqminh(29/7/2021)
     */

    btnSaveClick() {
      let vm = this;
      if (this.formMode == 0) {
        //  console.log(vm.$refs.dropdownGender.value);
        EmployeesAPI.add(vm.employee)
          // axios
          //   .post(`http://cukcuk.manhnv.net/v1/Employees`, vm.employee)
          .then(() => {
            alert("thêm mới thành công");
            this.$emit("addEmployee", true);
            //this.$emit("reLoadData");
          })
          .catch((res) => {
console.log(res);
          })
          .finally(() => {
            this.$emit("loadData");
          });
      } else {
        //   console.log(vm.employee.$refs.dropdownGender.value);
        EmployeesAPI.update(vm.employeeId, vm.employee)

          .then(() => {
            alert("Sửa thành công");
            this.$emit("addEmployee", true);
            // this.$emit("reLoadData");
          })
          .catch((res) => {
            console.log(res);
          })
          .finally(() => {
            this.$emit("loadData");
          });
      }
    },
    getIdDropdown(name, key) {
      let vm = this;
      vm.employee[name] = key["id"];
      console.log(vm.employee[name]);
    },
  },

  watch: {
    employeeId: function (value) {
      let vm = this;
      EmployeesAPI.getById(value)

        .then((res) => {
          console.log(res);
          vm.employee = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    formMode: function () {
      if (this.formMode == 0) {
        // this.employee = {};
        //this.$refs.inputFocus.focus();
       
        console.log("hi");
      }
    },

    "employee.DateOfBirth": function (val) {
      this.employee.DateOfBirth = FormatData.formatDateDialog(val);
    },

    "employee.JoinDate": function (val) {
      this.employee.JoinDate = FormatData.formatDateDialog(val);
    },

    "employee.IdentityDate": function (val) {
      this.employee.IdentityDate = FormatData.formatDateDialog(val);
    },

    departmentData: {
      deep: true,
      handler() {},
    },
  },
  computed: {
    testEmployeeId: function () {
      return this.employeeId;
    },
  },

  created() {
    var vm = this;
    DepartmentApi.getAll()
      .then((res) => {
        let temp = res.data;
        temp.forEach((element) => {
          var test = {};
          test["id"] = element.DepartmentId;
          test["value"] = element.DepartmentName;
          this.departmentData.push(test);
        });
        //  this.departmentData=_.cloneDeep(this.departmentData);
        console.log(vm.departmentData);
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped>
</style>