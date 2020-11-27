<template>
  <div>
    <div class="sleep">
      <van-tabs color="#FFC300">
        <van-tab title="考拉睡眠">
          <div class="topsleep">
            <div class="start-sleep sleepbox" v-if="sleepShow">
              <div class="icon">
                <KoalaIcon></KoalaIcon>
              </div>
              <van-button class="btn" color="#7232dd" plain round @click="start">开始睡眠</van-button>
            </div>
            <div class="end-sleep sleepbox" v-if="!sleepShow">
              <div class="timebox">
                <van-circle
                  v-model="currentRate"
                  :rate="setValue"
                  layer-color="#ebedf0"
                  color="rgb(16, 174, 181)"
                  :text="'已睡'+sleep.time+'分钟'"
                />
                <van-button class="endbtn" color="#7232dd" plain round @click="end">结束睡眠</van-button>
              </div>
            </div>
            <div class="history">
              <Title title="历史睡眠时长"></Title>
              <div class="list-box">
                <Useless v-if="list.length===0"></Useless>

                <van-swipe-cell v-for="item in list" :key="item.start">
                  <van-cell
                    center
                    :title="setTime(item.start)+' (入睡)'"
                    :value="Time(item.time)"
                    :label="setTime(item.end)+' (睡醒)'"
                  />
                  <template #right>
                    <van-button @click="delecte(item.start)" square type="danger" text="删除" />
                  </template>
                </van-swipe-cell>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="统计图表">
          <echart :list="list"></echart>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import KoalaIcon from "../components/KoalaIcon/KoalaIcon";
import Title from "../components/title/title";
import Useless from "../components/Useless/Useless";
import echart from "../components/echart/sleep";
import { Toast } from "vant";
export default {
  data() {
    return {
      sleepShow: true,
      currentRate: 15,
      time: null,
      list: [],
      sleep: {
        start: null,
        end: null,
        time: 0,
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    start() {
      Toast("已进入睡眠状态~");
      this.sleepShow = false;
      this.sleep.start = new Date().getTime();
      this.time = setInterval(() => {
        this.sleep.time += 1;
      }, 60000);
    },
    getData() {
      if (localStorage.getItem("sleep")) {
        this.list = JSON.parse(localStorage.getItem("sleep"));
      } else {
        this.list = [];
      }
    },
    end() {
      this.sleepShow = true;
      this.sleep.end = new Date().getTime();
      this.getData();
      this.list.unshift(this.sleep);
      localStorage.setItem("sleep", JSON.stringify(this.list));
      Toast("已结束睡眠状态，本次睡眠" + this.sleep.time + "分~");
      clearInterval(this.time);
      this.sleep.time = 0;
    },
    Time(time) {
      return time + " 分钟";
    },
    delecte(time) {
      this.list.forEach((item, index) => {
        if (item.start === time) {
          this.list.splice(index, 1);
        }
      });
      localStorage.setItem("sleep", JSON.stringify(this.list));
    },
  },
  computed: {
    setValue() {
      return (this.sleep.time / 480) * 100;
    },
  },
  destroyed() {
    clearInterval(this.time);
  },
  components: {
    KoalaIcon,
    Title,
    Useless,
    echart,
  },
};
</script>
<style scoped lang="less">
.topsleep {
  padding: 0.666667rem 0.266667rem;
}
.sleepbox {
  .icon {
    width: 20%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    margin-top: 0.4rem;
  }
}
.timebox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 0.533333rem;
  flex-direction: column;
  .endbtn {
    margin-top: 0.4rem;
  }
}
.list-box {
  padding: 0.2rem;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.van-button--danger {
  height: 100%;
}
</style>