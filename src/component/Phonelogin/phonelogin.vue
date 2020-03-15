<template>
  <div class="containers p-20">
    <el-form :model="ruleForm" ref="ruleForm" label-width="50px" class="demo-ruleForm">
      <el-form-item prop="phone" :rules="rules.phone">
        <el-input
          v-model="ruleForm.phone"
          autocomplete="off"
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile-phone"
          :disabled="phoneFlag"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]">
        <el-row>
          <el-col :span="16">
            <el-input
              v-model="ruleForm.code"
              autocomplete="off"
              placeholder="请输入验证码"
              prefix-icon="el-icon-tickets"
            ></el-input>
          </el-col>
          <el-col :span="6" style="margin-left:10px">
            <el-button
              @click="send"
              :disabled="canFlag"
              :icon="sendFlag?'el-icon-loading':''"
            >{{sendMsg}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    //  手机号自定义验证规则
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
        this.canFlag = true;
      } else {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error("请输入正确格式的手机号"));
          this.canFlag = true;
        } else {
          this.canFlag = false;
          callback();
        }
      }
    };
    return {
      rules: {
        phone: [{ validator: validatePhone, trigger: "change" }]
      },
      // 发送验证码文字
      sendMsg: "发送验证码",
      // 控制发送验证码按钮是否可点击
      canFlag: true,
      // 发送验证码参数
      sendFlag: false,
      //   手机号输入框的输入状态
      phoneFlag: false
    };
  },
  props: {
    ruleForm: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  methods: {
    // 发送验证码
    send() {
      this.$emit("send");
      let time = 20;
      this.canFlag = this.sendFlag = this.phoneFlag = true;
      this.sendMsg = "发送中...";
      let sendTime = setInterval(() => {
        time--;
        if (time >= 0) {
        } else {
          this.sendFlag = this.canFlag = this.phoneFlag = false;
          clearInterval(sendTime);
          this.sendMsg = "重新发送";
        }
      }, 1000);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submit");
          this.$message.success("登录成功!");
        } else {
          this.$emit("errHandle");
          this.$message.error("登录失败!");
          return false;
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>