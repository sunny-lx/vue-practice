<template>
  <div id="about">
    <header>{{ about.headtxt }}</header>
    <p>{{ about.ptxt }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about: { headtxt: "Hey I am Mimic", ptxt: "a web developer" },
    };
  },
};
</script>
<style scoped>
#about {
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: black;
}
header {
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  font-weight: bolder;
}
p {
  color: #be3144;
  font-style: italic;
  font-weight: 200;
  font-size: 30px;
}
</style>