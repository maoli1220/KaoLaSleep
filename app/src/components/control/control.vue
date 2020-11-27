<template>
  <div class="control">
    <div class="imgbox">
      <img
        :src="this.$store.state.imgUrl"
        alt
      />
    </div>
    <div class="title">{{$store.state.name}}</div>
    <div class="imgbox icon">
       <i class="iconfont icon-zantingtingzhi" v-if="$store.state.status" @click="play(2)"></i>
       <i class="iconfont icon-bofang" v-if="!$store.state.status" @click="play(1)"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
  },
  methods: {
    play(status){
      if(status===2){
          document.querySelector("audio").pause()
      }else{
        document.querySelector("audio").play()
      }
    }
  },
  mounted(){
   
  },
  components: {},
};
</script>
<style scoped lang="less">
.control {
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 20px;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 0 0.4rem;
  bottom: 60px;
  position: fixed;
  display: flex;
  div{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .imgbox {
    width: 50px;
    height: 50px;
    padding: 0.2rem;
    img {
      width: 100%;
    }
  }
  .title{
      flex: 1;
      justify-content: right;
      padding-left:.266667rem ;
  }
  .icon{
      font-size: .533333rem;
  }
}
</style>