<template>
  <div id="personal">
    <button id="reback" @click="reback">返回</button>
    <nav id="navbar">
      <ul id="nav-list">
        <li v-for="(item, index) in navs" :key="index">
          <router-link :to="item.topath">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: "Personal",
  data() {
    return {
      navs: [
        {
          name: "About",
          topath: "/personal1",
        },
        {
          name: "Work",
          topath: "/personal2",
        },
        {
          name: "Contact",
          topath: "/personal3",
        },
      ],
    };
  },
  methods: {
    reback() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
/* 返回按钮 */
#reback {
  position: fixed;
  outline: none;
  top: 15px;
  left: 30px;
  width: 50px;
  line-height: 20px;
  z-index: 2;
}
/* 整个页面 */
#personal {
  font-family: "Poppins", sans-serif;
}
/* 导航栏 */
#navbar {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #be3144;
  box-shadow: 0 2px 0 rgb(0 0 0 / 40%);
}
#nav-list {
  display: flex;
  list-style: none;
}
#nav-list li {
  width: 100px;
}
#nav-list li:hover {
  background-color: #45567d;
}
a {
  display: block;
  color: #fff;
  padding: 15px 28px;
}
/* 主体内容 */
main {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50px;
  width: 100%;
}
</style>