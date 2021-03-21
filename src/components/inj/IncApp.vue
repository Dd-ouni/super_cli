<template>
  <slot>
    <el-button type="text" @click="showDialog">添加</el-button>
  </slot>

  <DDialog v-model="dialogVisible" @sure="Sure">
    <el-row :gutter="20">
      <el-col :span="6">应用名称</el-col>
      <el-col :span="18">
        <el-input
          size="small"
          placeholder="请选择应用"
          v-model="appData.app_name"
          @focus="SelApp"
        >
        </el-input>
      </el-col>

      <el-col :span="6">应用路径</el-col>
      <el-col :span="18">
        <el-input size="small" disabled v-model="appData.app_path"> </el-input>
      </el-col>

      <el-col :span="6">启动参数</el-col>
      <el-col :span="18">
        <el-input size="small" v-model="appData.app_arg"> </el-input>
      </el-col>

      <el-col :span="6">应用描述</el-col>
      <el-col :span="18">
        <el-input
          size="small"
          placeholder="请输入内容"
          v-model="appData.des"
        >
        </el-input>
      </el-col>

      <el-col :span="6">注入模块</el-col>
      <el-col :span="18">
        <el-input
          size="small"
          placeholder="请选择模块"
          v-model="appData.dll_name"
          @focus="SelDll"
        >
        </el-input>
      </el-col>
    </el-row>
  </DDialog>
</template>

<script>
import { nextTick, reactive, toRefs } from "vue";

export default {
  props: {
    hdlVer: {
      type: Boolean,
      default: false,
    },
    callback: Function,
  },
  emits: ["click", "sure"],
  setup(props, { emit }) {

    const state = reactive({
      dialogVisible: false,
      appData: {
        app_name: "",
        app_path: "",
        app_file: "",
        des: "",
        dll_name: "",
        dll_path: "",
        dll_file: "",
        app_arg: "",
        is_inj: false,
        is_debug: false,
      },
    });
    
    function Sure() {
      emit("sure", state.appData);
    }

    function showDialog() {
      emit("click", (ret) => {
        if (props.hdlVer && ret) {
          state.dialogVisible = true;
        }
      });
      if (!props.hdlVer) {
        state.dialogVisible = true;
      }
    }

    function SelApp() {
      let ret = 0;
      ret = window.selapp();
      if (ret && ret.path) {
        console.log(ret);
        let app_paths = ret.path.split("\\");
        state.appData.app_path = ret.path;
        state.appData.app_name = app_paths[app_paths.length - 1];
        state.appData.app_file = app_paths.splice(0, app_paths.length - 1);
      }
    }

    function SelDll() {
      let ret = 0;
      ret = window.selapp();
      if (ret && ret.path) {
        console.log(ret);
        let app_paths = ret.path.split("\\");
        state.appData.dll_path = ret.path;
        state.appData.dll_name = app_paths[app_paths.length - 1];
        state.appData.dll_file = app_paths.splice(0, app_paths.length - 1);
      }
    }

    return {
      ...toRefs(state),
      showDialog,
      SelApp,
      SelDll,
      Sure,
    };
  },
};
</script>

<style lang="scss">
</style>