<script>
// import { reactive, toRefs } from "vue";

export default {
  render() {
    return (
      <div>
        <el-table data={this.tableData} {...this.tableArgs} style="width: 100%">
          {this.tableCols.map((item, index) => this.columRenader(item, index))}
        </el-table>
        {this.isPagination ? (
          <el-pagination
            page-size={20}
            background
            layout="total, sizes, prev, pager, next, jumper"
            {...this.pgArgs}
          ></el-pagination>
        ) : null}
      </div>
    );
  },
  setup(props) {
    console.log(props);
    const columRenader = (item, index) => {
      if (!item.type) {
        return (
          <el-table-column
            key={index}
            label={item.label}
            prop={item.prop}
          ></el-table-column>
        );
      }
      if (item.type == "Render") {
        return (
          <el-table-column key={index} label={item.label}>
            {{
              default: (scope) => item.render(scope.row),
            }}
          </el-table-column>
        );
      }
    };
    return {
      columRenader,
    };
  },
  props: {
    isPagination: {
      type: Boolean,
      default: true,
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    tableCols: {
      type: Array,
      default: () => [],
    },
    tableArgs: {
      type: Object,
      default: () => {},
    },
    pgArgs: {
      type: Object,
      default: () => {},
    },
  },

  // props: {
  //   tableData: { type: Array, default: () => [] },

  //   // 表格型号：mini,medium,small
  //   size: { type: String, default: "small" },
  //   border: { type: Boolean, default: true },
  //   loading: { type: Boolean, default: false },
  //   // 表格操作
  //   isHandle: { type: Boolean, default: false },
  //   tableHandles: { type: Array, default: () => [] },
  //   // 表格数据

  //   // 表格列配置
  //   tableCols: { type: Array, default: () => [] },
  //   // 是否显示表格复选框
  //   isSelection: { type: Boolean, default: false },
  //   defaultSelections: { type: [Array, Object], default: () => null },
  //   // 是否显示表格索引
  //   isIndex: { type: Boolean, default: false },
  //   indexLabel: { type: String, default: "序号" },
  //   // 是否本地分页
  //   isLocalPagination: { type: Boolean, default: false },
  //   // 是否显示分页
  //   isPagination: { type: Boolean, default: true },
  //   // pageSize: {
  //   //   type: Number,
  //   //   default: 20,
  //   // },
  //   // currentPage: {
  //   //   type: Number,
  //   //   default: 1,
  //   // },
  //   total: {
  //     type: Number,
  //     default: 0,
  //   },
  //   // 表格宽高
  //   tableWidth: {
  //     type: Number,
  //     default: 0,
  //   },
  //   tableHeight: {
  //     type: Number,
  //     default: 0,
  //   },
  //   cellClassName: Function,
  //   rowDblclick: Function,
  //   sortChange: Function,
  //   selectionChange: Function,
  //   highlightCurrentRow: {
  //     type: Boolean,
  //     default: true,
  //   },
  //   refreshHdl: Function,
  //   cellStyle: Function,
  //   tableClassName: {
  //     type: Array,
  //     default: () => [],
  //   },
  //   headerRowClassName: {
  //     type: String,
  //     default: "",
  //   },
  //   maxHeight: {
  //     type: [String, Number],
  //     default: "",
  //   },
  // },

  name: "DTable",
  // watch: {
  //   tableData(val) {
  //     if (this.isLocalPagination) {
  //       this.$nextTick(() => {
  //         this.localDataHandle();
  //       });
  //     }
  //   },
  //   defaultSelections(val) {
  //     this.$nextTick(() => {
  //       if (Array.isArray(val)) {
  //         val.forEach((row) => {
  //           this.$refs.DTable.toggleRowSelection(row);
  //         });
  //       } else {
  //         this.$refs.DTable.toggleRowSelection(val);
  //       }
  //     });
  //   },
  // },
  // created() {
  //   if (this.isLocalPagination) {
  //     this.$nextTick(() => {
  //       this.localDataHandle();
  //     });
  //   }
  // },
  // data() {
  //   return {
  //     localTableData: [],
  //   };
  // },
  // methods: {
  //   table() {
  //     return this.$refs.DTable;
  //   },
  //   _selectionChange(selection) {
  //     if (typeof this.selectionChange == "function")
  //       this.selectionChange(selection);
  //   },
  //   _rowDblclick(row, column, event) {
  //     if (typeof this.rowDblclick == "function")
  //       this.rowDblclick(row, column, event);
  //   },
  //   _sortChange(arg) {
  //     if (typeof this.sortChange == "function") this.sortChange(arg);
  //   },
  //   localDataHandle() {
  //     this.localTableData = this.tableData.slice(
  //       (this.currentPage - 1) * this.pageSize,
  //       this.currentPage * this.pageSize - 1
  //     );
  //     console.log(this.localTableData);
  //   },
  //   // 表格勾选
  //   select(rows, row) {
  //     this.$emit("select", rows, row);
  //   },
  //   // 全选
  //   selectAll(rows) {
  //     this.$emit("select", rows);
  //   },
  //   handleCurrentChange(val) {
  //     if (this.isLocalPagination) {
  //       this.currentPage = val;
  //       this.$emit("refresh");
  //       this.$nextTick(() => {
  //         this.localDataHandle();
  //       });
  //     } else {
  //       if (typeof this.refreshHdl == "function") {
  //         this.refreshHdl({ currentPage: val });
  //       }
  //       this.$emit("refresh");
  //     }
  //   },
  //   handleSizeChange(val) {
  //     if (this.isLocalPagination) {
  //       this.pageSize = val;
  //       this.currentPage = 1;
  //       this.$emit("refresh");
  //       this.$nextTick(() => {
  //         this.localDataHandle();
  //       });
  //     } else {
  //       if (typeof this.refreshHdl == "function") {
  //         this.refreshHdl({ currentPage: 1, pageSize: val });
  //       }
  //       this.$emit("refresh");
  //     }
  //   },
  //   renderHeader(h, obj) {
  //     return h("span", { class: "ces-table-require" }, obj.column.label);
  //   },
  // },
};
</script>

<style lang="scss"></style>
