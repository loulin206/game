<!--答题游戏页面-->
<template>
  <div v-if="showPage" class="qs">

    <div style="position: absolute; left:10%; top:17%">问题{{count1+1}}</div>
    <div style="position: absolute; left:65%; top:17%">问题{{count2+1}}</div>
    <!--1号选手答题界面-->

    <div style="position: absolute; left:12.7%; top:7%; ">1号选手</div>
    <!--血条-->
    <div style="position: absolute; left:12.7%; top:10%; width:400px;height:10px;background:#EDEDED;">
      <div id="pro1" style="background:red;width:400px;height:10px;"></div>
    </div>

    <!--血量-->
    <div style="position: absolute; left:10%; top:9.5%;">HP{{HP1}}</div>

    <!--蓝条-->
    <div style="position: absolute; left:12.7%; top:11.5%; width:400px;height:10px;background:#EDEDED;">
      <div id="mro1" style="background:blue;width:400px;height:10px;"></div>
    </div>

    <!--蓝量-->
    <div style="position: absolute; left:10%; top:11%;">MP{{MP1}}</div>

    <!--耗蓝加时-->
    <!--<el-button style="position: absolute; left:10%; top:65%" type="primary" :disabled="canAdd1">耗蓝加时</el-button>-->

    <!--题目-->
    <div style="position: absolute; left:10%; top:26%; word-break: break-all; width: 600px; text-align: justify;"
         v-if="question_list1[count1].question!=null" class="que">{{question_list1[count1].question}}
    </div>

    <!--题目类型-->
    <!-- <div style="position: absolute; left:10%; top:32.5%" v-if="question_list1[count1].type!=null" class="typ">
       类型：{{question_list1[count1].type===1 ? '单选题':'多选题'}}
     </div>-->

    <!--选项-->
    <div style="text-align:center;" v-if="question_list1[count1].type===1" class="answer">
      <el-radio-group style="position: absolute; left:10%; top:35%" v-model="checked1[count1]">
        <div style="text-align:left; font-size:20px; " v-for="(item,index) in question_list1[count1].answer"
             :key="index">
          <!--
                    <input type = "el-radio" :value = "item.value" @keypress="input1(keyCode)">{{item.value}}
          -->
          <el-radio :border="true" size="medium" :label="item.value">{{item.value}}</el-radio>

          <br><br>
        </div>
      </el-radio-group>
    </div>

    <!--2号选手答题界面-->
    <div style="position: absolute; left:67.7%; top:7%; ">2号选手</div>
    <!--血条-->
    <div style="position: absolute; left:67.7%; top:10%; width:400px;height:10px;background:#EDEDED;">
      <div id="pro2" style="background:red;width:400px;height:10px;"></div>
    </div>

    <!--血量-->
    <div style="position: absolute; left:65%; top:9.5%;">HP{{HP2}}</div>

    <!--蓝条-->
    <div style="position: absolute; left:67.7%; top:11.5%; width:400px;height:10px;background:#EDEDED;">
      <div id="mro2" style="background:blue;width:400px;height:10px;"></div>
    </div>

    <!--蓝量-->
    <div style="position: absolute; left:65%; top:11%;">MP{{MP2}}</div>

    <!--耗蓝加时-->
    <el-button style="position: absolute; left:65%; top:65%" type="primary" @click="changeMP2" :disabled="canAdd2">
      点击续一秒？
    </el-button>

    <!--题目-->
    <div style="position: absolute; left:65%; top:26%; word-break: break-all; width: 600px; text-align: justify;"
         v-if="question_list2[count2].question!=null" class="que">{{question_list2[count2].question}}
    </div>

    <!--题目类型-->
    <!--<div style="position: absolute; left:65%; top:32.5%" v-if="question_list[count2].type!=null" class="typ">
      类型：{{question_list2[count2].type===1 ? '单选题':'多选题'}}
    </div>-->

    <!--选项-->
    <div style="text-align:center;" class="answer">
      <el-radio-group style="position: absolute; left:65%; top:35%" v-model="checked2[count2]">
        <div style="text-align:left; font-size:20px; " v-for="(item,index) in question_list2[count2].answer"
             :key="index">
          <el-radio :border="true" size="medium" :label="item.value" @change="input2" :disabled="canChange">
            {{item.value}}
          </el-radio>
          <br><br>
        </div>
      </el-radio-group>
    </div>

    <!--<div>
      <el-button style="position: absolute; left:35%; top:61.5%" type="primary" icon="el-icon-arrow-left"
                 @click="count1&#45;&#45;" :disabled="count1<1">上一题
      </el-button>
      <el-button style="position: absolute; left:41%; top:61.5%" type="primary"
                 :disabled="count1 >= question_list2.length - 1" @click="count1++">下一题<i
        class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>
    </div>
    <div style="text-align:left;">
      <el-button style="position: absolute; left:35%; top:68%" type="primary" icon="el-icon-upload"
                 @click="dialogVisible = true">提交
      </el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>确定提交吗？</span>
        <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="submit">确 定</el-button>
              </span>
      </el-dialog>
    </div>
    <br>-->
    <!--1号选手倒计时-->
    <div style="position: absolute; left:13%; top:23%;" v-model="time1">倒计时：{{time1}} 秒</div>

    <!--2号选手倒计时-->
    <div style="position: absolute; left:67%; top:23%;" v-model="time2">倒计时：{{time2}} 秒</div>

    <!--返回首页-->
    <el-button style="position: absolute; bottom:10%; left:40%;" type="primary" @click="goBack">返回游戏首页</el-button>
  </div>
