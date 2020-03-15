<template>
  <div class="image-pre">
    <h2 class="m-b-10">图片预览</h2>
    <h3>父级不设置宽高</h3>
    <!-- 父级不设置宽高 -->
    <div class="pre-img m-t-20 m-b-20">
      <image-pre :images="images"></image-pre>
    </div>
    <!-- 父级设置宽高 -->
    <h3 class="m-t-20 m-b-20">父级设置宽高</h3>
    <div class="pre-image">
      <image-pre :images="images"></image-pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584273478877&di=6bea75d8e9ddf492b684b0093c33f474&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1746457609%2C3284614697%26fm%3D214%26gp%3D0.jpg"
    };
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
.image-pre {
  .pre-img {
    width: 300px;
    height: 300px;
  }
  .pre-image {
    width: 100px;
    height: 100px;
  }
}
</style>