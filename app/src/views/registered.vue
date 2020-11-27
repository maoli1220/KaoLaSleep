<template>
  <div class="registered">
    <bar :left="true" title="用户注册"></bar>
    <div class="con">
      <div class="icon">
        <icon></icon>
      </div>
      <div class="input-box">
        <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
        <van-cell-group>
          <van-field v-model="msg.nickname" label="昵称" placeholder="请输入昵称" />
          <van-field v-model="msg.name" label="姓名" placeholder="请输入姓名" />
          <van-field v-model="msg.tel" label="手机号" placeholder="请输入手机号" />
          <van-field v-model="msg.sex" label="性别" placeholder="请输入性别" />
          <van-field v-model="msg.pwd" label="密码" placeholder="请输入密码" />
          <van-field v-model="msg.repwd" label="确认密码" placeholder="再次输入密码" />
          <van-field
            v-model="msg.msg"
            rows="1"
            autosize
            label="简介"
            type="textarea"
            placeholder="请输入个人简介"
          />
        </van-cell-group>
        <div class="btn">
          <van-button type="primary" @click="reg">立即注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bar from "../components/Tabbar/Tabar";
import icon from "../components/KoalaIcon/KoalaIcon";
import { Toast } from "vant";
export default {
  data() {
    return {
      msg: {
        nickname: "",
        name: "",
        tel: "",
        sex: "",
        pwd: "",
        repwd: "",
        msg: "",
      },
    };
  },
  created() {},
  methods: {
    reg() {
      if (
        this.msg.nickname &&
        this.msg.name &&
        this.msg.tel &&
        this.msg.sex &&
        this.msg.pwd &&
        this.msg.repwd &&
        this.msg.msg
      ) {
        this.axios
          .post("http://localhost:3001/registered", this.msg)
          .then((res) => {
            if (res.data.status === 201) {
              Toast("手机号已被注册过，请更换其他手机号进行注册！");
            } else {
              Toast("账号注册成功！");
              this.$router.replace("/login");
            }
          });
      } else {
        Toast("请将注册信息填写完整！");
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
.registered {
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
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.666667rem;
  }
}
</style>