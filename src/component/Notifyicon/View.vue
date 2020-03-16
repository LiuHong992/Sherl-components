<template>
  <div class="p20-box">
    <!-- 通知图标 -->
    <h2 class="m-b-10">通知图标</h2>
    <div class="notify-icons fl a-c">
      <!-- 消息为空时 -->
      <div class="no-msgs fl m-r-20 a-c">
        <h4>消息为空</h4>
        <notify-icon></notify-icon>
      </div>
      <!-- 消息小于100时 -->
      <div class="less-100 fl m-r-20 a-c">
        <h4>消息小于100</h4>
        <notify-icon>48</notify-icon>
      </div>
      <!-- 消息大于100小于1000 -->
      <div class="less-1000 fl m-r-20 a-c">
        <h4>消息大于100小于1000</h4>
        <notify-icon>648</notify-icon>
      </div>
      <!-- 消息大于1000 -->
      <div class="more-1000 fl a-c">
        <h4>消息大于1000</h4>
        <notify-icon>6666</notify-icon>
      </div>
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
</style>