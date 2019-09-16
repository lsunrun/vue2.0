<!--  -->
<template>
  <div class="layout">
    <div id="carousel">
      <div class="carousel-wrap">
        <div class="carousel-box">
          <ul class="carousel-list">
            <li v-for="item in imgArr" :key="item.id">
              <img :src="item.src" alt />
            </li>
          </ul>
        </div>
        <a class="arrows-prev" v-if="option.prevBtn"></a>
        <a class="arrows-next" v-if="option.nextBtn"></a>
        <div class="carousel-circle" v-if="option.circle">
          <span v-for="(item,i) in imgArr" :key="item.id"></span>
        </div>
      </div>
    </div>
    <!-- 值得读 -->
    <article>
      <dl class="d-wrap">
        <dt class="clearfix">
          <div class="headline">{{List[0].headline}}</div>
          <div>
            <dd v-for="(data,j) in List[0].articleList" :key="data.id">{{data.title}}</dd>
          </div>
        </dt>
        <ul class="content clearfix">
          <li class="v-read" v-for="(data,k) in List[0].articleArrImg" :key="data.id">
            <div class="v-read-img">
              <img :src="data.src" alt />
            </div>
            <p class="moreWord">{{data.title}}</p>
          </li>
        </ul>
      </dl>
    </article>
    <!-- 编辑推荐 -->
    <article>
      <dl class="d-wrap">
        <dt class="clearfix">
          <div class="headline">{{List[1].headline}}</div>
          <div>
            <dd v-for="(data,j) in List[1].articleList" :key="data.id">{{data.title}}</dd>
          </div>
        </dt>
        <ul class="content clearfix">
          <li class="v-app" v-for="(data,k) in List[1].articleArrImg" :key="data.id">
            <img :src="data.src" alt />
            <dl>
              <dt class="top clearfix">
                <p>{{data.appName}}</p>
                <img :src="data.icon" alt />
              </dt>
              <dd class="moreWord" :title="data.editTitle">{{data.editTitle}}</dd>
              <dd>{{data.editTitle}}</dd>
              <span class="btn-title" v-for="(item,o) in data.editz" :key="item.id">{{item}}</span>
            </dl>
          </li>
        </ul>
      </dl>
    </article>

    <!-- 合辑 -->
    <article>
      <dl class="d-wrap">
        <dt class="clearfix">
          <div class="headline">{{List[2].headline}}</div>
          <div>
            <dd v-for="(data,j) in List[2].articleList" :key="data.id">{{data.title}}</dd>
          </div>
        </dt>
        <ul class="content clearfix">
          <router-link
            tag="li"
            class="v-appAll"
            v-for="(data,k) in List[2].articleArrImg"
            :key="data.id"
            :style="{background:'url('+data.src+')  no-repeat'}"
            to="/AppCollection"
          >
            <div>
              <h3>{{data.listName}}</h3>
              <p class="moreWord">{{data.explain}}</p>
              <button>{{data.btn}}</button>
            </div>
          </router-link>
        </ul>
      </dl>
    </article>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "@/common/carousel/carousel.js"; //可以选择需要的方法引入
