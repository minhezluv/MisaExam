<template>
  <div>
     <div class="grid-employee">
      <table class="scroll" width="100%" id="EmployeeList">
        <thead fieldname="EmployeeId">
          <tr class="table-header" >
            <th>
             <label class="delete-box">
              
              </label>
            </th>
            <th
              v-for="(column, index) in columns"
              :key="index"
              :class="{
                'text-align-left': column.textLeft,
                'text-align-center': column.center,
                'text-align-right': column.textRight,
              }"
            >
              {{ column.name }}
            </th>
            <th
              key="function"
              class="text-align-center table-function"
            >
              Chức năng
            </th>
          </tr>
        </thead>
     
        <tbody class="scroll-tbody" >
          <tr
            v-for="element in elements"
            :key="element[idOfRow.name]"
            @dblclick="updateById($event)"
            :id="element[idOfRow.name]"
           :class="{'selected':checkedId.includes(element[idOfRow.name])==true}"
          >
            <td>
              <label class="delete-box">
                <input
                  type="checkbox"
                  v-model="checkedId"
                  :value="element[idOfRow.name]"
                  @change="selectedRow()"
                />
                <span class="checkmark"></span>
              </label>
            </td>
            <td
              v-for="(column, index) in columns"
              :key="index"
              :class="{
                'text-align-left': column.textLeft,
                'text-align-center': column.center,
                'text-align-right': column.textRight,
              
              }"
            >
              {{ element[column.id] }}
            </td>
             <td
            >
             Chức năng
            </td>
          </tr>
        </tbody>
      </table>
     </div>
    <paging
       :customData="paging"
    />
  </div>
</template>
<script>
import Paging from './Paging.vue';
export default {
  components: { Paging },
  props: {
    columns: {
      type: Array,
      require: true,
    },
    elements: {
      type: Array,
      require: true,
    },
    idOfRow: {
      type: Object,
      require: true,
    },
  },
  methods: {
    updateById(e) {
      this.$emit("sendId", e.currentTarget.id);
    },
    selectedRow(){
     
    },
 
  },

  watch: {
    checkedId: function () {
      this.$emit("sendDelete", this.checkedId);
      console.log(this.checkId);
    },
  },
  data() {
    return {
      checkedId: [],
      rowActive:false,
        paging: {
        pageSize: 1,
        totalRecord: 0,
        totalPage: 1,
        maxPageNumDispaly: 0,
        currentPageNum: 1,
      },
    };
  },
};
</script>

<style scoped>
</style>