</template>

<script>

  export default {
    name: 'game',
    data() {
      return {
        dialogVisible: false,  //提示框是否显示
        showPage: false,       //保证从后台获取到题目数据后再渲染视图
        score1: 0, //1号选手得分
        score2: 0, //2号选手得分
        count1: 0,  //1号选手题号
        count2: 0,  //2号选手题号
        checked1: [],  //双向绑定1号选手填写的答案（字符串数组形式）
        check1: [],   //存储1号选手填写的答案（对象数组形式{value:''}），用于计算最后得分
        checked2: [],  //双向绑定2号选手填写的答案（字符串数组形式）
        check2: [],   //存储2号选手填写的答案（对象数组形式{value:''}），用于计算最后得分
        question_list1: [],  //1号选手题目列表
        question_list2: [], //2号选手题目列表
        time1: 10,  //1号选手倒计时时间
        time2: 10,   //2号选手倒计时时间
        timer1: '',  //1号选手计时器
        timer2: '',  //2号选手计时器
        HP1: 100,   //1号选手HP
        HP2: 100,   //2号选手HP
        MP1: 100,   //1号选手MP
        MP2: 100,   //2号选手MP
        canListen: true,
        canListen2: true,
        canChange: false,
        canAdd1: false,
        canAdd2: false
      }
    },
    methods: {

      getQuestions: function () {

        //获取题目数据
        this.$axios.get('http://localhost:3000/questions')
          .then((res) => {
              //获取题目数据中的随机10个不重复的题目
              let seq = this.randNum2(0, 99, 10);
              for (let i in seq) {
                let num = seq[i];

                //创建一个题目对象
                let myQuestion = {
                  'id': 0,
                  'type': 0,
                  'score': 0,
                  'question': '',
                  'answer': [],
                  'true_answer': []
                };
                myQuestion.id = res.data[num].id;
                myQuestion.type = res.data[num].type;
                myQuestion.score = res.data[num].score;
                myQuestion.question = res.data[num].question;
                let ans = res.data[num].answer.split(",");
                for (let j in ans) {
                  let obj = {
                    'value': ''
                  };
                  obj.value = ans[j];
                  myQuestion.answer.push(obj);
                }
                let true_ans = res.data[num].true_answer.split(",");
                for (let k in true_ans) {
                  let obj2 = {
                    'value': ''
                  };
                  obj2.value = true_ans[k];
                  myQuestion.true_answer.push(obj2);
                }
                this.question_list1[i] = myQuestion;
              }
              //获取题目数据中的随机10个不重复的题目
              let seq2 = this.randNum2(0, 99, 10);
              for (let i in seq2) {
                let num = seq2[i];

                //创建一个题目对象
                let myQuestion = {
                  'id': 0,
                  'type': 0,
                  'score': 0,
                  'question': '',
                  'answer': [],
                  'true_answer': []
                };
                myQuestion.id = res.data[num].id;
                myQuestion.type = res.data[num].type;
                myQuestion.score = res.data[num].score;
                myQuestion.question = res.data[num].question;
                let ans = res.data[num].answer.split(",");
                for (let j in ans) {
                  let obj = {
                    'value': ''
                  };
                  obj.value = ans[j];
                  myQuestion.answer.push(obj);
                }
                let true_ans = res.data[num].true_answer.split(",");
                for (let k in true_ans) {
                  let obj2 = {
                    'value': ''
                  };
                  obj2.value = true_ans[k];
                  myQuestion.true_answer.push(obj2);
                }
                this.question_list2[i] = myQuestion;
              }
              ;
              //获取题目后再渲染视图
              this.showPage = true;
            }
          )
      },
      //将绑定的1号选手的答案存入对象数组中
      input1: function (num) {
        let index = num - 49;
        this.$set(this.checked1, this.count1, this.question_list1[this.count1].answer[index].value);
        let choice = [];
        let chs = {
          value: '',
        };
        chs.value = this.checked1[this.count1];
        choice.push(chs);
        this.check1[this.count1] = choice;
      },
      //将绑定的1号选手的答案存入对象数组中
      input2: function () {
        let choice = [];
        let chs = {
          value: '',
        };
        chs.value = this.checked2[this.count2];
        choice.push(chs);
        this.check2[this.count2] = choice;
      },

      //关闭提示框时的提示
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },


      submit: function () {

        //计算得分，关闭提示框
        this.dialogVisible = false;

        //计算1号选手的得分
        for (let i in  this.check1) {

          if (this.check1[i][0].value === this.question_list1[i].true_answer[0].value) {
            this.score1 += this.question_list1[i].score;
          }
        }
        //计算2号选手的得分
        for (let i in  this.check2) {

          if (this.check2[i][0].value === this.question_list2[i].true_answer[0].value) {
            this.score2 += this.question_list2[i].score;
          }
        }
        /*//显示得分
        alert("提交成功！您的得分为：" + this.score1);*/

        //跳转到游戏结束页面
        this.$router.push({name: 'end', params: {score1: this.score1, score2: this.score2}});

        //重置得分
        this.score1 = 0;
        this.score2 = 0;
      },

      //产生随机数
      randNum2(min, max, num) {
        if (num > max - min) {
          console.error('范围太小');
          return false;
        }

        let range = max - min,
          minV = min + 1, //实际上可以取的最小值
          arr = [],
          tmp = "";

        function GenerateANum(i) {
          for (i; i < num; i++) {
            let rand = Math.random(); //  rand >=0  && rand < 1
            tmp = Math.floor(rand * range + minV);
            if (arr.indexOf(tmp) == -1) {
              arr.push(tmp)
            } else {
              GenerateANum(i);
              break;
            }
          }
        }

        GenerateANum(0); //默认从0开始
        return arr;
      },

      //产生1号选手定时器
      setTimer1: function () {
        this.timer1 = setInterval(() => {
          this.time1--;
          if (this.time1 < 1) {
            clearInterval(this.timer1);
            if (this.count1 === this.question_list1.length - 1) {
              if (this.count2 === this.question_list2.length - 1) {
                this.submit();
              }
              this.canListen = false;
              this.canListen2 = false;
              clearInterval(this.timer1);
              this.changeHP1(this.count1);
            }
            else if (this.count1 < this.question_list1.length - 1) {
              this.count1++;
              this.changeHP1(this.count1 - 1);
              this.time1 = 10;
              this.setTimer1();
            }
          }
        }, 1000)
      },
      //产生2号选手定时器
      setTimer2: function () {
        this.timer2 = setInterval(() => {
          this.time2--;
          if (this.time2 < 1) {
            clearInterval(this.timer2);
            if(this.count2 === this.question_list2.length - 1){
              if(this.count1 === this.question_list1.length - 1){
                this.submit();
              }
              this.canChange = true;
              this.canAdd2 = true;
              clearInterval(this.timer2);
              this.changeHP2(this.count2);
            }
            else{
              this.count2++;
              this.changeHP2(this.count2 - 1);
              this.time2 = 10;
              this.setTimer2();
            }
          }
        }, 1000)
      },

      //改变1号选手的血条
      changeHP1: function (index) {
        let opro = document.getElementById('pro1');
        if (this.checked1[index] != this.question_list1[index].true_answer[0].value) {
          this.HP1 -= 10;
          let wid = 4 * this.HP1;
          opro.style.width = wid + 'px';
        }
      },

      //改变2号选手的血条
      changeHP2: function (index) {
        let opro = document.getElementById('pro2');
        if (this.checked2[index] != this.question_list2[index].true_answer[0].value) {
          this.HP2 -= 10;
          let wid = 4 * this.HP2;
          opro.style.width = wid + 'px';
        }
      },

      //返回首页
      goBack: function () {
        this.$router.push({name: 'start'});
      },

      //改变1号选手的蓝条
      changeMP1: function () {
        this.MP1 -= 10;
        if (this.MP1 == 0) {
          this.canListen2 = false;
        }
        let opro = document.getElementById('mro1');
        this.time1 += 2;
        let wid = 4 * this.MP1;
        opro.style.width = wid + 'px';
      },

      //改变2号选手的蓝条
      changeMP2: function () {
        this.MP2 -= 10;
        if (this.MP2 == 0) {
          this.canAdd2 = true;
        }
        let opro = document.getElementById('mro2');
        this.time2 += 2;
        let wid = 4 * this.MP2;
        opro.style.width = wid + 'px';
      }
    },

    //在渲染视图前，先获取题目数据
    created: function () {
      this.getQuestions();
      let _self = this;
      document.onkeydown = function (event) {
        let key = event.keyCode;
        if (key > 48 && key < 53) {
          if (_self.canListen === true) {
            _self.input1(key);
          }
        }
        else if (key == 53 && _self.canListen2) {
          _self.changeMP1();
        }

      }
    },
    mounted: function () {
      this.setTimer1();
      this.setTimer2();
    },
    beforeDestroy: function () {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
