<template>
  <div class="p20-box" style="width:500px;box-sizing:content-box">
    <h2 class="m-b-10">标签选择器(可展开收起)</h2>
    <select-tags :tagArr="tagArr"></select-tags>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagArr: [
        "标签1",
        "标签2",
        "标签3",
        "标签4",
        "标签5",
        "标签6",
        "标签7",
        "标签8",
        "标签9",
        "标签10",
        "标签11",
        "标签12",
        "标签13",
        "标签14",
        "标签15",
        "标签16",
        "标签17",
        "标签18"
      ]
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
</style>