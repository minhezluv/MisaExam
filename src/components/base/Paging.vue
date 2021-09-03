<template>
  <div class="paging" id="EmployeePaging">
    <div class="paging__left">
      <span class="left__text">
        Tổng số:
        <b>10000</b>
        bản ghi
      </span>
    </div>
    <div class="paging__right">
      <BaseDropdown :customData="pagingDropdown" :model="clonePageSize"/>
      <div class="paging__direction">
        <div
          class="paging__direction-item paging-previous"
          :class="{
            'paging-text-disable': currentPageNum == 1,
          }"
        
        >
          Trước
        </div>
        <div
          class="paging__direction-item paging-num"
          :class="{ 'paging-num-selected': currentPageNum == 1 }"
        
        >
          <span>1</span>
        </div>
        <div class="paging__direction-extant" v-show="extantLeft">...</div>
        <div
          class="paging__direction-item paging-num"
          v-for="(item, index) in arrPageNumDisplay"
          :key="index"
          :class="{ 'paging-num-selected': currentPageNum == item }"
        
        >
          <span>{{ item }}</span>
        </div>
        <div class="paging__direction-extant" v-show="extantRight">...</div>
        <div
          v-show="true"
          class="paging__direction-item paging-num"
          :class="{
            'paging-num-selected':
true
          }"
       
        >
          <span>20</span>
        </div>
        <div
          class="paging__direction-item paging-next"
          :class="{
            'paging-text-disable':
              true
          }"
        
        >
          Sau
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDropdown from './BaseDropdown.vue';
export default {
  components: { BaseDropdown },
  component: {},
  props: {
    
  },
  data() {
    return {
      currentPageNum: 1,
      currentHoverPageNum: null,
      extantLeft: true,
      extantRight: true,
      arrPageNumDisplay: ['1','2','3'],
      clonePageSize: 5,
      timeOut: null,
      pagingDropdown: {
        inputFieldName: "departmentId",
        labelText: "Đơn vị",
        defaultValue: "",
        displayValues: [
          "10 bản ghi trên 1 trang",
          "20 bản ghi trên 1 trang",
          "30 bản ghi trên 1 trang",
          "50 bản ghi trên 1 trang",
          "100 bản ghi trên 1 trang",
        ],
        keys: [10, 20, 30, 50, 100],
        width: "196px",
        height: "32px",
      },
    };
  },
 
 
 
   
  
    
   

    

    

   

  

   

   

}
</script>

<style scoped>


.paging-item {
  transition: 0.1s;
}

.disable {
  opacity: 0.4;
  cursor: default;
}

.disable:hover {
  background-color: unset;
}

.disable:active {
  background-color: unset;
}
</style>