<template>
  <div>
    <audio ref="audio" :src="$store.state.playUrl" autoplay></audio>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不会被缓存的视图组件，比如 Profile！ -->
    </router-view>
    <van-tabbar route active-color="#FFC300">
      <van-tabbar-item to="/sleep">
        <span>睡眠</span>
        <template #icon="props">
          <i class="iconfont icon-shuimian"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/clock">
        <span>闹钟</span>
        <template #icon="props">
          <i class="iconfont icon-clock"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/music">
        <span>音乐</span>
        <template #icon="props">
          <i class="iconfont icon-yinle"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/infor">
        <span>我的</span>
        <template #icon="props">
          <i class="iconfont icon-wode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  mounted() {
    this.$refs.audio.addEventListener("play", () => {
      this.updateSong({ key: "status", value: true });
    });
    this.$refs.audio.addEventListener("pause", () => {
      this.updateSong({ key: "status", value: false });
    });
  },
  beforeDestroy() {
    this.$refs.audio.removeEventListener("play");
    this.$refs.audio.removeEventListener("pause");
  },
  methods: {
    ...mapMutations(["updateSong"]),
  },
  components: {},
};
</script>
<style scoped lang="less">
i {
  font-size: 0.6rem;
}
</style>