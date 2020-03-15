<template>
  <div class="container">
    <el-divider>正常</el-divider>
    <div class="content fl p-20 f-s-14">
      <trends trendType="top" percentage="5%">
        <template v-slot:text>营业额</template>
      </trends>
      <trends trendType="bottom" percentage="3%">
        <template v-slot:text>个人业绩</template>
      </trends>
    </div>
    <el-divider>颜色反转</el-divider>
    <div class="content fl p-20 f-s-14">
      <trends trendType="top" percentage="5%" reverseColor>
        <template v-slot:text>销售量</template>
      </trends>
      <trends trendType="bottom" percentage="3%" reverseColor>
        <template v-slot:text>成本</template>
      </trends>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.container {
  margin-top: 100px;
  .content {
    border: 1px solid #ccc;
    margin-bottom: 100px;
  }
}
</style>