(function() {
  var myEffect = {
    //匀速
    Linear: function(t, b, c, d) {
      return (c * t) / d + b;
    },
    //指数衰减的反弹缓动
    Bounce: {
      easeIn: function(t, b, c, d) {
        return c - myEffect.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOut: function(t, b, c, d) {
        if (t < d / 2) {
          return myEffect.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
        }
        return myEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    },
    //二次方的缓动
    Quad: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOut: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return (c / 2) * t * t + b;
        }
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      }
    },
    //三次方的缓动
    Cubic: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return (c / 2) * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
      }
    },
    //四次方的缓动
    Quart: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return (c / 2) * t * t * t * t + b;
        }
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    //五次方的缓动
    Quint: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return (c / 2) * t * t * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    //正弦曲线的缓动
    Sine: {
      easeIn: function(t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      },
      easeOut: function(t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      },
      easeInOut: function(t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      }
    },
    //指数曲线的缓动
    Expo: {
      easeIn: function(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOut: function(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    //圆形曲线的缓动
    Circ: {
      easeIn: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    //超过范围的三次方缓动
    Back: {
      easeIn: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) {
          return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    },
    //指数衰减的正弦曲线缓动
    Elastic: {
      easeIn: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;
        !a || a < Math.abs(c)
          ? ((a = c), (s = p / 4))
          : (s = (p / (2 * Math.PI)) * Math.asin(c / a));
        return (
          -(
            a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)
          ) + b
        );
      },
      easeOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;
        !a || a < Math.abs(c)
          ? ((a = c), (s = p / 4))
          : (s = (p / (2 * Math.PI)) * Math.asin(c / a));
        return (
          a *
            Math.pow(2, -10 * t) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
          c +
          b
        );
      },
      easeInOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (0.3 * 1.5);
        var s;
        !a || a < Math.abs(c)
          ? ((a = c), (s = p / 4))
          : (s = (p / (2 * Math.PI)) * Math.asin(c / a));
        if (t < 1)
          return (
            -0.5 *
              (a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
            b
          );
        return (
          a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
          c +
          b
        );
      }
    }
  };

  function move(curE, objTarget, duration, effect, callback) {
    var aryEffect = [
      "Linear",
      "Bounce-easeIn",
      "Bounce-easeOut",
      "Bounce-easeInOut"
    ];
    var tempEffect = myEffect.Linear;
    if (typeof effect === "number") {
      var str = aryEffect[effect % aryEffect.length];
      var arrStr = str.split("-");
      tempEffect =
        arrStr.length >= 2
          ? myEffect[arrStr[0]][arrStr[1]]
          : myEffect[arrStr[0]];
    } else if (typeof effect === "object") {
      tempEffect =
        effect.length >= 2
          ? myEffect[effect[0]][effect[1]]
          : myEffect[effect[0]];
    } else if (typeof effect === "function") {
      //console.log(effect);
      callback = effect;
    }

    duration = duration || 800;
    var begin = {};
    var change = {};
    for (var attr in objTarget) {
      begin[attr] = utils.css(curE, attr);
      change[attr] = objTarget[attr] - begin[attr];
    }
    var time = 0;
    clearInterval(curE.timer);
    curE.timer = setInterval(function() {
      time += 10;
      if (time >= duration) {
        utils.css(curE, objTarget);
        clearInterval(curE.timer);
        if (typeof callback === "function") {
          callback.call(curE);
        }
        return;
      }
      for (var attr in objTarget) {
        utils.css(
          curE,
          attr,
          tempEffect(time, begin[attr], change[attr], duration)
        );
      }
    }, 10);
  }

  window.animate = move;
})();
