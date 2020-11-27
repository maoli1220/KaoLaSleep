<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @input="show=true"
      @search="input"
      input-align="center"
    />
    <div v-show="show">
      <Title title="热门搜索"></Title>
      <recommend>
        <span
          v-for="(item,index) in hot"
          :key="index"
          @click="searchSualt(item.first)"
        >{{item.first}}</span>
      </recommend>
      <Title title="历史搜索"></Title>
      <van-cell :title="item" v-for="(item,index) in historyList" :key="index">
        <template #right-icon>
          <i class="iconfont icon-guanbi" @click="delect(item)"></i>
        </template>
      </van-cell>
      <Useless v-if="historyList.length===0"></Useless>
    </div>
    <div class="result" v-show="!show">
      <songs
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        :name="artname(item)"
        :id="item.id"
      ></songs>
    </div>
  </div>
</template>
<script>
import recommend from "../components/recommend/recommend";
import Title from "../components/title/title";
import songs from "../components/song/song";
import Useless from "../components/Useless/Useless";
export default {
  data() {
    return {
      value: "",
      hot: [],
      list: [],
      show: true,
      historyList: [],
    };
  },
  created() {
    this.axios.all([this.getData("/search/hot")]).then(
      this.axios.spread((hot) => {
        this.hot = hot.data.result.hots;
      })
    );
    if (localStorage.getItem("history") != null) {
      this.historyList = JSON.parse(localStorage.getItem("history"));
    }else{
      this.historyList=[]
    }
  },
  methods: {
    getData(url) {
      return this.axios.get(url);
    },
    input(value) {
      this.show = false;
      this.searchSualt(value);
    },
    searchSualt(value) {
      this.show = false;
      if (value) {
        this.value = value;
        this.axios.get("/search?keywords=" + value).then((res) => {
          this.list = res.data.result.songs;
          this.history();
        });
      }
    },
    artname(obj) {
      let str = "";
      obj.artists.forEach((item) => {
        str += item.name + " ";
      });
      return str;
    },
    history() {
      if (this.value) {
        if (localStorage.getItem("history") === null) {
          localStorage.setItem("history", JSON.stringify([this.value]));
        } else {
          let arr = JSON.parse(localStorage.getItem("history"));
          arr.unshift(this.value);
          const set = new Set(arr);
          this.historyList = Array.from(set);
          localStorage.setItem("history", JSON.stringify(Array.from(set)));
        }
      }
    },
    delect(str) {
      this.historyList.forEach((item, index) => {
        if (item === str) {
          this.historyList.splice(index, 1);
        }
      });
      localStorage.setItem("history", JSON.stringify(this.historyList));
      this.history();
    },
  },
  components: {
    recommend,
    Title,
    songs,
    Useless,
  },
};
</script>
<style scoped>
</style>