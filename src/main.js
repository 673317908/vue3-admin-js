import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import I18n from "./language/index"
// 引入ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
import * as antIcons from "@ant-design/icons-vue"

Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})

app.config.globalProperties.$antIcons = antIcons

app
  .use(store)
  .use(router)
  .use(Antd)
  .use(I18n)
  .mount("#app");