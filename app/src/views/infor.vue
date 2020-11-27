<template>
  <div>
    <div class="icon-box">
      <icon></icon>
    </div>
    <van-panel title="昵称" :desc="msg.nickname"></van-panel>
    <van-panel title="姓名" :desc="msg.name"></van-panel>
    <van-panel title="手机号" :desc="msg.tel"></van-panel>
    <van-panel title="性别" :desc="msg.sex"></van-panel>
    <van-panel title="个人介绍" :desc="msg.msg"></van-panel>
    <div class="btn">
      <van-button type="danger" color="#cb3837" @click="close()">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import icon from "../components/KoalaIcon/KoalaIcon";
export default {
  data() {
    return {
      msg: {},
    };
  },
  created() {
    if (!sessionStorage.getItem("msg")) {
      this.$router.replace("/login");
      Toast("请先登录！");
    } else {
      this.msg = JSON.parse(sessionStorage.getItem("msg"));
    }
  },
  methods: {
    close() {
      this.$router.replace("/login");
      sessionStorage.clear();
    },
  },
  components: {
    icon,
  },
};
</script>
<style scoped lang="less">
.icon-box {
  width: 20vw;
  height: 20vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 1.333333rem 0;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.666667rem 0;
}
</style>