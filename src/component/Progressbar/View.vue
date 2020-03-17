<template>
  <div style="width:600px">
    <!-- 普通进度条 -->
    <div class="item">
      <h2 class="m-b-10">普通进度条</h2>
      <progress-bar :percentage="35.5"></progress-bar>
    </div>
    <!-- 普通进度条控制高度 -->
    <div class="item">
      <h2 class="m-b-10">普通进度条控制高度</h2>
      <progress-bar :percentage="62.3" :height="24"></progress-bar>
    </div>
    <!-- 文字内显 -->
    <div class="item">
      <h2 class="m-b-10">文字内显</h2>
      <progress-bar :percentage="70" :height="24" :textinside="true"></progress-bar>
    </div>
    <!-- 文字内显且控制高度 -->
    <div class="item">
      <h2 class="m-b-10">文字内显且控制高度</h2>
      <progress-bar :percentage="33.8" :height="32" :textinside="true"></progress-bar>
    </div>
    <!-- 自定义颜色 -->
    <div class="item">
      <h2 class="m-b-10">自定义颜色</h2>
      <progress-bar :percentage="66" bccolor="#FF4466"></progress-bar>
    </div>
    <!-- 不显示进度 -->
    <div class="item">
      <h2 class="m-b-10">不显示进度</h2>
      <progress-bar :percentage="66" bccolor="#FF4466" :noData="true"></progress-bar>
    </div>
    <!-- 自定义显示内容 -->
    <div class="item">
      <h2 class="m-b-10">自定义显示内容</h2>
      <progress-bar :percentage="66" bccolor="#FF4466" :linedata="true">
        <template v-slot:content>转化率(日同比 66% )</template>
      </progress-bar>
    </div>
    <!-- 进度条加载动画 -->
    <div class="item">
      <h2 class="m-b-10">进度条加载动画</h2>
      <progress-bar :percentage="50" bccolor="#FF4466" :isAnimate="true"></progress-bar>
    </div>
    <!-- 设置加载动画时间(加上vue-count-to) -->
    <div class="item">
      <h2 class="m-b-10">设置加载动画时间</h2>
      <progress-bar :percentage="50" bccolor="#FF4466" :isAnimate="true" :countFlag="true" :duration="5000"></progress-bar>
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
.item {
  margin: 20px 0;
}
</style>