<template>
  <div id="hello">
    <button id="reback" @click="reback">返回</button>
    <header><span id="title">Dr. Norman Borlaug</span></header>
    <p>The man who saved a billion lives</p>
    <figure id="img-div">
      <img
        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg"
        alt="Dr. Norman Borlaug seen standing in Mexican wheat field with a group of biologists"
        id="image"
      />
      <figcaption id="img-caption">
        Dr. Norman Borlaug, third from the left, trains biologists in Mexico on
        how to increase wheat yields - part of his life-long war on hunger.
      </figcaption>
    </figure>
    <article>
      <h3>Here's a time line of Dr. Borlaug's life:</h3>
      <ul>
        <li id="tribute-info" v-for="(item, index) in tributelist" :key="index">
          <span>{{ item.tiem }}</span> - {{ item.info }}
        </li>
      </ul>
      <blockquote
        cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm"
      >
        <p>
          "Borlaug's life and achievement are testimony to the far-reaching
          contribution that one man's towering intellect, persistence and
          scientific vision can make to human peace and progress."
        </p>
        <cite id="name">-- Indian Prime Minister Manmohan Singh</cite>
      </blockquote>
    </article>
    <footer>
      <p>
        If you have time, you should read more about this incredible human being
        on his
        <a href="https://en.wikipedia.org/wiki/Norman_Borlaug"
          >Wikipedia entry</a
        >.
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Hello",
  data() {
    return {
      tributelist: [
        { tiem: 1914, info: "Born in Cresco, Iowa" },
        {
          tiem: 1933,
          info: 'Leaves his family\'s farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"',
        },
        {
          tiem: 1935,
          info: 'Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me."',
        },
        {
          tiem: 1937,
          info: "Finishes university and takes a job in the US Forestry Service",
        },
        {
          tiem: 1938,
          info: "Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.",
        },
        {
          tiem: 1941,
          info: "Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science.",
        },
        {
          tiem: 1942,
          info: "Receives a Ph.D. in Genetics and Plant Pathology",
        },
        {
          tiem: 1944,
          info: "Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.",
        },
        {
          tiem: 1945,
          info: "Discovers a way to grown wheat twice each season, doubling wheat yields",
        },
        {
          tiem: 1953,
          info: "crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat.",
        },
        {
          tiem: 1962,
          info: "Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population",
        },
        { tiem: 1970, info: "receives the Nobel Peace Prize" },
        {
          tiem: 1983,
          info: "helps seven African countries dramatically increase their maize and sorghum yields",
        },
        {
          tiem: 1984,
          info: "becomes a distinguished professor at Texas A&M University",
        },
        {
          tiem: 2005,
          info: 'states "we will have to double the world food supply by 2050." Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because "we\'ve been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds."',
        },
        { tiem: 2009, info: "dies at the age of 95." },
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
}
/* 整个页面 */
#hello {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Helvetica Neue", Arial, sans-serif;
  background-color: rgb(235, 232, 232);
  text-align: center;
}
/* 头部 */
header {
  display: inline-block;
  margin: 16px 0;
}
#title {
  font-size: 32px;
  font-weight: 800;
}
p {
  font-weight: 350;
}
/* 图片框 */
#img-div {
  padding: 32px;
  background-color: #fff;
  margin: 16px;
}
#image {
  max-width: 100%;
}
#img-caption {
  margin: 15px 0 5px 0;
}
/* 详细生平 */
article ul {
  max-width: 550px;
  margin: 0 auto 50px auto;
  text-align: left;
  line-height: 1.6;
}
@media (max-width: 460px) {
  article ul {
    width: 300px;
  }
}
article ul li {
  margin: 16px 0;
}
article ul li span {
  font-weight: bolder;
}
#tribute-info {
  text-align: start;
}
/* 引用框 */
blockquote {
  font-style: italic;
  max-width: 545px;
  margin: 0 auto 50px auto;
  text-align: left;
}
@media (max-width: 460px) {
  blockquote {
    width: 300px;
  }
}
#name {
  display: inline-block;
  padding-top: 16px;
}
/* 底部 */
footer {
  padding-bottom: 16px;
}
footer p {
  font-weight: bolder;
}
</style>