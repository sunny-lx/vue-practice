<template>
  <div id="surveyform">
    <button id="reback" @click="reback">返回</button>
    <header>
      <span id="title">freeCodeCamp Survey Form</span>
      <span>Thank you for taking the time to help us improve the platform</span>
    </header>
    <main>
      <form action="">
        <div id="form-group">
          <label id="name-label" for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div id="form-group">
          <label id="Email-label" for="Email">Email</label>
          <input
            type="text"
            id="Email"
            class="form-control"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div id="form-group">
          <label id="number-label" for="number"
            >Age(optional)</label
          >
          <input
            type="number"
            name="age"
            id="number"
            min="10"
            max="99"
            class="form-control"
            placeholder="Age"
          />
        </div>
        <div id="form-group">
          <p>Which option best describes your current role?</p>
          <select class="form-control">
            <option>Select current role</option>
            <option>Student</option>
            <option>Full Time Job</option>
            <option>Full Time Learner</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>
        </div>
        <div id="form-group">
          <p>Would you recommend freeCodeCamp to a friend?</p>
          <label>
            <input
              type="radio"
              name="recommend"
              value="Definitely"
              required
            />Definitely
          </label>
          <label>
            <input 
            type="radio" 
            name="recommend" 
            value="Maybe" 
            required />Maybe
          </label>
          <label>
            <input 
            type="radio" 
            name="recommend" 
            value="Not sure" 
            required />Not sure
          </label>
        </div>
        <div id="form-group">
          <p>What is your favorite feature of freeCodeCamp?</p>
          <select class="form-control">
            <option>Select an option</option>
            <option>Challenges</option>
            <option>Projects</option>
            <option>Community</option>
            <option>Open Source</option>
          </select>
        </div>
        <div id="form-group">
          <p>What would you like to see improved? (Check all that apply)</p>
          <label>
            <input type="checkbox" name="prefer" value="Front-end Projects" />Front-end Projects
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Back-end Projects" />Back-end Projects
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Data Visualization" />Data Visualization
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Challenges" />Challenges
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Open Source Community" />Open Source Community
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Gitter help rooms" />Gitter help rooms
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Videos" />Videos
          </label>
          <label>
            <input type="checkbox" name="prefer" value="City Meetups" />City Meetups
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Wiki" />Wiki
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Forum" />Forum
          </label>
          <label>
            <input type="checkbox" name="prefer" value="Additional Courses" />Additional Courses
          </label>
        </div>
        <div id="form-group">
          <p>Any comments or suggestions?</p>
          <textarea id="comments" class="input-textarea" name="comment" placeholder="Enter your comment here..."></textarea>
        </div>
        <div id="form-group">
          <input type="submit" id="submit" value="Submit">
        </div>
      </form>
    </main>
  </div>
</template>
<script>
export default {
  name: "Surveyform",
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
#surveyform::before {
  content: "";
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      115deg,
      rgba(58, 58, 158, 0.8),
      rgba(136, 136, 206, 0.7)
    ),
    url(https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg);
}
#surveyform{
  /* text-align: center; */
  color: #f3f3f3;
  font-family: 'Poppins', sans-serif;
}
/* 标题 */
header{
  text-align: center;
}
#title {
  display: block;
  font-size: 32px;
  font-weight: bolder;
  padding: 16px;
}
span {
  display: block;
  padding-bottom: 16px;
}
/* 表单主体 */
main {
  height: 100%;
}
@media(max-width:375px){
  main{
    width: 375px;
  }
  header{
    width: 375px;
  }
}
/* 表单框 */
form {
  max-width: 640px;
  margin: auto;
  padding: 40px;
  border-radius: 8px;
  background-color: rgba(27, 27, 50, 0.8);
  height: 100%;
  text-align: start;
}
/* 表单组 */
#form-group {
  margin: 0 auto 20px auto;
  padding: 4px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
}
#form-group p {
  margin-bottom: 8px;
}
.form-control,textarea {
  height: 38px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 5px;
  outline: none;
  border: none;
}
label {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 8px;
}
input[type="radio"], input[type="checkbox"]{
  display: inline-block;
  margin-right: 10px;
  width: 25px;
  height: 20px;
}
#comments{
  padding: 10px;
  min-height: 120px;
}
/* 提交按钮 */
#submit{
  height: 40px;
  border: none;
  background-color: #37af65;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
}
</style>