<template>
  <div>
    <div class="content fl a-c fl-w p-r" :class="open?'isOpen':''">
      <div class="item" @click="chooseAll" :class="isAllcheck?'actives':''">全部</div>
      <!-- 循环的标签 -->
      <div
        class="item"
        v-for="(item,index) in tagArr"
        :key="index"
        :class="checkBox.includes(index)?'actives':''"
        @click="chooseOne(index)"
      >{{item}}</div>
      <!-- 展开和收起按钮 -->
      <div class="open-close p-a fl a-c">
        <span @click="changeOpen" v-if="!open">展开</span>
        <i class="el-icon-arrow-down" v-if="!open"></i>
        <span @click="changeOpen" v-if="open">收起</span>
        <i class="el-icon-arrow-up" v-if="open"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选中项数组
      checkBox: [],
      // 展开和收起状态
      open: false
    };
  },
  props: {
    tagArr: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    // 点击全部的事件
    chooseAll() {
      if (!this.isAllcheck) {
        var len = this.tagArr.length;
        this.checkBox = [];
        for (var i = 0; i < len; i++) {
          this.checkBox.push(i);
        }
      } else {
        this.checkBox = [];
      }
    },
    // 单选
    chooseOne(i) {
      let idx = this.checkBox.indexOf(i);
      if (idx > -1) {
        this.checkBox.splice(idx, 1);
      } else {
        this.checkBox.push(i);
      }
    },
    // 展开和收起按钮
    changeOpen() {
      this.open = !this.open;
    }
  },
  mounted() {},
  watch: {},
  computed: {
    // 全选状态判定
    isAllcheck() {
      if (this.checkBox.length === this.tagArr.length) {
        return true;
      } else {
        return false;
      }
    }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
.content {
  max-height: 32px;
  overflow: hidden;
  padding-right: 20px;
  .item {
    margin-right: 10px;
    margin-bottom: 7px;
    padding: 2px 5px;
    cursor: pointer;
  }
  // 动态添加的类名
  .actives {
    background: #2d8cf0;
    color: #fff;
  }
  .open-close {
    cursor: pointer;
    right: 0;
    top: 3px;
    span {
      color: #409eff;
    }
    i {
      margin-top: 2px;
      color: #409eff;
    }
  }
}
.isOpen {
  max-height: 200px !important;
}
</style>