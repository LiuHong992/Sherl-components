<template>
  <div class="p20-box" v-if="tagArr">
    <div class="content fl a-c">
      <div class="item" @click="chooseAll" :class="isAllcheck?'actives':''">全部</div>
      <!-- 循环的标签 -->
      <div
        class="item"
        v-for="(item,index) in tagArr"
        :key="index"
        :class="checkBox.includes(index)?'actives':''"
        @click="chooseOne(index)"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选中项数组
      checkBox: []
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
  .item {
    margin-right: 10px;
    padding: 2px 5px;
    cursor: pointer;
  }
  // 动态添加的类名
  .actives {
    background: #2d8cf0;
    color: #fff;
  }
}
</style>