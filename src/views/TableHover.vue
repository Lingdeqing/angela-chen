<template>
  <el-table :data="tableData" style="width: 100%" class="hover-table">
    <el-table-column prop="date" label="日期"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column width="50">
      <template slot-scope="{ row }">
        <el-popover
          placement="top-start"
          width="300"
          trigger="hover"
          popper-class="option-popper"
        >
          <div class="option-trigger-wrapper" slot="reference">
            <div class="option-trigger">...</div>
          </div>
          <span class="option-btn" @click="submit(row)">提交</span>
          <span class="option-btn" @click="transfer(row)">转交</span>
          <span class="option-btn" @click="deny(row)">拒绝</span>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss">
.option-trigger-wrapper {
  width: 30px;
  height: 30px;
  transform: rotate(90deg);
}
.option-trigger {
  line-height: 12px;
  font-size: 20px;
  text-align: center;
  width: 30px;
  height: 20px;
  background: orange;
  color: white;
}

.option-popper.el-popper {
  transform: translate(-32px, 5px);
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  background: red;

  .popper__arrow {
    display: none;
  }

  .option-btn {
    cursor: pointer;
    flex: 1;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    &:hover {
      background: white;
      color: red;
    }
  }
}
.hover-table {
  .el-table__row {
    cursor: pointer;
  }
}
</style>

<script>
export default {
  data() {
    return {
      originData: [
        {
          date: 1561990639445,
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: 1561990639445,
          name: "王小虎",
          sex: 0,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: 1561990639445,
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: 1561990639445,
          name: "王小虎",
          sex: 0,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  computed: {
    tableData() {
      return this.originData.map(row => {
        return {
          ...row,
          sex: row.sex === 0 ? "女" : "男",
          date: new Date(row.date).toLocaleDateString()
        };
      });
    }
  },
  methods: {
    submit() {
      alert("提交");
    },
    transfer() {
      alert("转交");
    },
    deny() {
      alert("拒绝");
    }
  }
};
</script>
