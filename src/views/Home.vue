<template>
  <div class="sherl-content">
    <!-- 导航菜单 -->
    <div class="nav-menus">
      <el-menu
        style="height:100%"
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="rgb(191, 203, 217)"
        active-text-color="#409EFF"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.routeUrls">
          <i :class="item.iconUrl"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右边显示的对应内容 -->
    <div class="item-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 导航菜单数组
      navList: [
        {
          title: "首页",
          iconUrl: "el-icon-s-home",
          routeUrls: "/"
        },
        {
          title: "趋势",
          iconUrl: "el-icon-s-data",
          routeUrls: "/trend"
        },
        {
          title: "通用登录",
          iconUrl: "el-icon-user",
          routeUrls: "/login"
        },
        {
          title: "图片预览",
          iconUrl: "el-icon-picture",
          routeUrls: "/imagepre"
        },
        {
          title: "通知图标",
          iconUrl: "el-icon-bell",
          routeUrls: "/notifyicon"
        },
        {
          title: "标签选择器",
          iconUrl: "el-icon-price-tag",
          routeUrls: "/tagselector"
        },
        {
          title: "进度条",
          iconUrl: "el-icon-open",
          routeUrls: "/progressbar"
        },
        {
          title: "锁屏",
          iconUrl: "el-icon-lock",
          routeUrls: "/lock"
        },
        {
          title: "全屏",
          iconUrl: "el-icon-menu",
          routeUrls: "/fullscreen"
        },
        {
          title: "底部工具栏",
          iconUrl: "el-icon-position",
          routeUrls: "/bottombar"
        },
        {
          title: "拖拽dialog",
          iconUrl: "el-icon-s-grid",
          routeUrls: "/dragdialog"
        },
        {
          title: "行内可编辑表格",
          iconUrl: "el-icon-tickets",
          routeUrls: "/lineedit"
        },
        {
          title: "单元格可编辑表格",
          iconUrl: "el-icon-edit-outline",
          routeUrls: "/celledit"
        },
        {
          title: "回到顶部",
          iconUrl: "el-icon-caret-top",
          routeUrls: "/backtop"
        },
        {
          title: "403",
          iconUrl: "el-icon-question",
          routeUrls: "/403"
        },
        {
          title: "404",
          iconUrl: "el-icon-close",
          routeUrls: "/404"
        },
        {
          title: "500",
          iconUrl: "el-icon-warning-outline",
          routeUrls: "/500"
        }
      ]
    };
  },
  props: {},
  components: {},
  methods: {
    handleSelect(key, keyPath) {}
  },
  mounted() {},
  watch: {},
  computed: {
    activeIndex() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang='scss'>
.sherl-content {
  display: flex;
  .nav-menus {
    width: 200px;
  }
  .item-content {
    flex: 1;
    padding: 20px;
  }
}
</style>