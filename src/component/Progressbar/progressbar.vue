<template>
  <div>
    <!-- 自定义的内容区域 -->
    <div class="custom-content m-b-10 fl s-b a-c" v-if="linedata">
      <div class="left-item">{{percentage}}%</div>
      <slot name="content"></slot>
    </div>
    <!-- 主要显示区域 -->
    <div class="w-100 fl a-c">
      <div class="progress-content fl a-c w-100">
        <!-- 百分比占比 -->
        <div
          class="cover-per a-c f-end fl"
          :class="[isAnimate?'animate-class':'']"
          :style="[{height:height+'px'},{width:percentage+'%'},{background:bccolor},{animationDuration:(duration/1000)+'s'}]"
        >
          <!-- 数据内显 -->
          <div class="textInside fl a-c f-center" v-if="textinside">{{percentage}}%</div>
        </div>
      </div>
      <!-- 如果设置了高度则手动添加百分比 -->
      <div
        class="per f-s-12"
        v-if="!textinside && !noData && !linedata && !countFlag"
      >{{percentage}}%</div>
      <div class="per f-s-12 fl" v-if="countFlag">
        <countTo :startVal="startVal" :endVal="percentage" :duration="duration"></countTo>%
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  data() {
    return {
      startVal: 0
    };
  },
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 6
    },
    // 进度显示与否
    noData: {
      type: Boolean,
      default: false
    },
    // 自定义显示内容(有自定义显示内容时进度条也不显示)
    linedata: {
      type: Boolean,
      default: false
    },
    // 背景颜色
    bccolor: {
      type: String,
      default: "#409EFF"
    },
    // 文字内显
    textinside: {
      type: Boolean,
      default: false
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: false
    },
    // 动画时间
    duration: {
      type: Number,
      default: 2000
    },
    // 控制是否用vue-count-to组件
    countFlag: {
      type: Boolean,
      default: false
    }
  },
  components: {
    countTo
  },
  methods: {
    // format(percentage) {
    //   return percentage === 100 ? "满" : `${percentage}%`;
    // }
  },
  mounted() {},
  watch: {},
  computed: {
    // showText() {
    //   if (this.height >= 6) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
.custom-content {
  .left-item {
    font-size: 26px;
  }
}
.progress-content {
  background: #ebeef5;
  border-radius: 100px;
  .cover-per {
    border-radius: 100px;
    .textInside {
      color: #fff;
      margin-right: 5px;
    }
  }
}
.per {
  width: 30px;
  margin-left: 6px;
}
// 动画类
.animate-class {
  animation-name: progress;
}
// 进度条的动画效果
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: percentage + "%";
  }
}
</style>