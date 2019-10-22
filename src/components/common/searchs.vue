<!--  -->
<template>
  <div class="layout">
    <div class="top">
      <div class="search-bar">
        <input type="text" name id maxlength="20" v-model="searchVal" placeholder="搜索小程序或公众号" />
        <button @click="toSearchInfo">搜索</button>
      </div>
      <div class="hot-label middle">
        <h3>热门搜索：</h3>
        <ul class="clearfix">
          <li v-for="item,i in labelList" :key="item.id">{{item.label}}</li>
        </ul>
      </div>
    </div>
    <div class="c-count clearfix">
      <p>
        为您搜索到
        <font>149</font>
        个结果
      </p>
      <div>
        <h3 :class="switchIndex||'active'" @click="switchApp(false)">公众号(20)</h3>
        <h3 :class="!switchIndex||'active'" @click="switchApp(true)">小程序(10)</h3>
      </div>
    </div>
    <div class="v-app">
      <template v-if="switchIndex">
        <ul class="u-ul clearfix" v-for="arr,i in List">
          <router-link tag="li" to="Home/MiniProgram" v-for="item,j in arr" :key="item.id">
            <div class="wrap clearfix">
              <img :src="item.src" alt />
              <div class="right">
                <h3>{{item.title}}</h3>
                <p class="moreMWord">{{item.at}}</p>
              </div>
            </div>
            <div class="i-tag">
              <span v-for="tag,i in item.tag">{{tag}}</span>
              <button class="activeInfo">获取</button>
            </div>
          </router-link>
        </ul>
      </template>
      <template v-else-if="!switchIndex">
        <ul class="r-ul clearfix">
          <router-link
            tag="li"
            to="Home/ReadArticle"
            class="v-read"
            v-for="(data,k) in articleArrImg"
            :key="data.id"
          >
            <div class="v-read-img">
              <img :src="data.src" alt />
            </div>
            <p class="moreWord">{{data.title}}</p>
          </router-link>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Headers from "@/components/common/headers.vue";
import Footers from "@/components/common/footers.vue";
import vueEvent from "../model/vueEvent";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "v-Headers": Headers,
    "v-footers": Footers
  },
  data() {
    //这里存放数据
    return {
      switchIndex: false,
      searchVal: null,
      labelList: [
        { id: 1, label: "摩拜单车" },
        { id: 2, label: "爱奇艺" },
        { id: 3, label: "前沿科技" }
      ],
      List: [
        {
          id: 1,
          src: require("@/assets/image/b1.png"),
          title: "站酷网",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 2,
          src: require("@/assets/image/b2.png"),
          title: "摩拜单车",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 3,
          src: require("@/assets/image/b3.png"),
          title: "支付宝",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 4,
          src: require("@/assets/image/b4.png"),
          title: "乘车码",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 5,
          src: require("@/assets/image/b5.png"),
          title: "玩吧",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 6,
          src: require("@/assets/image/b6.png"),
          title: "每日优鲜",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
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
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    switchApp(flag) {
      this.switchIndex = flag;
    },
    toSearchInfo() {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.searchVal = this.$route.params.searchVal;
    var data = [];
    for (let i = 0; i < this.List.length; i++) {
      data.push(this.List.splice(0, 3));
    }
    this.List = data;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    vueEvent.$off("changeval");
    vueEvent.$on("changeval", val => {
      this.searchVal = val;
    });
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
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;

.layout {
  width: 1240px;
  margin: 0 auto;
}

.top {
  padding: 30px 0 60px 0;
  width: 736px;
  margin: 0 auto;
  .search-bar {
    font-size: 0;
    input {
      padding: 4px 20px;
      background: #f4f6f8;
      color: #666;
      border-radius: 3px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 637px;
      height: 46px;
      border: 0;
      box-sizing: border-box;
      vertical-align: middle;
      &::placeholder {
        color: #aaa;
        line-height: 14px;
        letter-spacing: 2px;
      }
    }
    button {
      color: #fff;
      background: #2878ff;
      height: 46px;
      width: 98px;
      border-radius: 3px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      line-height: 46px;
      vertical-align: middle;
    }
  }
  .hot-label {
    margin-top: 20px;
    h3 {
      font-size: 14px;
      line-height: 14px;
      color: $c3;
      display: inline-block;
      vertical-align: middle;
    }
    ul {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      margin-bottom: -10px;
      & > li {
        float: left;
        color: $c6;
        background: $f4;
        padding: 6px 10px;
        border-radius: 3px;
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
}
.c-count {
  position: relative;
  border-bottom: 1px solid #eceff2;
  & > p {
    font-size: 14px;
    color: #333;
    line-height: 14px;
    position: absolute;
    left: 0;
    font {
      color: $b;
    }
  }
  & > div {
    width: 420px;
    margin: 0 auto;
    text-align: center;
    height: 41px;
    & > h3 {
      font-size: 18px;
      line-height: 18px;
      color: $c3;
      display: inline-block;
      height: 100%;
      cursor: pointer;
      &:nth-child(1) {
        margin-right: 75px;
      }
      &.active {
        color: $b;
        border-bottom: 2px solid $b;
      }
    }
  }
}
.v-app {
  padding-bottom: 100px;
  .u-ul {
    padding: 40px 0;
    &:last-of-type {
      border-bottom: 0;
    }
    li {
      margin-right: 115px;
      float: left;
      overflow: hidden;
      width: 336px;
      padding-top: 90px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(-n + 3) {
        padding-top: 60px;
      }
      .wrap {
        & > img {
          height: 74px;
          width: 74px;
          border-radius: 10px;
          border: 1px solid $f4;
          box-sizing: border-box;
          float: left;
        }
        .right {
          margin-left: 90px;
          h3 {
            font-size: 18px;
            color: $c3;
            line-height: 18px;
            margin-bottom: 14px;
          }
          p {
            font-size: 14px;
            color: $c9;
            line-height: 14px;
          }
        }
      }
      .i-tag {
        margin-top: 20px;
        position: relative;
        span {
          display: inline-block;
          border: 1px solid $f4;
          color: $c6;
          background: $f4;
          padding: 4px 10px;
          border-radius: 3px;
          font-size: 12px;
          margin-right: 10px;
          &:last-of-type {
            margin-right: 0;
          }
        }
        .activeInfo {
          position: absolute;
          right: 0;
          border: 1px solid $c6;
          color: $c6;
          background: #fff;
          height: 26px;
          width: 68px;
          border-radius: 50px;
          vertical-align: middle;
          line-height: 24px;
          font-size: 12px;
          margin-right: 10px;
          transition: background-color 1s;
          &:hover {
            border: 1px solid $b;
            color: #fff;
            background-color: $b;
          }
          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
  .r-ul {
    li.v-read {
      float: left;
      height: 100%;
      font-size: 0;
      margin-right: 20px;
      overflow: hidden;
      width: 400px;
      padding-top: 50px;
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
        margin-top: 20px;
      }
    }
  }
}
</style>