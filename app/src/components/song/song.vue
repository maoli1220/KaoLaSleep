<template>
  <div class="song" >
    <van-cell center :title="title" :label="name" />
    <i class="iconfont icon icon-tubiaozhizuomoban"  @click="play"  ></i>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import { Notify } from 'vant';
export default {
  props: ["title", "name", "id"],
  data() {
    return {};
  },
  created() {},
  methods: {
    play() {
      this.updateSong("updateSong", { key: "id", value: this.id });
      this.getSong(this.id);
      Notify({ type: 'success', message: '正在播放~' });
    },
    ...mapActions(["getSong"]),
    ...mapMutations(["updateSong"]),
  },
  components: {},
};
</script>
<style scoped lang="less">
.song {
  position: relative;
}
.icon {
  position: absolute;
  right: 0.666667rem;
  top: 50%;
  font-size: 0.666667rem;
  color: #646566;
  transform: translateY(-50%);
}
</style>