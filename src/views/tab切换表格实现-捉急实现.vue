<template>
  <div>
    <p>难受</p>
    <ul>
      <li><a href="javascritp:;" @click="setTab('tabA')">tabA</a></li>
      <li><a href="javascritp:;" @click="setTab('tabB')">tabB</a></li>
      <li><a href="javascritp:;" @click="setTab('tabC')">tabC</a></li>
      <li><a href="javascritp:;" @click="setTab('tabD')">tabD</a></li>
      <li><a href="javascritp:;" @click="setTab('tabE')">tabE</a></li>
    </ul>
    <el-table :data="tableMap[tabKey]" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tabKey: "tabA",
      tableMap: {
        //  初始指定子属性，使其被响应
        tabA: [],
        tabB: [],
        tabC: [],
        tabD: [],
        tabE: []
      }
    };
  },
  methods: {
    setTab(tabKey) {
      this.tabKey = tabKey;
      this.getPageData(this.tabKey).then(({ items }) => {
        this.tableMap[this.tabKey] = items;
      });
    },
    getPageData(tabKey) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            items: [
              {
                date: tabKey,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1518 弄"
              },
              {
                date: tabKey,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1517 弄"
              },
              {
                date: tabKey,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄"
              },
              {
                date: tabKey,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1516 弄"
              }
            ],
            total: 100
          });
        });
      });
    }
  }
};
</script>