import Headers from "@/components/common/headers.vue";
import Footers from "@/components/common/footers.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "v-Headers": Headers,
    "v-footers": Footers
  },
  data() {
    //这里存放数据
    return {
      List: [
        {
          headline: "值得读",
          articleList: [
            {
              id: 1,
              title: "前沿科技"
            },
            {
              id: 2,
              title: "暖文治愈"
            },
            {
              id: 3,
              title: "时尚穿搭"
            },
            {
              id: 4,
              title: "美食娱乐"
            },
            {
              id: 5,
              title: "查看更多"
            }
          ],
          articleArrImg: [
            {
              id: 1,
              src: require("@/assets/image/z1.png"),
              title: "现代办公室"
            },
            {
              id: 2,
              src: require("@/assets/image/z2.png"),
              title: "手指魔法"
            },
            {
              id: 3,
              src: require("@/assets/image/z3.png"),
              title: "设计与概念"
            },
            {
              id: 4,
              src: require("@/assets/image/z4.png"),
              title: "打破常规"
            },
            {
              id: 5,
              src: require("@/assets/image/z5.png"),
              title: "一嗯之下"
            },
            {
              id: 6,
              src: require("@/assets/image/z6.png"),
              title: "猫星人"
            }
          ]
        },
        {
          headline: "编辑推荐",
          articleList: [
            {
              id: 1,
              title: "查看更多"
            }
          ],
          articleArrImg: [
            {
              id: 1,
              src: require("@/assets/image/b1.png"),
              appName: "站酷网",
              icon: require("@/assets/image/edwc.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            },
            {
              id: 2,
              src: require("@/assets/image/b2.png"),
              appName: "摩拜单车",
              icon: require("@/assets/image/edac.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            },
            {
              id: 3,
              src: require("@/assets/image/b3.png"),
              appName: "美团外卖",
              icon: require("@/assets/image/edwc.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            },
            {
              id: 4,
              src: require("@/assets/image/b4.png"),
              appName: "乘车码",
              icon: require("@/assets/image/edwc.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            },
            {
              id: 5,
              src: require("@/assets/image/b5.png"),
              appName: "玩吧",
              icon: require("@/assets/image/edac.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            },
            {
              id: 6,
              src: require("@/assets/image/b6.png"),
              appName: "每日优鲜",
              icon: require("@/assets/image/edac.png"),
              editTitle: "编辑点评：很火",
              editz: ["分享", "设计程序"]
            }
          ]
        },
        {
          headline: "小程序合辑",
          articleList: [
            {
              id: 1,
              title: "查看更多"
            }
          ],
          articleArrImg: [
            {
              id: 1,
              src: require("@/assets/image/h1.png"),
              listName: "大厂出品",
              explain: "腾讯、阿里、百度出品的小程序",
              btn: "查看合辑"
            },
            {
              id: 2,
              src: require("@/assets/image/h2.png"),
              listName: "游戏人生",
              explain: "腾讯、阿里、百度出品的小程序",
              btn: "查看合辑"
            },
            {
              id: 3,
              src: require("@/assets/image/h3.png"),
              listName: "宅基地",
              explain: "腾讯、阿里、百度出品的小程序",
              btn: "查看合辑"
            },
            {
              id: 4,
              src: require("@/assets/image/h4.png"),
              listName: "实用工具",
              explain: "腾讯、阿里、百度出品的小程序",
              btn: "查看合辑"
            }
          ]
        }
      ],

      imgArr: [
        {
          src: require("@/assets/image/swiper.png"),
          id: 1
        }
      ],
      option: {
        mode: true, // 显示true: 1 张或者 false:3张
        speed: 1200, // 自动滚动速度
        time: 3000, // 自动滚动间隔时间
        auto: false, // 是否自动滚动
        prevBtn: false, // 是否使用 prev 按钮
        nextBtn: false, // 是否使用 next 按钮
        circle: false, //是否显示指示点
        touchStop: false //鼠标移入的时候停止播放
        // margin_right: 15 //图片间的间距
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gocollection(id) {
      console.log(id);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    $("#carousel").lxyCarousel(this.option);
  },
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

@import "@/common/carousel/carousel.scss";
// @import url('.././common/carousel/carousel.scss');
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
#carousel {
  height: 470px;
  width: 100%;
}
.layout {
  article {
    padding-top: 100px;
    .d-wrap {
      width: 1240px;
      margin: 0 auto;
      dt > div > dd {
        float: left;
        padding: 6px 15px;
        background: #f4f6f8;
        font-size: 14px;
        color: #666;
        border-radius: 50px;
        margin-right: 10px;
        cursor: pointer;
        &:last-of-type {
          margin-right: 0;
        }
        &.active {
          background: #2878ff;
          color: #fff;
        }
      }
    }
    .headline {
      color: #333;
      font-size: 30px;
      font-family: "Microsoft YaHei";
      float: left;
      line-height: 30px;
      & + div {
        float: right;
      }
    }

    .content {
      padding-top: 30px;
      & > li.v-read {
        float: left;
        height: 100%;
        font-size: 0;
        margin-right: 20px;
        overflow: hidden;
        &:nth-child(3n) {
          margin-right: 0;
        }
        .v-read-img {
          overflow: hidden;
          img {
            height: 216px;
            width: 400px;
            cursor: pointer;
            overflow: hidden;
          }
          &:hover img {
            transform: scale(1.08);
            -webkit-transform: scale(1.08);
            -moz-transform: scale(1.08);
          }
        }
        p {
          font-size: 14px;
          color: #333;
          line-height: 14px;
          margin: 20px 0 50px 0;
          width: 400px;
        }
      }
      & > li.v-app {
        float: left;
        height: 210px;
        width: 400px;
        padding: 20px 27px 30px 20px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
        background: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 0;
        margin-right: 20px;
        overflow: hidden;
        cursor: pointer;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
        }
        &:nth-child(n + 4) {
          margin-top: 20px;
        }
        & > img {
          height: 92px;
          width: 92px;
          border-radius: 10px;
          border: 1px solid #f4f6f8;
          box-sizing: border-box;
          float: left;
        }
        & > dl {
          margin-left: 117px;
          height: 100%;
          .top {
            position: relative;
            height: 44px;
            & > p {
              font-size: 18px;
              color: #333;
              line-height: 18px;
              float: left;
            }
            & > img {
              float: right;
              height: 34px;
              width: 34px;
            }
          }
          font {
            font-size: 14px;
            color: #999;
          }
          dd {
            font-size: 14px;
            color: $c9;
            margin-bottom: 20px;
          }
          span.btn-title {
            display: inline-block;
            padding: 6px 10px;
            margin-right: 10px;
            font-size: 12px;
            color: #666;
            background: $f4;
            border-radius: 3px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
      & > li.v-appAll {
        float: left;
        width: 295px;
        height: 286px;
        box-sizing: border-box;
        // border: 1px solid #eaeaea;
        margin-right: 20px;
        box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0 0 15px -4px rgba(0, 0, 0, 0.3);
        }
        &:hover button {
          background: $b;
          color: #fff;
          border: 1px solid $b;
        }
        & > div {
          position: absolute;
          top: 154px;
          right: 0;
          left: 0;
          text-align: center;

          h3 {
            font-size: 20px;
            color: #333;
            font-weight: bold;
            line-height: 20px;
          }
          p {
            font-size: 14px;
            color: #666;
            margin: 20px 0;
            line-height: 14px;
          }
          button {
            width: 108px;
            height: 30px;
            background: #fff;
            color: $c9;
            font-size: 14px;
            border: 1px solid $c9;
            border-radius: 50px;
            line-height: 28px;
          }
        }
      }
    }
    &:last-of-type {
      margin-bottom: 150px;
    }
  }
}
</style>