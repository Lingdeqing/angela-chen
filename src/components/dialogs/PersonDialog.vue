<template>
  <el-dialog title="预览" :visible.sync="visible" center>
    人员弹窗{{ data }}<br />
    {{ user }}
  </el-dialog>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: ""
    },
    user: {
      type: String,
      default: ""
    }
  },
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
