<template>
  <div class="main-content">
    <h2>具体用法请参考：</h2>
    <div class="doc">文档介绍</div>
    <h2>组件介绍</h2>
    <div class="com-infos" v-for="(item,index) in indexMain" :key="index">
      <h3>{{item.title}}</h3>
      <div class="desc">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 首页文档说明
      indexMain: [
        {
          title: "趋势组件",
          info:
            "趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。"
        },
        {
          title: "通用登录",
          info: "只需要传form对象和验证规则,验证码登录不需要传验证规则"
        },
        {
          title: "图片预览",
          info: "点击图片预览,再点击或者空白区域取消预览"
        },
        {
          title: "通知图标",
          info: "通用通知图标,可点击自定义通知内容"
        },
        {
          title: "标签选择",
          info: "标签可全选和单选, 可展开和收起"
        },
        {
          title: "进度条",
          info: "普通进度条,是否显示内容,自定义内容,动画效果"
        },
        {
          title: "锁屏",
          info:
            "输入密码,既进入锁屏页面,密码不正确,只能访问当前锁屏页面,无权访问其他页面"
        },
        {
          title: "全屏",
          info: "点击全屏,既进入全屏,点击esc或再次点击按钮,退出全屏"
        },
        {
          title: "底部工具栏",
          info: "类似谷歌浏览器下载内容,可定制工具栏内容"
        },
        {
          title: "可拖拽dialog",
          info: "可拖动的dialog,有边界。"
        },
        {
          title: "行内可编辑表格",
          info: "选中的单元格变成输入框。"
        },
        {
          title: "单元格可编辑表格",
          info: "单个单元格可编辑,自动获取焦点,回车可提交。"
        },
        {
          title: "回到顶部组件",
          info: "该组件已经注入在路由中,将作用于每个页面。"
        },
        {
          title: "403组件",
          info: "通用403组件"
        },
        {
          title: "404组件",
          info: "通用404组件"
        },
        {
          title: "500组件",
          info: "通用500组件"
        }
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
.main-content {
  .doc {
    color: #87ceeb;
    font-size: 20px;
    margin: 20px 0;
    cursor: pointer;
  }
  // 介绍模板
  .com-infos {
    h3 {
      margin: 30px 0;
    }
  }
}
</style>