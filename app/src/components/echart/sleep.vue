<template>
  <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
</template>
<script>
export default {
  props: ["list"],
  data() {
    this.extend = {
      series: {
        label: { show: true, position: "top" },
      },
    };
    return {
      chartData: {
        columns: ["日期", "时间/分"],
        rows: [
          { 日期: "10-29", "时间/分": 60 },
          { 日期: "11-02", "时间/分": 40 },
          { 日期: "11-04", "时间/分": 430 },
          { 日期: "11-11", "时间/分": 210 },
          { 日期: "11-12", "时间/分": 125 },
          { 日期: "11-16", "时间/分": 87 },
        ],
      },
    };
  },
  created() {},
  watch: {
    list: {
      immediate: true,
      deep:true,
      handler() {
        this.list.forEach((value) => {
          let date = new Date(value.start);
          this.chartData.rows.push({
            日期: date.getMonth() + 1 + "-" + date.getDate(),
            "时间/分": value.time,
          });
        });
      },
    },
  },
};
</script>
<style lang="less" scoped>
.ve-histogram {
  margin-top: 50px;
}
</style>