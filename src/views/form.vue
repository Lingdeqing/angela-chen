<template>
  <el-form label-width="80px" :model="form">
    <el-form-item label="名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="form.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="form.type"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
function createEmpty() {
  return {
    name: "",
    region: "",
    type: ""
  };
}
export default {
  data() {
    return {
      form: createEmpty()
    };
  },
  methods: {
    reset() {
      this.form = createEmpty();
    }
  }
};
</script>
