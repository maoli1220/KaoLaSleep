<template>
  <div class="bar">{{title}}</div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped lang="less">
.bar {
  position: relative;
  padding-left: .4rem;
  margin-bottom: 14px;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
}
.bar:after {
  content: " ";
  position: absolute;
  left: .133333rem;
  top: 50%;
  margin-top: -9px;
  width: 4px;
  height: 16px;
  background-color: #d33a31;
}
</style>