<!--  -->
<template>
  <div class="layout">
    <ul class="tags clearfix">
      <router-link tag="li" to="/Home" class="active">
        网站主页
        <span>></span>
      </router-link>
      <li>值得读</li>
    </ul>
    <!-- 正文 -->
    <div class="content clearfix">
      <section class="hot-article clearfix">
        <ul>
          <li class="t-li clearfix" v-for="item in dataTop">
            <img :src="item.src" alt />
            <article>
              <dt :title="item.title" class="moreMWord">{{item.title}}</dt>
              <dd>布局的传统解决方案，基于盒状模型，依赖</dd>
              <dd class="count middle">
                <img src="@/assets/image/info/eye.png" alt />
                <span>20129</span>
                <div class="clearfix">
                  <img src="@/assets/image/info/letter.png" alt />
                  <span>1654</span>
                </div>
              </dd>
            </article>
          </li>
        </ul>
        <div class="bar-comment">没有文章了</div>
      </section>
      <!-- 推荐 -->
      <div class="recommend clearfix">
        <div class="bottom">
          <h3>其他推荐</h3>
          <ul>
            <li class="b-li clearfix" v-for="item in dataBottom">
              <img :src="item.src" alt />
              <article>
                <dt :title="item.title" class="moreMWord">{{item.title}}</dt>
                <dd>编辑点评：{{item.remark}}</dd>
                <dd class="star middle">
                  <font>编辑指数：</font>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </dd>
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
          see: 3
        },
        {
          src: require("@/assets/image/b2.png"),
          title: "玩吧",
          remark: "这样你便可以将参数转换成另一种类型，将静态值与基",
          see: 4
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
  width: 1240px;
  margin: 0 auto;
  overflow: hidden;
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
  padding-bottom: 100px;
}
.hot-article {
  width: 739px;
  float: left;
  overflow: hidden;
  margin-right: 125px;
  h3 {
    font-size: 18px;
    line-height: 18px;
    color: #333;
    margin-bottom: 30px;
    span {
      font-size: 14px;
      color: #666;
      float: right;
      cursor: pointer;
    }
  }
  ul {
    .t-li {
      margin-bottom: 30px;
      height: 140px;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      & > img {
        float: left;
        width: 160px;
        height: 140px;
      }
      article {
        position: relative;
        margin-left: 180px;
        height: 100%;
        dt {
          font-size: 16px;
          color: #333;
          line-height: 22px;
        }
        & > dd:nth-of-type(1) {
          color: $c9;
          line-height: 14px;
          margin-top: 16px;
        }
        .count {
          position: absolute;
          bottom: 0;
          width: 100%;
          font-size: 0;
          img {
            vertical-align: middle;
            margin-right: 10px;
          }
          span {
            font-size: 14px;
            color: #999;
            line-height: 14px;
            vertical-align: middle;
          }
          & > div {
            float: right;
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
          .star {
            position: absolute;
            bottom: 0;
            width: 100%;
            font-size: 0;
            font {
              font-size: 14px;
              color: #999;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
              width: 15px;
              height: 15px;
              background: url("../../assets/image/notstar.png") no-repeat;
              &.full {
                background: url("../../assets/image/stars.png") no-repeat;
              }
              &.half {
                background: url("../../assets/image/halfstar.png") no-repeat;
              }
            }
          }
        }
      }
    }
  }
}
</style>