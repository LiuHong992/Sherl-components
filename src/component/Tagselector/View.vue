<template>
  <div class="p20-box">
    <h2 class="m-b-10">标签选择器</h2>
    <tag-selector :tagArr="tagArr"></tag-selector>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagArr: ["标签1", "标签2", "标签3", "标签4", "标签5", "标签6"]
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