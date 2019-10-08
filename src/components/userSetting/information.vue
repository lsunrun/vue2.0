<!--  -->
<template>
  <div class="layout">
    <div class="v-layout">
      <div class="c-header">
        <router-link tag="h4" to="/editInfo" class="active">编辑资料</router-link>
        <router-link tag="h4" to="/editAccount">账户安全</router-link>
      </div>
      <div class="c-content">
        <div class="u-headerImg">
          <img :src="headerImg" alt />
          <p>更换头像</p>
          <input
            type="file"
            class="headerImgUp"
            title
            accept="image/jpeg, image/jpg, image/png"
            @change="viewInputImage($event)"
          />
        </div>
        <ul>
          <li>
            <p>用户ID：</p>
            <span>15326598</span>
          </li>
          <li>
            <p>昵称：</p>
            <input type="text" class="nick" maxlength="12" />
          </li>
          <li>
            <p>性别：</p>
            <input type="radio" name="sex" id="man" value="男" />
            <label for="man" class="man middle">男</label>
            <input type="radio" name="sex" id="woman" value="女" />
            <label for="woman" class="woman middle">女</label>
          </li>
          <li>
            <p>生日：</p>
            <el-date-picker
              class="b-birthday"
              v-model="birthday"
              value-format="timestamp"
              @change="changeVal($event)"
              type="date"
              :editable="false"
              :clearable="false"
              placeholder="选择日期"
            ></el-date-picker>
          </li>
          <li>
            <p class="br-person">个人简介：</p>
            <textarea name id maxlength="200" class="t-textarea" placeholder="简单介绍一下你自己~"></textarea>
          </li>
        </ul>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      birthday: new Date(),
      headerImg: require("@/assets/image/eidt_headimg.png")
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 换头像
    viewInputImage(event) {
      console.log(event);
      var file = event.target.files[0];
      var reader = new FileReader();
      if (file) {
        var that = this;
        var fileSize = file.size / (1024 * 1024);
        // 限制文件大小
        if (fileSize > 5) {
          // commPopup.HTML_Page_HintBox(file.name + " 文件大小超过5M");
          console.log(file.name + " 文件大小超过5M");
          return;
        }
        // 限制文件类型
        if (
          !(
            file.type == "image/png" ||
            file.type == "image/jpeg" ||
            file.type == "image/jpg"
          )
        ) {
          // commPopup.HTML_Page_HintBox(file.name + " 不支持的文件类型");
          console.log(file.name + " 不支持的文件类型");

          return;
        }

        reader.readAsDataURL(file); //转化二进制流
        reader.onload = function(e) {
          //图片路径设置为读取的图片
          that.headerImg = e.target.result;
        };
      }
    },

    changeVal(event) {
      let date = new Date();
      if (event > date.getTime()) {
        this.birthday = date;
        this.$message({
          showClose: true,
          message: "时间不能大于今天",
          type: "warning",
          duration: 1500
        });
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
.layout {
  background: #fafbfc;
  padding: 20px 0;
  .v-layout {
    width: 1240px;
    height: 940px;
    margin: 0 auto;
    box-shadow: 0 0 15px -3px #ddd;
    background: #fff;

    .c-header {
      height: 85px;
      line-height: 85px;
      border-bottom: 1px solid #f4f6f8;
      box-sizing: border-box;
      h4 {
        cursor: pointer;
        color: #999;
        font-size: 18px;
        margin-left: 46px;
        display: inline-block;
        &:nth-of-type(2) {
          margin-left: 100px;
        }
        &.active {
          color: #333;
          border-bottom: 1px solid #333;
        }
      }
    }

    .c-content {
      padding: 0 150px;
      .u-headerImg {
        text-align: center;
        padding-top: 30px;
        position: relative;
        img {
          height: 117px;
          width: 117px;
          overflow: hidden;
          border-radius: 100%;
          border: 1px solid #f4f6f8;
          object-fit: cover;
          object-position: center;
        }
        p {
          font-size: 14px;
          line-height: 14px;
          margin: 14px 0 30px 0;
          color: #333;
        }
        .headerImgUp {
          cursor: pointer;
          opacity: 0;
          position: absolute;
          height: 117px;
          width: 117px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      ul {
        li {
          font-size: 0;
          margin-bottom: 46px;
          position: relative;
          input.nick {
            border-radius: 3px;
            width: 194px;
            height: 36px;
            color: #333;
            border: 1px solid #ddd;
            padding: 5px 10px;
            box-sizing: border-box;
            font-size: 14px;
            &::placeholder {
              color: #999;
            }
          }
          .man,
          .woman {
            cursor: pointer;
            font-size: 14px;
            margin-right: 30px;
            &::before {
              content: "";
              background: #fff;
              border: 1px solid #ccc;
              display: inline-block;
              width: 15px;
              height: 15px;
              border-radius: 100%;
              box-sizing: border-box;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
          #man,
          #woman {
            display: none;
            &:checked + .man,
            &:checked + .woman {
              &::before {
                border: 3px solid #2878ff;
              }
            }
          }

          .b-birthday {
            height: 36px;
            & >>> .el-input__inner {
              height: 36px !important;
            }
            & >>> .el-icon-date {
              line-height: 36px !important;
            }
          }
          & > p {
            color: #666;
            text-align: right;
            width: 70px;
            font-size: 14px;
            display: inline-block;
            margin-right: 20px;
          }
          .br-person {
            vertical-align: middle;
          }
          .t-textarea {
            border-radius: 3px;
            width: 556px;
            height: 104px;
            color: #333;
            border: 1px solid #ddd;
            padding: 5px 10px;
            box-sizing: border-box;
            vertical-align: middle;
            &::placeholder {
              color: #999;
            }
          }
          & > span {
            font-size: 14px;
            color: #333;
          }
        }
      }
      button {
        border: 1px solid $b;
        color: #fff;
        background: $b;
        height: 32px;
        padding: 0 30px;
        border-radius: 3px;
        vertical-align: middle;
        font-size: 14px;
        line-height: 30px;
        margin-left: 90px;
        &.active {
          color: $c6;
          border: 1px solid $c6;
          background: #fff;
        }
      }
    }
  }
}
</style>