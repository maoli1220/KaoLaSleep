<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped lang="less">
.recommend {
  padding: 0.266667rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  span {
    border: 1px solid #d3d4da;
    padding: .133333rem 0.266667rem;
    border-radius: .533333rem;
    margin: .133333rem .333333rem;
  }
}
</style>