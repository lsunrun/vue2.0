<!--  -->
<template>
  <div class="deserve">
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
.deserve {
  h3 {
    font-size: 24px;
    line-height: 24px;
    color: #333;
    margin-bottom: 30px;
  }
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
</style>