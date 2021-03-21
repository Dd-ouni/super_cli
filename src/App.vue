<template>
  <el-container>
    <Header></Header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer flex="main:left cross:center">底部状态栏</el-footer>
  </el-container>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  nextTick,
  reactive,
  toRefs,
} from "vue";

export default {
  setup() {
    // 菜单
    const Header = defineComponent({
      setup() {
        const { ctx } = getCurrentInstance();
        nextTick(() => {
          console.log(ctx.$route);
        });

        const data = reactive({
          active: "/",
          args: {
            mode: "horizontal",
            textColor: "#fff",
            backgroundColor: "#545c64",
            activeTextColor: "#ffd04b",
          },
          menu: [
            { index: "/", text: "首页" },
            { index: "/inj", text: "注入" },
          ],
          headerStyle: {
            backgroundColor: "#545c64",
            "-webkit-app-region": "drag",
          },
        });

        return {
          ...toRefs(data),
        };
      },
      render() {
        return (
          <el-header
            class="main-menu"
            flex="wrap:nowrap box:last"
            style={this.headerStyle}
          >
            <el-menu default-active={this.active} {...this.args} router>
              {this.menu.map((item) => {
                return (
                  <el-menu-item index={item.index}>{item.text}</el-menu-item>
                );
              })}
            </el-menu>
            <el-button type="text" icon="el-icon-circle-close"></el-button>
          </el-header>
        );
      },
    });

    return {
      Header,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 20px;
  background-color: transparent !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & > .el-container {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: white;
    & > .el-header,
    & > .el-main,
    & > .el-footer {
      padding: 0;
    }
  }
}
.main-menu {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  .el-menu {
    border-bottom: none !important;
  }
  .el-icon-circle-close {
    color: white;
    font-size: 30px;
    padding-right: 14px;
  }
}
</style>
