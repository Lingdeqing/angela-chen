<template>
  <el-pagination
    @current-change="getPageData"
    :current-page="current"
    :page-size="100"
    layout="prev, pager, next, jumper"
    :total="1000"
  >
  </el-pagination>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    getPageData(current) {
      // 拿函数参数去获取数据
      console.log(current);
    }
  }
};
</script>
