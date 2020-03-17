<template>
  <div>
    <!-- 普通的标签选择器 -->
    <tagView></tagView>
    <!-- 可展开和收起的标签选择器 -->
    <selectView></selectView>
  </div>
</template>

<script>
import tagView from "../component/Tagselector/View";
import selectView from "../component/Selecttags/View";
export default {
  data() {
    return {};
  },
  components: {
    tagView,
    selectView
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>