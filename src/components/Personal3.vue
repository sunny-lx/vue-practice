<template>
  <div id="contact">
    <main>
      <div id="main1">
        <header>Let's work together...</header>
        <p>How do you take your coffee?</p>
      </div>
      <div id="main2">
        <a
          v-for="(item, index) in sites"
          :key="index"
          :href="item.path"
          id="site-path"
          >{{ item.name }}</a
        >
      </div>
    </main>
    <footer>
      <p>
        **This is just a fake portfolio. All the projects and contact details
        given are not real.
      </p>
      <p>© Created for freeCodeCamp</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Personal3",
  data() {
    return {
      sites: [
        {
          name: "Facebook",
          path: "https://facebook.com/freecodecamp",
        },
        {
          name: "GitHub",
          path: "https://github.com/freecodecamp",
        },
        {
          name: "Twitter",
          path: "https://twitter.com/freecodecamp",
        },
        {
          name: "Send a mail",
          path: "mailto:example@example.com",
        },
        {
          name: "Call me",
          path: "https://cdpn.io/freeCodeCamp/fullpage/tel:555-555-5555",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* 整个页面 */
#contact {
  background-color: #303841;
  color: #fff;
  width: 100%;
  height: calc(100vh - 50px);
}
/* 主体部分 */
main {
  min-width: 375px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#main1,
#main2 {
  padding: 0 20px;
}
#main1 header {
  font-size: 45px;
  font-weight: bolder;
}
#main1 p {
  font-style: italic;
  font-weight: 200;
}
#main2 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 960px;
  width: 100%;
}
#main2 a {
  font-size: 25px;
  text-shadow: 2px 2px 1px #1f1f1f;
  transition: transform 0.3s ease-out;
  padding: 20px;
  color: #fff;
}
#main2 a:hover {
  transform: translateY(8px);
}
/* 底部 */
footer {
  /* position: absolute; */
  /* bottom: 0;
  left: 0;
  right: 0;
  width: 100%; */
  min-width: 375px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 20px;
  border-top: 4px solid #be3144;
}
@media screen and (max-width: 375px) {
  footer {
    display: flex;
    justify-content: center;
  }
}
footer p {
  padding: 20px;
}
</style>