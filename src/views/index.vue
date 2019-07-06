<template>
  <div>
    <div class="list">
      <span
        class="list-item"
        v-for="(item, index) in items"
        :key="index"
        @click="openDialog(item)"
      >
        <i class="icon" />
        {{ item.title }}
      </span>
    </div>

    <component
      ref="dialog"
      v-if="dialog.component && user"
      :is="dialog.component"
      v-bind="dialog.props"
      :user="user"
    />
  </div>
</template>

<script>
// 引用所有弹窗
const dialogRequireContext = require.context(
  "../components/dialogs",
  true,
  /\.vue$/
);
function getDialogsFromContext(context) {
  return context.keys().reduce((ret, key) => {
    const component = context(key);
    ret[key.slice(2, -4)] = component.default;
    return ret;
  }, {});
}
const Dialogs = getDialogsFromContext(dialogRequireContext);
const { PersonDialog, ApplyDialog } = Dialogs;

export default {
  data() {
    return {
      dialog: {
        component: null,
        props: null
      },
      user: null,
      items: [
        {
          icon: "person",
          title: "人员",
          component: PersonDialog,
          props: {
            data: "哈哈哈"
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        },
        {
          icon: "person",
          title: "申请",
          component: ApplyDialog,
          props: {
            //   ...
          }
        }
      ]
    };
  },
  created() {
    this.getLogin();
  },
  methods: {
    getLogin() {
      setTimeout(() => {
        this.user = {
          name: "yaolin",
          age: 25
        };
      }, 1000);
    },
    openDialog(item) {
      this.dialog = {
        component: item.component,
        props: item.props
      };
      this.$nextTick(() => {
        this.$refs.dialog.open();
      });
    }
  }
};
</script>

<style>
/* body {
  padding: 20px;
} */
.list {
  border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 20px 0 0 20px;
}
.list-item {
  flex: 0 0 200px;
  margin: 0 20px 20px 0;
  height: 50px;
  border: 1px solid red;
}
</style>
