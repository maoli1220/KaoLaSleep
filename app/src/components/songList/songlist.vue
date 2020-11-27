<template>
  <div class="songlist" @click="Details">
    <div class="imgbox">
      <img :src="src" alt />
    </div>
    <div class="name">{{name}}</div>
  </div>
</template>
<script>
export default {
  props: ["src", "name","id"],
  data() {
    return {};
  },
  created() {
  },
  methods: {
    Details(){
      this.$router.push({
        name:"Details",
        params:{
          id:this.id
        }
      })
    }
  },
  components: {},
};
</script>
<style scoped lang="less">
.songlist {
  width: 32%;
  .imgbox {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    min-height: 30px;
    line-height: 1.2;
    margin: .066667rem 0;
    font-size: 13px;
  }
}
</style>