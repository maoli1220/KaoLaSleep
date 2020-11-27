<template>
  <div>
    <div class="banners">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#d43c33">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img class="bannersImgs" :src="item.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banners"],
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped>
.banners {
  padding: 0.266667rem;
}
.bannersImgs {
  width: 100%;
}
</style>