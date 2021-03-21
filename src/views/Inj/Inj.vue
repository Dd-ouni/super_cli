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

export default {
  setup() {
    const table = ref(null);
    console.log(table);
    
    const tableArgs = reactive({
      data: [
        {
          app_name: "xxx.exe",
          dll_name: "xxx.dll",
          des: "测试数据",
          is_inj: true,
          is_debug: true,
        },
      ],
      col: [
        { prop: "app_name", label: "应用名称" },
        { prop: "dll_name", label: "模块名称" },
        { prop: "des", label: "应用描述" },
        {
          type: "Render",
          label: "是否注入",
          render: (row) => {
            return <el-checkbox v-model={row.is_inj}></el-checkbox>;
          },
        },
        {
          type: "Render",
          label: "是否调试",
          render: (row) => {
            return <el-checkbox v-model={row.is_debug}></el-checkbox>;
          },
        },
        {
          type: "Render",
          label: "操作",
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
