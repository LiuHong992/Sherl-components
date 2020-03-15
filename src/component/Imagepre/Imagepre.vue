<template>
  <div class="imagepres">
    <img class="img" :src="images" alt @click="showBig" />
    <!-- 遮罩层大图 -->
    <div class="pres p-a fl a-c f-center z-10" v-if="big" @click="showBig">
      <img class="pres-image" :src="images" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: false
    };
  },
  props: {
    images: {
      type: String,
      default: ""
    }
  },
  components: {},
  methods: {
    // 显示大图
    showBig() {
      this.big = !this.big;
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.imagepres {
  width: 100%;
  height: 100%;
  img {
    cursor: zoom-in;
  }
  .pres {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .pres-image {
      cursor: zoom-out;
      width: 300px;
      height: 300px;
    }
  }
}
</style>