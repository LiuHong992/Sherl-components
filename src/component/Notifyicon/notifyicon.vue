<template>
  <div class="icon-number p-r f-s-22">
    <i class="el-icon-bell"></i>
    <!-- 通知数大于0小于100 -->
    <div
      class="numbers p-a f-s-12 wh-text h-20 l-h-20 t-center"
      v-if="noticeNum>0 && noticeNum<100"
    >{{noticeNum}}</div>
    <!-- 通知数大于100小于1000 -->
    <div
      class="numbers p-a f-s-12 wh-text h-20 l-h-20 t-center"
      v-if="noticeNum>=100 && noticeNum<1000"
    >99</div>
    <!-- 通知数大于1000 -->
    <el-tooltip effect="dark" :content="`您有${noticeNum}条消息`" placement="top" v-if="noticeNum>=1000">
      <div class="numbers mores p-a f-s-12 wh-text h-20 l-h-20 t-center">···</div>
    </el-tooltip>
    <!-- 通知菜单(默认宽度为100,正上方弹出菜单) -->
    <el-popover :placement="placement" :width="nwidth" trigger="click" v-if="flag">
      <slot name="content"></slot>
      <!-- 通知数大于0小于100 -->
      <div
        class="numbers p-a f-s-12 wh-text h-20 l-h-20 t-center"
        v-if="noticeNum>0 && noticeNum<100"
        slot="reference"
      >{{noticeNum}}</div>
      <!-- 通知数大于100小于1000 -->
      <div
        class="numbers p-a f-s-12 wh-text h-20 l-h-20 t-center"
        v-if="noticeNum>=100 && noticeNum<1000"
        slot="reference"
      >99</div>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用来接收通知条数的参数
      noticeNum: 0,
      // 控制是否是通知菜单的参数
      flag: false
    };
  },
  props: {
    placement: {
      type: String,
      default: "top"
    },
    nwidth: {
      type: Number,
      default: 170
    }
  },
  components: {},
  methods: {},
  mounted() {
    if (this.$slots.default) {
      this.noticeNum = this.$slots.default[0].text;
    }
    if (this.$slots.content) {
      this.flag = true;
    }
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.icon-number {
  cursor: pointer;
  .numbers {
    top: -6px;
    left: 12px;
    width: 20px;
    border-radius: 50%;
    background: #ed4014;
  }
  .mores {
  }
  .hover-show {
    top: -80px;
    background: #303133;
    margin-bottom: 12px;
    border-radius: 4px;
    .trigle {
    }
  }
}
</style>