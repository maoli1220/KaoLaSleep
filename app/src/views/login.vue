<template>
  <div class="login">
    <bar :left="true" title="用户登录"></bar>
    <div class="con">
      <div class="icon">
        <icon></icon>
      </div>
      <div class="input-box">
        <van-field v-model="userID.tel" type="number" placeholder="请输入登录用户名" label="账号" />
        <van-field v-model="userID.pwd" type="password" placeholder="请输入登录密码" label="密码" />
        <div class="btn">
          <van-button type="default" @click="login">登录</van-button>
          <van-button type="default" @click="$router.push('/registered')">注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bar from "../components/Tabbar/Tabar";
import icon from "../components/KoalaIcon/KoalaIcon";
import {Toast} from "vant"
export default {
  data() {
    return {
      userID: {
        tel: "",
        pwd: "",
      },
    };
  },
  created() {},
  methods: {
    login() {
      console.log(1)
      if (this.userID.tel && this.userID.pwd) {
        this.axios.post("http://localhost:3001/login", this.userID).then((res) => {
          if(res.data.status===200){
            sessionStorage.setItem("msg",JSON.stringify(res.data.msg))
            this.$router.replace("/infor")
            Toast("登录成功！")
          }else{
            Toast("账号或者密码错误！")
          }
        });
      }
    },
  },
  components: {
    bar,
    icon,
  },
};
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  .con {
    padding: 2.666667rem 0;
    .icon {
      width: 20vw;
      height: 20vh;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .input-box {
      .btn {
        width: 100%;
        display: flex;
        padding: 0 20%;
        justify-content: space-around;
        margin-top: 0.666667rem;
      }
    }
  }
}
</style>