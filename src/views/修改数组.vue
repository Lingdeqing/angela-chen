<template>
  <div>
    <p>items: {{ items | str }}</p>
    <p>items1(computed): {{ items1 | str }}</p>
    <p>items2(watch): {{ items2 | str }}</p>
    <p>
      <button type="button" @click="inc">
        []修改item<span style="color: red">错误的</span>
      </button>
    </p>
    <p>
      <button type="button" @click="inc1">splice 修改item</button>
    </p>
    <p>
      <button type="button" @click="inc2">$set 修改item</button>
    </p>
    <p>
      <button type="button" @click="inc3">直接赋值 修改item</button>
    </p>
    <p>
      <button type="button" @click="inc4">for循环中 修改item</button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      items2: null
    };
  },
  mounted() {
    this.items = [{ a: 1, b: 2 }];
  },
  computed: {
    items1() {
      return this.items.map(a => {
        return {
          ...a
        };
      });
    }
  },
  watch: {
    items1: {
      handler() {
        this.items2 = this.items.map(a => {
          return {
            ...a
          };
        });
      }
    }
  },
  methods: {
    inc() {
      // 错误使用方式
      this.items[0] = {
        a: 1 + this.items[0].a,
        b: 2
      };
    },
    inc1() {
      // 我喜欢这种
      this.items.splice(0, 1, {
        a: 1 + this.items[0].a,
        b: 2
      });
    },
    inc2() {
      // $set
      this.$set(this.items, 0, {
        a: 1 + this.items[0].a,
        b: 2
      });
    },
    inc3() {
      // 直接赋值也是好的
      this.items = [
        {
          a: 1 + this.items[0].a,
          b: 2
        }
      ];
    },
    inc4() {
      // forEach也是好的
      this.items.forEach(item => {
        item.a = 1 + item.a;
      });
    }
  },
  filters: {
    str(obj) {
      return JSON.stringify(obj, null, 2);
    }
  }
};
</script>
