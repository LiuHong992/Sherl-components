<template>
  <div class="container p-20">
    <h2>手机验证码</h2>
    <phone-login :ruleForm="ruleForm" @send="send" @submit="submit" @errHandle="errHandle"></phone-login>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        code: ""
      }
    };
  },
  components: {},
  methods: {
    // 成功回调
    submit() {},
    // 失败回调
    errHandle() {},
    // 验证码发送回调
    send() {
      this.$message("发送成功!");
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 500px;
}
</style>