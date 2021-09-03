<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="toggle"></div>
        <div class="logo"></div>
      </div>
      <div class="header-right">
        <div class="header-company-list">
          <div class="page-icon">
            <div class="header__icon-small-nav"></div>
          </div>
          <div class="header__branch">
            <span class="header__branch-name text-uppercase"
              >Công ty TNHH Sản xuất - Thương mại - Dịch vụ Qui Phúc</span
            >
            <div class="page-icon">
              <div class="header__icon-branch-work"></div>
            </div>
          </div>
        </div>

        <div class="account">
          <div class="page-icon">
            <div class="header__icon-notify"></div>
          </div>
          <div class="header__user">
            <div class="header__icon-user"></div>
            <div class="user__name text-semibold">Nguyễn Quang Minh</div>
            <div class="page-icon">
              <div class="header__icon-user-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import BaseDropdownModal from '../base/BaseDropdownModal.vue';
export default {
  name: "Header",
  data() {
    return {
     
    };
  },
};
</script>


<style scoped>
@import "../../assets/css/layout/Header.css";
</style>