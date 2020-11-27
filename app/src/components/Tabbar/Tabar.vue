<template>
  <div>
    <div class="Tarbar">
      <div class="left">
        <div class="con" v-if="left" @click="black">
          <van-icon name="arrow-left" />
          <span class="text">返回</span>
        </div>
      </div>
      <div class="center">
        <span class="text">{{title}}</span>
      </div>
      <div class="right">
        <slot v-if="right" name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["left", "right", "title"],
  data() {
    return {};
  },
  created() {},
  methods: {
    black() {
        this.$router.go(-1);
    },
  },
  components: {},
};
</script>
<style scoped lang="less">
.Tarbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0.266667rem 0;
  border-bottom: 3px solid #f7f8fa;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left,
  .right {
    width: 15%;
    font-size: 0.533333rem;
    color: #323233;
  }
  .center {
    flex: 1;
  }
  .text {
    font-size: 0.4rem;
  }
}
</style>