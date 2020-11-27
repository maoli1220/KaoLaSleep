<template>
  <div class="details">
    <div class="con">
      <bar :left="true" title="歌单详情"></bar>
      <div class="list-box">
        <van-card :desc="playlist.description" :title="playlist.name" :thumb="playlist.coverImgUrl">
          <template #tags>
            <van-tag
              plain
              style="margin:5px"
              type="danger"
              v-for="(item,index) in playlist.tags"
              :key="index"
              color="#07c160"
            >{{item}}</van-tag>
          </template>
        </van-card>
        <song v-for="item in privileges" :key="item.id" :title="item.name" :name="setName(item.ar)" :id="item.id"></song>
      </div>
    </div>
  </div>
</template>
<script>
import bar from "../components/Tabbar/Tabar";
import song from "../components/song/song"
export default {
  name: "Details",
  data() {
    return {
      playlist: {},
      privileges: [],
    };
  },
  created() {
    if (this.$route.params.id) {
      this.axios
        .get("/playlist/detail?id=" + this.$route.params.id)
        .then((res) => {
          this.playlist = res.data.playlist;
          this.privileges=res.data.playlist.tracks
        });
    }
  },
  methods: {
      setName(item){
          let str=''
          item.forEach(item=>{
              str+=item.name+" "
          })
          return str
      }
  },
  components: {
    bar,
    song
  },
};
</script>
<style scoped lang="less">
.details {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 10;
}
.list-box {
  margin-top: 50px;
}
</style>