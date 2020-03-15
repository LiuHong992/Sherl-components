<template>
  <div class="logins">
    <!-- 通用登录方式 -->
    <loginView></loginView>
    <!-- 手机验证码登录方式 -->
    <phoneView></phoneView>
  </div>
</template>

<script>
import loginView from "../component/Login/View";
import phoneView from "../component/Phonelogin/View";
export default {
  data() {
    return {};
  },
  components: {
    loginView,
    phoneView
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.logins {
  margin-top: 100px;
}
</style>