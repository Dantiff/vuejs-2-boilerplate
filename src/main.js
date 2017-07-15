/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';
import * as App from './app';

require('./components');

require('./bootstrap');

new Vue(App).$mount('#app');
