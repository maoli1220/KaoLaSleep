<template>
  <div>
    <Tarbar title="闹钟" :right="true">
      <van-icon name="plus" @click="add" slot="right" />
    </Tarbar>
    <div class="content">
      <Useless v-if="list.length===0"></Useless>
      <div class="list-box">
        <ClockList
          v-for="(item,index) in list"
          :key="index"
          :time="item.clock"
          :status="item.status"
          @update="getClock"
        ></ClockList>
      </div>
    </div>
    <van-overlay :show="show" @click="show=false" z-index="2">
      <div class="wrapper" @click.stop>
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="添加闹钟"
          :min-date="minDate"
          :max-date="maxDate"
          style="width:95%"
          @confirm="timeValue"
          :formatter="formatter"
          @cancel="show=false"
        />
      </div>
    </van-overlay>
  </div>
</template>
<script>
import Tarbar from "../components/Tabbar/Tabar";
import Useless from "../components/Useless/Useless";
import ClockList from "../components/ClockList/ClockList";
import {Toast} from "vant"
export default {
  data() {
    return {
      show: false,
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2050, 10, 1),
      currentDate: new Date(),
      list: [],
    };
  },
  created() {
   this.getClock()
  },
  methods: {
    getClock() {
      if (localStorage.getItem("clock") != null) {
        this.list = JSON.parse(localStorage.getItem("clock"));
      }
    },
    add() {
      this.show = true;
    },
    timeValue(value) {
      if (localStorage.getItem("clock") === null) {
        let arr = [{ clock: value.getTime(), status: true }];
        localStorage.setItem("clock", JSON.stringify(arr));
      } else {
        let arr;
        try {
          arr = JSON.parse(localStorage.getItem("clock"));
          arr.unshift({ clock: value.getTime(), status: true });
        } catch (err) {
          let obj = [{ clock: value.getTime(), status: true }];
          localStorage.setItem("clock", JSON.stringify(obj));
        }
        localStorage.setItem("clock", JSON.stringify(arr));
      }
      this.show=false
      this.getClock()
      Toast("闹钟添加成功！")
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      }
      return value;
    },
  },
  components: {
    Tarbar,
    Useless,
    ClockList,
  },
};
</script>
<style scoped>
.content {
  padding: 1.333333rem 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>