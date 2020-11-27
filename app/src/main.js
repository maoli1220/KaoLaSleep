import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
import "./assets/fontSize/iconfont.css"
import "./assets/reset/style.css"
import VCharts from 'v-charts'
import { Tabbar, TabbarItem } from 'vant';
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000/"
Vue.prototype.axios = axios
Vue.prototype.$bus=new Vue()
import { Tab, Tabs } from 'vant';
import { Button } from 'vant';
import { Circle } from 'vant';
import { Cell, CellGroup } from 'vant';
import { CountDown } from 'vant';
import { Icon } from 'vant';
import { Overlay } from 'vant';
import { DatetimePicker } from 'vant';
import { Switch } from 'vant';
import { SwipeCell } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
import { Toast } from 'vant';
import { Field } from 'vant';
import { Panel } from 'vant';

Vue.use(Panel);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(SwipeCell);
Vue.use(Switch);
Vue.use(DatetimePicker);
Vue.use(Overlay);
Vue.use(Icon);
Vue.use(CountDown);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Circle);
Vue.use(Button)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VCharts)
Vue.config.productionTip = false
Vue.prototype.setTime = (time) => {
  var date = new Date(time);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "" + (date.getMonth() + 1)
      : date.getMonth() + 1) + ".";
  var D =
    (date.getDate() < 10 ? "" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "" + date.getHours() : date.getHours()) + ":";
  var m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "";
  var s =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var strDate =h + m;
  return strDate;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



