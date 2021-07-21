<template>
  <div id="home">
    <ul>
      <li><router-link to="/hello">致敬页面</router-link></li>
      <li><router-link to="/surveyform">调查表</router-link></li>
      <li><router-link to="/JSpage">JS页面</router-link></li>
      <li><router-link to="/personal1">菜单栏单独页面</router-link></li>
      <li><router-link to="/computer">计算器</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
#home {
  width: 70%;
  margin: 32px auto;
  font-size: 20px;
}
a:hover {
  color: rgb(11, 146, 101);
}
</style>