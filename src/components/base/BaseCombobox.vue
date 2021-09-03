<template>
      <label  v-click-outside="hideCombobox"  class="wrapper combobox wrapper-size-34 combobox-space " :class="{'border-click':comboboxState}">
        <div class="combobox-header-wrapper">
          <!-- <span class="combobox-value">
             {{comboboxValue}}
          </span> -->
           <input
           class="combobox-value"
           v-model="comboboxValue"
           />
           <div class="btnCombobox" @click="showcombobox()" :class="{'btnCombobox-click':comboboxState}" >
              <i :class="{ 'fas fa-chevron-down icon-down show': !comboboxState, 'fas fa-chevron-up icon-up show': comboboxState,  }"></i>
           </div>
        
        </div>
        <ul
          class="combobox-list "
           :class="{'combobox-list-top':!comboboxBottom,
           'combobox-list-bottom':comboboxBottom,
           }"
           :style="{ display: comboboxShow }"
        >

          <li
            class="combobox-item"
            v-for="(item, index) in comboboxData"
            :key="index"
            v-bind:class="{ active: itemActive == index }"
            @click="itemClick(index)"
         
          >
            <i
              class="fas fa-check"
              :class="{
                'combobox-icon-show': itemActive == index,
                'combobox-icon-hidden': itemActive != index,
              }"
            ></i>
             {{item['value']}}
          </li>
        </ul>
      </label>
</template>

<script>
import ClickOutside from "vue-click-outside";
// import axios from "axios";
export default {
  name: "BasecomboboxModal",
  props: {
    comboboxData: Array,
    sizecombobox: Boolean,
    comboboxVal: {
      type: [String, Number],
      default: "",
    },
        comboboxBottom:{
        type:Boolean,
        default:false
      },
    nameCombobox:String,
    defaultValue:{
      type:String,
      default:"",
     
    },
    
  },
  data() {
    return {
      comboboxState: false,
      itemActive: 0,

    };
  },
 directives: {
    ClickOutside
  },

  methods: {
    showcombobox() {
      console.log(this.comboboxState);
      this.comboboxState = !this.comboboxState;
    },
    itemClick(index) {
      this.itemActive = index;
      this.comboboxState=false;
    //  console.log(this.itemActive);
    //  console.log(this.comboboxVal);
     this.$emit('changeInputValue',this.nameCombobox, this.comboboxData[index]);
   //  console.log(this.comboboxData[index]);
    },
    hideCombobox() {
      console.log("hide");
      this.comboboxState = false;
    },
    
  },
  computed: {
    comboboxShow() {
      if (this.comboboxState) {
        return "block";
      } else {
        return "none";
      }
    },
    /**
     * Trả về phần tử trong mảng
     * Author: nqminh (5/8/2021)
     
     */
    comboboxValue() {
      if (this.itemActive != -1) {
       // console.log(this.comboboxData[this.itemActive]);
        return this.comboboxData[this.itemActive].value;
      } else {
        return this.defaultValue;
      }
    },
    // comboboxBindValue() {
    //   if (this.itemActive == -1) {
    //     return this.currDefault;
    //   } else {
    //     return this.comboboxData[this.itemActive][this.comboboxName + "Name"];
    //   }
    // },
  },
};
</script>

<style scoped>

</style>