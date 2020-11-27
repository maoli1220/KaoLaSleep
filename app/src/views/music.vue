<template>
  <div>
    <van-tabs>
      <van-tab title="推荐音乐">
        <banners :banners="banners"></banners>
        <bar title="推荐歌单"></bar>
        <div class="songlistbox">
          <song  v-for="item in songList" :key="item.id" :id="item.id" :src="item.picUrl" :name="item.name"></song>
        </div>
        <bar title="推荐音乐"></bar>
        <div class="songsbox">
            <songs
          v-for="item in song"
          :key="item.id"
          :title="item.name"
          :name="setname(item.song.artists)"
          :id="item.id"
        ></songs>
        </div>
        <control></control>
      </van-tab>
      <van-tab title="搜索">
        <search></search>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import banners from "../components/banners/banners";
import song from "../components/songList/songlist";
import bar from "../components/bar/bar";
import songs from "../components/song/song";
import search from "./search";
import control from "../components/control/control";
export default {
  data() {
    return {
      banners: [],
      songList: [],
      song: [],
    };
  },
  created() {
    this.axios
      .all([
        this.send("/banner?type=1"),
        this.send("/personalized?limit=6"),
        this.send("/personalized/newsong"),
      ])
      .then(
        this.axios.spread((banner, songlist, song) => {
          this.banners = banner.data.banners;
          this.songList = songlist.data.result;
          this.song = song.data.result;
        })
      );
  },
  methods: {
    send(url) {
      return this.axios.get(url);
    },
    setname(item) {
      let str=""
      item.forEach(value=>{
        str+= value.name+" "
      })
      return str
    },
  },
  components: {
    banners,
    song,
    bar,
    songs,
    search,
    control,
  },
};
</script>
<style scoped>
.bannersImgs {
  width: 100%;
}
.songlistbox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.266667rem;
  justify-content: space-around;
}
.songsbox{
    margin-bottom: 100px;
}
</style>
