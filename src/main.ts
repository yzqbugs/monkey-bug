import { createApp } from 'vue';
 
import App from './App.vue';
import { GM_addStyle, GM_getResourceText } from '$'
 
//加载外部CSS，资源已在上方resource中
var ele = GM_getResourceText("element");
GM_addStyle(ele);
createApp(App).mount(
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
