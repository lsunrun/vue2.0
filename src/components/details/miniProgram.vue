<!--  -->
<template>
  <div class="layout">
    <ul class="tags clearfix">
      <router-link tag="li" to="/Home" class="active">
        网站主页
        <span>></span>
      </router-link>
      <li>编辑推荐</li>
    </ul>
    <div class="content clearfix">
      <!-- 分享 -->
      <div class="shareList">
        <h3>分享</h3>
        <ul>
          <li>
            <img src="@/assets/image/info/WeChatpage.png" alt />
          </li>
        </ul>
      </div>
      <!-- 正文 -->
      <section class="a-section">
        <div class="header clearfix">
          <img src="@/assets/image/info/appt.png" alt />
          <div>
            <dt>站酷网</dt>
            <dd>一个路由匹配到的所有路由记录会暴露为 $route 对象</dd>
            <dd class="i-tag">
              <span v-for="item in labelList">{{item}}</span>
            </dd>
            <dd class="middle">
              <img src="@/assets/image/info/eye.png" alt />
              <span>20129</span>
            </dd>
          </div>
        </div>
        <div class="g-info clearfix">
          <div class="left">
            <h3>公众号信息</h3>
            <p class="moreWord">
              运营商：
              <font>北京站酷网有限公司</font>
            </p>
            <p class="moreWord">
              类别：
              <font>设计参考</font>
            </p>
            <p class="moreWord">
              简介：
              <font>一个路由匹配到的所有路由记录会暴露为</font>
            </p>
          </div>
          <div class="right">
            <img src="@/assets/image/info/QRcodepublic.png" alt />
            <p>ID：ZCOOL</p>
          </div>
        </div>

        <div class="printscreen">
          <h3>小程序截图</h3>
          <div class="imgList">
            <img src="@/assets/image/info/xinfo.png" alt />
            <img src="@/assets/image/info/xinfo.png" alt />
            <img src="@/assets/image/info/xinfo.png" alt />
          </div>
        </div>

        <div class="f-favour">
          <div class="activeFavour">
            <div class="a-wrap">
              <img src="@/assets/image/info/commend.png" alt />
              <p>123165</p>
            </div>
          </div>
          <div class="c-comment">
            <h3>
              参与评论
              <font>(54)</font>
            </h3>
            <div>
              <textarea name id maxlength="500" placeholder="说两句吧..."></textarea>
              <div class="f-wrap clearfix">
                <span>500字</span>
                <button>发表评论</button>
              </div>
            </div>
          </div>

          <div class="hot-comment">
            <h3>热点评论</h3>
            <ul class="user-comment clearfix">
              <li v-for="item,i in comment">
                <img class="user" :src="item.src" alt />
                <div class="right">
                  <p class="moreWord">
                    {{item.name}}
                    <span>{{item.time}}小时前</span>
                  </p>
                  <p class="moreMWord" :title="item.title">{{item.title}}</p>
                  <div class="count middle">
                    <img src="@/assets/image/info/comment_up.png" alt />
                    <span>{{item.upnum}}</span>
                    <img src="@/assets/image/info/comment_downx.png" alt />
                    <span>{{item.downnum}}</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="bar-comment">没有更多评论了</div>
          </div>
        </div>
      </section>
      <!-- 推荐 -->
      <div class="recommend">
        <div class="bottom">
          <h3>其他推荐</h3>
          <ul>
            <li class="b-li clearfix" v-for="item in dataBottom">
              <img :src="item.src" alt />
              <article>
                <dt :title="item.title" class="moreMWord">{{item.title}}</dt>
                <dd>编辑点评：{{item.remark}}</dd>
                <dd class="s-star middle" v-html="item.stars"></dd>
              </article>
            </li>
          </ul>
        </div>
        <div class="top">
          <h3>值得读</h3>
          <ul>
            <li class="t-li clearfix" v-for="item in dataTop">
              <img :src="item.src" alt />
              <article>
                <dt :title="item.title" class="moreMWord">{{item.title}}</dt>
                <dd class="count clearfix">
                  <span>{{item.time}}天前</span>
                  <span>{{item.see}}人阅读</span>
                </dd>
              </article>
            </li>
          </ul>
        </div>
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
      labelList: ["电影", "科幻", "幕后特效"],
      comment: [
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          dowm: false,
          upnum: 123213,
          downnum: 2123
        },
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          dowm: false,
          upnum: 123213,
          downnum: 2123
        },
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          dowm: false,
          upnum: 123213,
          downnum: 2123
        }
      ],
      dataTop: [
        {
          src: require("@/assets/image/info/article1.png"),
          title:
            "通过在 Vue 根实例的 router 配置传入 router 实例，下面这些属性成员会被注入到每个子组件。",
          time: 3,
          see: 213213
        },
        {
          src: require("@/assets/image/info/article1.png"),
          title:
            "通过在 Vue 根实例的 router 配置传入 router 实例，下面这些属性成员会被注入到每个子组件。",
          time: 3,
          see: 213213
        }
      ],
      dataBottom: [
        {
          src: require("@/assets/image/b3.png"),
          title: "美团",
          remark: "这样你便可以将参数转换成另一种类型，将静态值与基",
          see: 3,
          editStar:3,
        },
        {
          src: require("@/assets/image/b2.png"),
          title: "玩吧",
          remark: "这样你便可以将参数转换成另一种类型，将静态值与基",
          see: 4,
          editStar:3.5,
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    orgStar() {
      this.dataBottom.map(function(val) {
        var data = val.editStar;
        let stars = String(data);
        let starsNum = stars.split(".");
        let len = 0;
        let span_star = "",
          span = "",
          halfstar = "";
        if (starsNum.length > 1) {
          len = 4;
          halfstar = '<span class="halfstar"></span>';
        } else {
          len = 5;
        }
        for (let i = 0; i <= len; i++) {
          if (i == starsNum[0]) {
            for (let j = 0; j < len; j++) {
              if (j < starsNum[0]) {
                span_star += '<span class="stars"></span>';
              } else {
                span += "<span></span>";
              }
            }
          }
        }
        let starAll = "<font>编辑指数：</font>" + span_star + halfstar + span;
        val.stars = starAll;
        console.log(val.stars);
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     this.orgStar() 
  },
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
  width: 1240px;
  margin: 0 auto;
  .tags {
    padding: 30px 0 50px 0;
    li {
      float: left;
      margin-right: 5px;
      color: $c6;
      cursor: pointer;
      font-size: 14px;
      line-height: 14px;
      &.active {
        color: $b;
      }
    }
  }
}
.content {
  .shareList {
    float: left;
    text-align: center;
    margin-top: 100px;
    margin-left: -108px;
    h3 {
      font-size: 14px;
      color: $c9;
      &::before {
        content: "";
        display: inline-block;
        height: 1px;
        width: 24px;
        background: $c9;
        vertical-align: middle;
        margin-right: 4px;
      }
      &::after {
        content: "";
        display: inline-block;
        height: 1px;
        width: 24px;
        background: $c9;
        vertical-align: middle;
        margin-left: 4px;
      }
    }
    ul {
      margin-top: 30px;
      li {
        cursor: pointer;
      }
    }
  }
  section.a-section {
    width: 736px;
    float: left;
    overflow: hidden;
    margin-right: 125px;
    .header {
      position: relative;
      & > img {
        float: left;
        height: 134px;
        width: 134px;
      }
      & > div {
        margin-left: 169px;
        height: 100%;
        dt {
          font-size: 18px;
          color: $c3;
          line-height: 18px;
          padding: 5px 0 14px 0;
        }
        .i-tag {
          position: absolute;
          bottom: 0;
          width: 100%;
          span {
            display: inline-block;
            border: 1px solid $f4;
            color: $c6;
            background: $f4;
            padding: 6px 10px;
            border-radius: 3px;
            font-size: 14px;
            margin-right: 10px;
          }
          & + dd {
            position: absolute;
            bottom: 0;
            right: 0;
            img,
            span {
              vertical-align: middle;
            }
            span {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .printscreen {
    border-top: 1px solid #eceff2;
    margin-bottom: 70px;
    h3 {
      font-size: 18px;
      color: #333;
      line-height: 18px;
      margin: 40px 0 30px 0;
    }
    .imgList {
      font-size: 0;
      overflow: hidden;
      height: 410px;
      img {
        margin-right: 22px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .g-info {
    margin: 40px 0;
    border-top: 1px solid #eceff2;
    .left {
      float: left;
      width: 600px;
      overflow: hidden;
      h3 {
        font-size: 18px;
        color: #333;
        line-height: 18px;
        margin: 40px 0 30px 0;
      }
      p {
        margin-bottom: 20px;
        font-size: 14px;
        color: #666;
        &:last-of-type {
          margin-bottom: 0;
        }
        font {
          color: #333;
        }
      }
    }
    .right {
      float: right;
      font-size: 0;
      img {
        width: 106px;
        height: 106px;
        box-sizing: border-box;
        border: 1px solid #eceff2;
        margin: 40px 0 10px 0;
      }
      p {
        font-size: 14px;
        line-height: 14px;
        color: #333;
        text-align: center;
      }
    }
  }

  .f-favour {
    .activeFavour {
      text-align: center;
      .a-wrap {
        width: 71px;
        display: inline-block;
        img {
          cursor: pointer;
        }
        p {
          font-size: 12px;
          line-height: 12px;
          color: #333;
          margin-top: 10px;
        }
      }
    }
    .c-comment {
      box-sizing: border-box;
      font-size: 0;
      h3 {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 16px;
        color: #333;
        margin-top: 70px;
      }
      & > div {
        border: 1px solid #ccc;
        box-sizing: border-box;
        textarea {
          width: 100%;
          height: 102px;
          border: none;
          padding: 10px 12px;
          box-sizing: border-box;
          color: #999;
          font-size: 14px;
          &::placeholder {
            color: #999;
          }
        }
        .f-wrap {
          background: #f4f6f8;
          width: 100%;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          span {
            float: left;
            font-size: 14px;
            color: #999;
            padding-left: 20px;
          }
          button {
            float: right;
            color: #fff;
            background: #2878ff;
            height: 40px;
            width: 108px;
            vertical-align: middle;
          }
        }
      }
    }
    .hot-comment {
      margin-top: 40px;
      margin-bottom: 70px;
      h3 {
        font-size: 16px;
        line-height: 16px;
        color: #333;
        margin-bottom: 20px;
      }
      .user-comment {
        & > li {
          margin-top: 40px;
          &:nth-of-type(1) {
            margin-top: 0;
          }
          .user {
            height: 50px;
            width: 50px;
            float: left;
            margin-left: 10px;
          }
          .right {
            margin-left: 76px;
            padding-top: 18px;
            & > p:nth-of-type(1) {
              font-size: 14px;
              font-weight: 600;
              line-height: 14px;
              color: #333;
              span {
                margin-left: 30px;
                color: #999;
                font-weight: 500;
              }
            }
            & > p:nth-of-type(2) {
              margin: 20px 0;
            }
            .count {
              font-size: 0;
              img {
                vertical-align: middle;
                margin-right: 10px;
                cursor: pointer;
              }
              span {
                font-size: 14px;
                color: #666;
                vertical-align: middle;
                line-height: 14px;
                &:nth-of-type(1) {
                  margin-right: 40px;
                }
              }
            }
          }
        }
      }
      .bar-comment {
        width: 100%;
        height: 50px;
        background: #f0f2f3;
        line-height: 50px;
        text-align: center;
        margin-top: 70px;
        font-size: 14px;
        color: #999;
        cursor: no-drop;
        &.active {
          cursor: pointer;
          color: #333;
        }
      }
    }
  }

  .recommend {
    float: left;
    width: 375px;
    h3 {
      font-size: 24px;
      line-height: 24px;
      color: #333;
      margin-bottom: 30px;
    }

    .top {
      margin-top: 50px;
      ul {
        .t-li {
          margin-bottom: 30px;
          height: 90px;
          cursor: pointer;
          &:last-of-type {
            margin-bottom: 0;
          }
          img {
            float: left;
          }
          article {
            position: relative;
            margin-left: 144px;
            height: 100%;
            dt {
              font-size: 16px;
              color: #333;
              line-height: 22px;
            }
            .count {
              position: absolute;
              bottom: 0;
              width: 100%;
              span {
                font-size: 14px;
                color: #999;
                line-height: 14px;
                float: left;
                &:nth-of-type(2) {
                  float: right;
                }
              }
            }
          }
        }
      }
    }
    .bottom {
      ul {
        padding-bottom: 50px;
        border-bottom: 1px solid #eceff2;
        .b-li {
          margin-bottom: 36px;
          height: 110px;
          cursor: pointer;
          &:last-of-type {
            margin-bottom: 0;
          }
          img {
            float: left;
            width: 110px;
            height: 110px;
            border: 1px solid #f4f6f8;
            box-sizing: border-box;
            border-radius: 10px;
          }
          article {
            margin-left: 140px;
            position: relative;
            height: 100%;
            dt {
              font-size: 18px;
              color: #333;
              line-height: 18px;
            }
            dd:nth-of-type(1) {
              margin: 12px 0 20px 0;
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>