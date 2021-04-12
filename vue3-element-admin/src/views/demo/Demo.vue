<template>
  <div class="">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-time-picker
      is-range
      arrow-control
      v-model="value2.date"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <el-empty description="描述文字"></el-empty>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";

export default {
  name: "",
  components: {},
  setup(props) {
    const value1 = ref("");

    const value2 = reactive({
      date: [],
    });
    value2.date = [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)];
    return { value1, value2 };
  },
};
</script>

<style lang='scss' scoped>
</style>
