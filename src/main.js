import Vue from 'vue';
import '~/assets/styles/popper.scss';
import '~/assets/styles/animations.scss';

import VueScrollmagic from 'vue-scrollmagic';
Vue.use(VueScrollmagic);

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue) {
      Vue.component('Layout', DefaultLayout);
}


// import style


