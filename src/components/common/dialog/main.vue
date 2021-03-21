<template>
  <el-dialog
    :title="title"
    :model-value="modelValue"
    width="500px"
    :modal="false"
    :append-to-body="true"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import { reactive, toRefs } from "vue";

export default {
  emits: ["sure", "cancel"],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示",
    },
    hdlVer: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    function cancel() {
      emit("sure", (ret) => {
        if (ret && props.hdlVer) {
          emit("update:modelValue", false);
        }
      });

      if (!props.hdlVer) {
        emit("update:modelValue", false);
      }
    }

    function sure() {
      emit("sure", (ret) => {
        if (ret && props.hdlVer) {
          emit("update:modelValue", false);
        }
      });

      if (!props.hdlVer) {
        emit("update:modelValue", false);
      }
    }
    return {
      cancel,
      sure,
    };
  },

  name: "DDialog",
};
</script>

<style lang="scss"></style>
