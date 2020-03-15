<template>
  <div class="item m-r-20">
    <div class="trend fl a-c">
      <slot name="text"></slot>
      <div class="desc fl a-c">
        <i
          class="icon"
          :class="[trendType,reverseColor?'el-icon-caret-bottom':'el-icon-caret-top']"
          v-if="trendType==='top'"
        ></i>
        <i
          class="icon"
          :class="[trendType,reverseColor?'el-icon-caret-top':'el-icon-caret-bottom']"
          v-if="trendType==='bottom'"
        ></i>
        <div class="main-p">{{percentage}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    trendType: {
      type: String,
      default: ""
    },
    percentage: {
      type: String,
      default: "0%"
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
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
  .trend {
    .desc {
      margin-left: 6px;
      .icon {
        width: 16px;
        height: 16px;
        margin-right: 2px;
      }
      .top {
        color: #f5222d;
      }
      .bottom {
        color: #52c41a;
      }
    }
  }
}
</style>