<template>
  <div>
    <router-view />
    <backView></backView>
  </div>
</template>

<script>
import backView from "./component/Backtop/View";
export default {
  components: {
    backView
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
