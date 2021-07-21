<template>
  <div id="computer">
    <header>计算器</header>
    <main>
      <div id="process">
        <span v-for="(proitem, proindex) in process" :key="proindex">
          {{ proitem }}
        </span>
      </div>
      <div id="result">{{ result }}</div>
      <div id="compute-dos">
        <input
          v-for="(item, index) in nums"
          :key="index"
          type="button"
          :value="item.name"
          @click="choose(item.name)"
        />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "Computer",
  data() {
    return {
      nums: [
        {
          id: 1_1,
          name: "清除",
        },
        {
          id: 1_2,
          name: "%",
        },
        {
          id: 1_3,
          name: "重置",
        },
        {
          id: 1_4,
          name: "/",
        },
        {
          id: 2_1,
          name: "7",
        },
        {
          id: 2_2,
          name: "8",
        },
        {
          id: 2_3,
          name: "9",
        },
        {
          id: 2_4,
          name: "x",
        },
        {
          id: 3_1,
          name: "4",
        },
        {
          id: 3_2,
          name: "5",
        },
        {
          id: 3_3,
          name: "6",
        },
        {
          id: 3_4,
          name: "-",
        },
        {
          id: 4_1,
          name: "1",
        },
        {
          id: 4_2,
          name: "2",
        },
        {
          id: 4_3,
          name: "3",
        },
        {
          id: 4_4,
          name: "+",
        },
        {
          id: 5_1,
          name: "00",
        },
        {
          id: 5_2,
          name: "0",
        },
        {
          id: 5_3,
          name: ".",
        },
        {
          id: 5_4,
          name: "=",
        },
      ],
      process: [],
      dos: [],
      result: "",
    };
  },
  methods: {
    choose(a) {
      console.log(a);
      if (a == "清除") {
        let x = this.process.pop();
        console.log(x);
        console.log(this.process);
      } else if (a == "%") {
        console.log(a);
      } else if (a == "重置") {
        this.process = [];
      } else if (a == "/") {
        this.process.push(a);
        this.dos.push(a);
      } else if (a == "x") {
        this.process.push(a);
        this.dos.push(a);
      } else if (a == "-") {
        this.process.push(a);
        this.dos.push(a);
      } else if (a == "+") {
        this.process.push(a);
        this.dos.push(a);
      } else if (a == "=") {
        this.result = 5;
      } else {
        this.process.push(a);
      }
    },
  },
};
</script>
<style scoped>
#computer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* 头部 */
header {
  font-size: 40px;
  font-weight: bolder;
}
/* 主体 */
main {
  margin-top: 20px;
  background-color: blanchedalmond;
  display: grid;
  grid-template-rows: 40px repeat(6, 60px);
  grid-template-columns: repeat(4, 100px);
}
#process,
#result,
#compute-dos {
  grid-column: 1/5;
}
#process {
  border: 0.1px solid black;
  font-size: 20px;
  line-height: 40px;
}
#process span {
  display: inline-block;
}
#result {
  border-right: 0.1px solid black;
  border-left: 0.1px solid black;
  border-bottom: 0.1px solid black;
  font-size: 35px;
  line-height: 55px;
}
#compute-dos {
  grid-row: 3/8;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  border-left: 1px solid black;
}
/* 数字操作部分 */
input {
  border: none;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bolder;
  font-size: 20px;
}
input:hover {
  background: brown;
}
</style>