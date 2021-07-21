<template>
  <div id="JSpage">
    <button id="reback" @click="reback()">返回</button>
    <nav id="navbar">
      <header>JS Documentation</header>
      <ul>
        <li
          v-for="(item, ind) in navlist"
          :key="ind"
          @click="choose(item, ind)"
          :id="ind == index ? 'actived' : ''"
        >
          <a
            :href="'#' + item.id"
            @click="choose(item, ind)"
            :id="ind == index ? 'actived' : ''"
            >{{ item.id }}</a
          >
        </li>
      </ul>
    </nav>
    <main id="main-doc">
      <section v-for="(item, index) in navlist" :key="index">
        <header :id="item.id">{{ item.id }}</header>
        <article v-for="(item1, index1) in item.article" :key="index1">
          <p v-for="(item2, index2) in item1.doc" :key="index2">
            {{ item2 }}
          </p>
          <ul>
            <li v-for="(item3, index3) in item1.list" :key="index3">
              {{ item3 }}
            </li>
          </ul>
        </article>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "JSpage",
  data() {
    return {
      index: 0,
      navlist: [
        {
          id: "Introduction",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "What you should already know",
          article: [
            {
              doc: [
                "This guide assumes you have the following basic background:",
              ],
              list: [
                "A general understanding of the Internet and the World Wide Web (WWW).",
                "Good working knowledge of HyperText Markup Language (HTML).",
                "Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.",
              ],
            },
          ],
        },
        {
          id: "JavaScript and Java",
          article: [
            {
              doc: [
                "JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.",
                "In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.",
                "JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.",
              ],
              list: [],
            },
          ],
        },
        {
          id: "Hello world",
          article: [
            {
              doc: [
                'To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:',
                "Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!",
              ],
              list: [],
            },
          ],
        },
        {
          id: "Variables",
          article: [
            {
              doc: [
                "You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.",
                'A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).',
                "You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.",
              ],
              list: [],
            },
          ],
        },
        {
          id: "Declaring variables",
          article: [
            {
              doc: [
                "You can declare a variable in three ways:",
                "This syntax can be used to declare a block scope local variable. See Variable scope below.",
              ],
              list: [],
            },
          ],
        },
        {
          id: "Variable scope",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "Global variables",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "Constants",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "Data types",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "if...else statement",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "while statement",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "Function declarations",
          article: [
            {
              doc: [
                "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
                "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              ],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
        {
          id: "Reference",
          article: [
            {
              doc: [],
              list: [
                "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
                "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    choose(item, ind) {
      this.index = ind;
    },
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
  top: 37px;
  width: 50px;
  line-height: 20px;
  z-index: 2;
}
#JSpage {
  font-family: "Open Sans", Arial, sans-serif;
}
/* 导航栏 */
#navbar {
  position: fixed;
  min-width: 290px;
  height: 100%;
  border-right: 1px solid rgb(196, 196, 192);
}
/* 主题内容 */
#main-doc {
  position: absolute;
  margin-left: 310px;
  padding: 20px;
}
/* 媒体查询 */
@media screen and (max-width: 400px) {
  #navbar {
    position: absolute;
    width: 100%;
    max-height: 300px;
    background-color: #fff;
    z-index: 1;
    border: none;
  }
  #navbar ul {
    width: 80%;
    height: 100%;
    margin: auto;
    border: 5px solid black;
    overflow: scroll;
  }
  #navbar li:first-child {
    margin-top: 0 !important;
  }
  #main-doc {
    position: relative;
    top: 330px;
    margin: 0;
    padding: 40px;
  }
}
/* 链接样式 */
a {
  text-decoration: none;
}
/* 导航栏具体样式 */
#navbar header {
  font-size: 25px;
  font-weight: bolder;
  color: black;
  margin: 10px;
  text-align: center;
}
#navbar ul {
  height: 88%;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
#navbar li {
  border-top: 1px solid black;
  list-style: none;
  height: 45px;
}
#navbar a {
  margin-top: 8px;
}
#navbar li:first-child {
  margin-top: 20px;
}
#navbar li:hover,
#navbar a:hover {
  background-color: blanchedalmond;
  color: rgb(201, 198, 198);
}
#navbar #actived {
  background-color: blanchedalmond;
  color: rgb(201, 198, 198);
}
#navbar a {
  display: block;
  padding: 10px 30px;
  color: #4d4e53;
  text-decoration: none;
  cursor: pointer;
}
/* 主体内容具体样式 */
#main-doc header {
  font-size: 20px;
  font-weight: bolder;
  color: rgb(189, 128, 37);
  padding-top: 5px;
}
article {
  color: #4d4e53;
}
/* 段落 */
#main-doc p {
  margin-top: 10px;
  font-size: 15px;
  padding-left: 10px;
}
/* 列表 */
#main-doc ul {
  margin-top: 30px;
  padding-left: 50px;
}
#main-doc li {
  margin: 15px 0px 0px 20px;
}
</style>