<template>
  <DTable
    ref="table"
    :tableData="tableArgs.data"
    :tableCols="tableArgs.col"
    :tableArgs="tableArgs.args"
    :pgArgs="tableArgs.pgArgs"
  >
  </DTable>
</template>

<script>
import { reactive, ref } from "vue";
import IncApp from "@/components/inj/IncApp.vue";

export default {
  components: {
    IncApp,
  },
  setup() {
    const table = ref(null);
    console.log(table);

    let data = [];

    try {
      data = JSON.parse(window.getcfg().data);
    } catch (error) {
      data.push({
        app_name: "xxx.exe",
        app_arg: "",
        dll_name: "xxx.dll",
        des: "测试数据",
        is_inj: true,
        is_debug: true,
      });
    }

    const tableArgs = reactive({
      data: data,
      col: [
        { args: { prop: "app_name", label: "应用名称" } },
        { args: { prop: "app_arg", label: "启动参数" } },
        { args: { prop: "dll_name", label: "模块名称" } },
        { args: { prop: "des", label: "应用描述" } },
        {
          args: { label: "是否注入" },
          render: (row) => {
            return <el-checkbox v-model={row.is_inj}></el-checkbox>;
          },
        },
        {
          args: { label: "是否调试" },
          render: (row) => {
            return <el-checkbox v-model={row.is_debug}></el-checkbox>;
          },
        },
        {
          args: { label: "操作", fixed: "right", width: "144" },
          renderHeader: (column) => {
            return (
              <el-dropdown>
                {{
                  default: () => (
                    <span class="el-dropdown-link">
                      操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                  ),
                  dropdown: () => (
                    <el-dropdown-menu>
                      <el-dropdown-item>
                        <IncApp onSure={_IncApp}></IncApp>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  ),
                }}
              </el-dropdown>
            );
          },
          render: (row) => {
            return (
              <span>
                <el-button
                  onClick={() => {
                    console.log(row);
                  }}
                  type="primary"
                  size="mini"
                >
                  编辑
                </el-button>
                <el-button
                  onClick={() => {
                    console.log(row);
                  }}
                  type="danger"
                  size="mini"
                >
                  删除
                </el-button>
              </span>
            );
          },
        },
      ],
      args: {
        border: true,
      },
      pgArgs: {
        total: 0,
        currentPage: 0,
      },
    });

    function _IncApp(data) {
      tableArgs.data.push(data);
      try {
        window.setcfg(JSON.stringify(tableArgs.data));
      } catch (error) {
        console.log(error);
      }
    }

    return {
      tableArgs,
    };
  },
  data() {
    return {};
  },
  name: "Inj",
};
</script>
<style lang="scss"></style>
