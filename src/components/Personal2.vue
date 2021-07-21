<template>
  <div id="work">
    <h2>These are some of my projects</h2>
    <div id="projects-doc">
      <div id="project-tile" v-for="(item, index) in projects" :key="index">
        <img :src="item.imgpath" alt="project" />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <a href="https://codepen.io/FreeCodeCamp/" target="_blank" class="btn"
      >Show all</a
    >
  </div>
</template>
<script>
export default {
  name: "Personal2",
  data() {
    return {
      projects: [
        {
          imgpath:
            "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
          text: "Tribute Page",
        },
        {
          imgpath:
            "https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png",
          text: "Random Quote Machine",
        },
        {
          imgpath:
            "https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png",
          text: "JavaScript Calculator",
        },
        {
          imgpath:
            "https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg",
          text: "Map Data Across the Globe",
        },
        {
          imgpath:
            "	https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png",
          text: "Wikipedia Viewer",
        },
        {
          imgpath:
            "https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png",
          text: "Tic Tac Toe Game",
        },
      ],
    };
  },
};
</script>
<style scoped>
#work {
  background-color: #45567d;
  padding: 1rem 6.5rem;
}
@media screen and (max-width: 375px) {
  #work {
    width: 375px !important;
    padding: 20px !important;
  }
}
/* 主体内容 */
h2 {
  font-size: 38px;
  margin: 30px auto 0 auto;
  padding-bottom: 10px;
  max-width: 640px;
  border-bottom: 2px solid #fff;
}
/* 网格容器 */
#projects-doc {
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 30px;
  /* display: block; */
  padding: 30px;
}
/* 网格item */
#project-tile {
  background-color: #303841;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
  border-radius: 2px;
}
#project-tile:hover {
  transform: scale(1.01);
  background-color: #be3144;
}
#project-tile img {
  width: 100%;
  object-fit: cover;
  height: calc(100% - 70px);
}
#project-tile p {
  padding: 20px;
  font-size: 18px;
}
/* 按钮 */
.btn {
  display: inline-block;
  border-radius: 2px;
  font-size: 18px;
  background: #303841;
  transition: background 0.3s ease-out;
  margin-bottom: 10px;
  padding: 20px 40px;
}
.btn:hover {
  background-color: #be3144;
}
</style>