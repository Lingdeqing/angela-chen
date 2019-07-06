<template>
  <el-dialog title="预览" :visible.sync="visible" center>
    申请弹窗
    <p>用户名：{{ user.name }}</p>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    }
  }
};
</script>
