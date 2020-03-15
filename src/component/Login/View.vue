<template>
  <div class="container p-20">
    <h2>普通登录组件</h2>
    <logins :ruleForm="ruleForm" :rules="rules" @submit="submit" @errHandle="errHandle"></logins>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    // 登录成功的回调
    submit(e) {
      
    },
    // 登录失败的回调
    errHandle(e) {
      
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