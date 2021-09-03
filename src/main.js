import Vue from 'vue'
import App from './App.vue'
//import vueDebounce from 'vue-debounce'
import 'devextreme/dist/css/dx.light.css';
import BaseComboBox from './components/base/BaseCombobox.vue'
import BaseDropdown from './components/base/BaseDropdown.vue'
Vue.config.productionTip = false
Vue.component('BaseComboBox', BaseComboBox);
Vue.component('BaseDropdown', BaseDropdown);
new Vue({
    render: h => h(App),
}).$mount('#app')