<template>
  <div>
    <div class="ClockList">
      <van-swipe-cell>
        <van-cell :title="setTime(time)" icon="clock-o">
          <template #right-icon>
            <van-switch
              v-model="statusBle"
              size="20px"
              active-color="#07c160"
              inactive-color="#ADADAD"
              @change="change"
            />
          </template>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" @click="delect" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>
<script>
export default {
  props: ["time", "status"],
  data() {
    return {
      checked: true,
      statusBle: true,
    };
  },
  created() {},
  methods: {
    change(status) {
      let arr = [];
      if (localStorage.getItem("clock") != null) {
        arr = JSON.parse(localStorage.getItem("clock"));
      }
      arr.forEach((item, index) => {
        if (item.clock === this.time) {
          arr[index].status = status;
        }
      });
      localStorage.setItem("clock", JSON.stringify(arr));
      this.$emit("update");
    },
    setTime(time) {
      var date = new Date(time);
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      var strDate = M + D + h + m + s;
      // var strDate = Y + M + D;
      return strDate;
    },
    delect() {
      let arr = [];
      if (localStorage.getItem("clock") != null) {
        arr = JSON.parse(localStorage.getItem("clock"));
      }
      arr.forEach((item, index) => {
        if (item.clock === this.time) {
            arr.splice(index,1)
        }
      });
      localStorage.setItem("clock", JSON.stringify(arr));
      this.$emit("update");
    },
  },
  components: {},
  watch: {
    status: {
      immediate: true,
      handler() {
        this.statusBle = this.status;
      },
    },
  },
};
</script>
<style scoped>
.ClockList {
  width: 100%;
}
</style>