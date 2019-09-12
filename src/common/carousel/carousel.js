
; (function ($, win, doc, undefined) {

    $.lxyCarousel = function (that, config, callback) {
        var data = config.data || [];
        var elem = {};
        var Fun = {};
        var timer = null; //定时器
        var scrollLeft = 0; //水平移动的值
        var lockState = true; // 点击多次也要等一次完成才可以，开关
        //把传进来的参数和默认参数合并，config 会覆盖前面相同的key-value
        var settings = $.extend({}, $.lxyCarousel.defaults, config);
        var startX, startY, imgWidth;

        Fun.init = function () {
            elem.wrap = that.find('.carousel-wrap');  //用来添加圆点指示器和箭头
            elem.box = that.find('.carousel-box');
            elem.list = that.find('.carousel-list');  //用来设置宽度
            elem.itemLength = that.find('.carousel-list>li').length;; //用来获取 图片的总数和宽度 来计算偏移量

            // elem.itemLength = data.length;

            // 没有元素或只有1个元素时，不进行滚动
            if (elem.itemLength <= 1) {
                that.find('.carousel-list>li').width(elem.box.width());
                win.addEventListener('resize', function () {
                    that.find('.carousel-list>li').width(elem.box.width());
                })
                return
            };

            //要达到无限循环滚动不出现违和感需要在其后面加上

            elem.list.append(elem.list.html());

            elem.totalLi = that.find('.carousel-list>li');
            if (settings.mode) {
                elem.totalLi.width(elem.box.width());
            } else {
                elem.totalLi.width(elem.box.width() / 3);
            }
            elem.totalLi.css({ "margin-right": settings.margin_right });
            elem.itemWidth = elem.totalLi.outerWidth(true);
            elem.itemHeight = elem.totalLi.outerHeight(true);
            elem.max = elem.itemWidth * elem.itemLength //max 总图片的宽，即总偏移量 
            elem.min = 0;   //最小偏移量，即scrollLeft = 0的时候
            elem.index = 0;//当前下标
            elem.list.width(elem.max * 3);//ul的宽度
            imgWidth = 15;//移动端手指向左向右滑动超过15 才会下一张图片


            // 是否展示箭头
            if (settings.prevBtn) {
                // elem.prevBtn = $('<a class="arrows-prev"></a>').appendTo(elem.wrap);
                elem.prevBtn = that.find('.arrows-prev');
                elem.prevBtn.off('click').on("click", function () {
                    Fun.goto({ dir: 'left' });

                })
            };
            if (settings.nextBtn) {
                // elem.nextBtn = $('<a class="arrows-next"></a>').appendTo(elem.wrap);
                elem.nextBtn = that.find('.arrows-next');
                elem.nextBtn.off('click').on("click", function () {
                    Fun.goto({ dir: 'right' });
                })
            };
            // 是否展示圆点
            if (settings.circle) {
                // var span = '';
                // for (var i = 0; i < elem.itemLength; i++) {
                //     span += '<span></span>';
                // }
                // elem.wrap.append('<div class="carousel-circle">' + span + '</div>');
                elem.circle = that.find('.carousel-circle > span');
                elem.circle.eq(0).addClass("active");
                /*小点的鼠标移入事件，触发图片左移还是右移*/
                elem.circle.mouseenter(function () {
                    //获取当前移入的index值
                    $index = $(this).index();
                    Fun.mousegoto({ step: $index });
                });
            }


            if (settings.touchStop) {
                elem.box.mouseenter(function () {
                    Fun.stop();
                }).mouseleave(function () {
                    if (!timer) Fun.play();
                })
            }

            elem.box.on('touchstart', Fun.touchS).on('touchend', Fun.touchE);


            win.addEventListener('resize', function () {
                if (settings.mode) {
                    elem.totalLi.width(elem.box.width());
                } else {
                    elem.totalLi.width(elem.box.width() / 3);
                }
                elem.totalLi.css({ "margin-right": settings.margin_right });
                elem.itemWidth = elem.totalLi.outerWidth(true);
                elem.itemHeight = elem.totalLi.outerHeight(true);
                elem.max = elem.itemWidth * elem.itemLength //max 总图片的宽，即总偏移量 
                elem.list.width(elem.max * 3);//ul的宽度
                elem.box.scrollLeft(elem.itemWidth * elem.index);
            })

            //自动播放
            if (settings.auto) {
                setTimeout(Fun.play(), 30)
            }

        };


        // 方法：滚动
        Fun.goto = function (obj) {
            if (!lockState) return;
            lockState = false; //开关
            if (obj.dir == 'right') {
                elem.index++;
                //图片向左移动    当前的偏移量 + 1个图片的宽  *   一次要移动多少个图（即多少个图的宽总和，默认是一个）                      
                scrollLeft = elem.box.scrollLeft() + (elem.itemWidth * settings.step);
                if (scrollLeft > elem.max) scrollLeft = elem.max;
            }
            else if (obj.dir == 'left') {
                elem.index--;
                if (elem.box.scrollLeft() == elem.min) {
                    elem.index = elem.itemLength - 1;
                    elem.box.scrollLeft(elem.max);
                }
                scrollLeft = elem.box.scrollLeft() - (elem.itemWidth * settings.step);
            }

            elem.box.stop(true, true).animate({ 'scrollLeft': scrollLeft }, settings.speed,
                function () {
                    if (scrollLeft >= elem.max) {
                        elem.box.scrollLeft(0);
                    }
                    lockState = true;
                });
            if (elem.index >= elem.itemLength) {
                elem.index = 0;//圆点重置为0
            }

            //改变圆点的颜色
            if (settings.circle) {
                elem.circle.removeClass("active").eq(elem.index).addClass("active");
            }
        };
        /*小点的鼠标移入事件，触发图片左移还是右移*/

        Fun.mousegoto = function (obj) {
            Fun.stop();
            elem.index = obj.step;
            scrollLeft = elem.itemWidth * elem.index;
            elem.box.scrollLeft(scrollLeft);
            //改变圆点的颜色
            elem.circle.removeClass("active").eq(elem.index).addClass("active");
        }

        //手指移动开始
        Fun.touchS = function (e) {
            Fun.stop();
            //设置触摸起始点水平方向位置
            if (e.originalEvent.touches.length == 1) {
                startX = e.originalEvent.touches[0].clientX;
                startY = e.originalEvent.touches[0].clientY;
            }
        }

        //手指移动结束
        Fun.touchE = function (e) {
            if (e.originalEvent.changedTouches.length == 1) {
                var startXend = e.originalEvent.changedTouches[0].clientX
                    , startYend = e.originalEvent.changedTouches[0].clientY,
                    moveX = startXend - startX;
                //对比的是px    负的为向左滑动 ,正是向右滑动
                if (moveX <= -imgWidth) {
                    Fun.goto({ dir: 'right' });
                } else if (moveX >= imgWidth) {
                    Fun.goto({ dir: 'left' });
                }
            }
        }

        // 方法：开始
        Fun.play = function () {
            timer = setInterval(function () {
                Fun.goto({ dir: 'right' });
            }, settings.time);
        };
        // 方法：停止
        Fun.stop = function () {
            clearInterval(timer);
            timer = null;
        };


        Fun.init();
    }

    // 默认值 对JQ自身的扩展
    $.lxyCarousel.defaults = {
        mode: true,
        step: 1,              // 滚动步长
        speed: 800,           // 自动滚动速度
        time: 1500,           // 自动滚动间隔时间
        auto: true,           // 是否自动滚动
        prevBtn: true,        // 是否使用 prev 按钮
        nextBtn: true,        // 是否使用 next 按钮
        circle: true,          // 是否使用 圆点指示器
        touchStop: true,        //鼠标移入的时候停止播放
        margin_right: 0,
    };
    //给$ 扩展一个方法  $("body").cxScroll(a,b) 对JQ选中元素的方法的扩展
    $.fn.lxyCarousel = function (settings, callback) {
        this.each(function (i) {
            $.lxyCarousel($(this), settings, callback);
        });
        return this;
    }
})(jQuery, window, document);

