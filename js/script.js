(()=>{"use strict";var __webpack_modules__={"./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/()=>{eval("\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var bgItems = document.querySelectorAll('.slide-bg__link');\n  var imageSlides = document.querySelectorAll('.slide-bg__inner');\n  var shapes = document.querySelectorAll('.shapes__content');\n  var shapeSlides = document.querySelectorAll('.shapes__item');\n  var helperInput = document.querySelector('#input-helper');\n  var mainSection = document.querySelector('.main-section');\n  var mouse = document.querySelector('.mouse');\n  var slideBg = document.querySelector('.slide-bg');\n  var links = document.querySelectorAll('a');\n  var burger = document.querySelector('.header__burger-body');\n  var slidesCount = 5;\n  var slideCounter = 1;\n  var easing = BezierEasing(0.770, 0.125, 0.265, 1.040);\n  var preloader = document.querySelector('.preloader');\n\n  function startComplete() {// imageSlides.forEach(item => item.style.opacity = 1);\n    // shapeSlides.forEach(item => item.style.opacity = 1);\n  }\n\n  var startingTl = gsap.timeline({\n    defaults: {\n      ease: easing\n    },\n    onComplete: startComplete\n  }); //Blocks Animation\n\n  function startAnimation() {\n    var currentSlide = document.querySelector('.inner-current');\n    var currentShape = document.querySelector('.shapes-current');\n    var currentText = document.querySelector('.slide-active');\n    startingTl.to('.header', 0.5, {\n      opacity: 1,\n      y: 0,\n      delay: 0.5\n    }).to('.main-section__explore', 0.5, {\n      opacity: 1,\n      y: 0\n    }, '-=0.5').to(currentText.querySelector('.slides-container__title'), 0.6, {\n      opacity: 1,\n      y: 0\n    }, '-=0.1').to(currentText.querySelector('.designers-info'), 0.6, {\n      opacity: 1,\n      y: 0\n    }, '-=0.4').from(currentSlide, 0.4, {\n      xPercent: 100\n    }, '-=0.4').from(currentSlide.querySelector('.slide-bg__link'), 0.4, {\n      xPercent: -100\n    }, '-=0.4').from(currentShape, 0.6, {\n      xPercent: 100\n    }, '-=0.2').from(currentShape.querySelector('.shapes__content'), 0.6, {\n      xPercent: -100,\n      delay: -0.6\n    }, '-=0.2');\n  } //Change Main Background\n\n\n  shapes.forEach(function (item) {\n    return item.style.backgroundColor = \"\".concat(item.dataset.bg);\n  });\n  bgItems.forEach(function (item) {\n    return item.style.backgroundImage = \"url('\".concat(item.dataset.bg, \"')\");\n  });\n\n  function bgSlides(direction) {\n    var itemClass = \"slide-\".concat(slideCounter);\n\n    if (direction == 'down') {\n      if (slideCounter < slidesCount) {\n        mainSection.classList.remove(itemClass);\n        slideCounter++;\n        itemClass = \"slide-\".concat(slideCounter);\n        mainSection.classList.add(itemClass);\n      }\n    } else if (direction == 'up') {\n      if (slideCounter > 1) {\n        mainSection.classList.remove(itemClass);\n        slideCounter--;\n        itemClass = \"slide-\".concat(slideCounter);\n        mainSection.classList.add(itemClass);\n      }\n    }\n  } //Mouse Cursor\n\n\n  function moveMouse(e) {\n    if (e.clientX < 5 || e.clientY < 5 || e.clientY > window.innerHeight - 5 || e.clientX > window.innerWidth - 5) {\n      mouse.style.opacity = 0;\n    } else {\n      mouse.style.opacity = 1;\n      mouse.style.transform = \"translate(\".concat(e.clientX, \"px, \").concat(e.clientY, \"px)\");\n    }\n  }\n\n  if (window.innerWidth >= 768) {\n    document.addEventListener('mousemove', moveMouse);\n    slideBg.addEventListener('mouseover', function () {\n      return mouse.classList.add('view-visible');\n    });\n    slideBg.addEventListener('mouseleave', function () {\n      return mouse.classList.remove('view-visible');\n    });\n    links.forEach(function (link) {\n      return link.addEventListener('mouseover', function () {\n        return mouse.classList.add('links-visible');\n      });\n    });\n    links.forEach(function (link) {\n      return link.addEventListener('mouseleave', function () {\n        return mouse.classList.remove('links-visible');\n      });\n    });\n    burger.addEventListener('mouseover', function () {\n      return mouse.classList.add('links-visible');\n    });\n    burger.addEventListener('mouseleave', function () {\n      return mouse.classList.remove('links-visible');\n    });\n  } //Image Animation\n\n\n  function imagesSlides(direction) {\n    var currentSlide = document.querySelector('.inner-current');\n    var nextSlide;\n    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;\n\n    if (nextSlide) {\n      imageSlides.forEach(function (item) {\n        return item.classList.remove('index');\n      });\n      currentSlide.classList.add('index');\n      var tl = gsap.timeline({\n        defaults: {\n          ease: easing\n        },\n        onComplete: function onComplete() {\n          currentSlide.classList.remove('index');\n        }\n      });\n      tl.from(nextSlide, 0.5, {\n        xPercent: 100\n      }).from(nextSlide.querySelector('.slide-bg__link'), 0.5, {\n        xPercent: -100,\n        delay: -0.5\n      });\n      currentSlide.classList.remove('inner-current');\n      nextSlide.classList.add('inner-current');\n    }\n  } //Text Anomation\n\n\n  function textSlides(direction) {\n    var currentSlide = document.querySelector('.slide-active');\n    var nextSlide;\n    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;\n\n    if (nextSlide && !nextSlide.classList.contains('main-section__explore')) {\n      var tl = gsap.timeline({\n        defaults: {\n          ease: easing\n        }\n      });\n      tl.to(currentSlide.querySelector('.slides-container__title'), 0.6, {\n        opacity: 0,\n        y: 100\n      }).to(currentSlide.querySelector('.designers-info'), 0.6, {\n        opacity: 0,\n        y: 100\n      }, '-=0.6').to(nextSlide.querySelector('.slides-container__title'), 0.6, {\n        opacity: 1,\n        y: 0\n      }, '-=0.1').to(nextSlide.querySelector('.designers-info'), 0.6, {\n        opacity: 1,\n        y: 0\n      }, '-=0.5');\n      currentSlide.classList.remove('slide-active');\n      nextSlide.classList.add('slide-active');\n    }\n  } //Shape Animation\n\n\n  function shapesSlides(direction) {\n    var currentSlide = document.querySelector('.shapes-current');\n    var nextSlide;\n    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;\n\n    if (nextSlide) {\n      shapeSlides.forEach(function (item) {\n        return item.classList.remove('index');\n      });\n      currentSlide.classList.add('index');\n      var tl = gsap.timeline({\n        defaults: {\n          ease: easing\n        },\n        onComplete: function onComplete() {\n          currentSlide.classList.remove('index');\n        }\n      });\n      tl.from(nextSlide, 0.5, {\n        xPercent: 100,\n        delay: 0.5\n      }).from(nextSlide.querySelector('.shapes__content'), 0.5, {\n        xPercent: -100,\n        delay: -1\n      });\n      currentSlide.classList.remove('shapes-current');\n      nextSlide.classList.add('shapes-current');\n    }\n  } //Init\n\n\n  function init() {\n    window.addEventListener('load', function () {\n      preloader.classList.add('preloader-animation');\n      setTimeout(function () {\n        preloader.classList.remove('preloader-animation');\n        preloader.classList.add('preloader-hidden');\n      }, 3000);\n      setTimeout(function () {\n        startAnimation();\n        preloader.classList.add('preloader-none');\n      }, 3200);\n    });\n\n    var showNextSlide = function showNextSlide() {\n      bgSlides('down');\n      imagesSlides('down');\n      shapesSlides('down');\n      textSlides('down');\n    };\n\n    var showPrevSlide = function showPrevSlide() {\n      bgSlides('up');\n      imagesSlides('up');\n      shapesSlides('up');\n      textSlides('up');\n    };\n\n    if (window.innerWidth >= 768) {\n      window.addEventListener('wheel', function (e) {\n        var delta = -e.deltaY;\n\n        if (delta > 0) {\n          if (helperInput.value == '1') {\n            helperInput.value = 0;\n            showPrevSlide();\n            setTimeout(function () {\n              helperInput.value = 1;\n            }, 1500);\n          }\n        } else {\n          if (helperInput.value == '1') {\n            helperInput.value = 0;\n            showNextSlide();\n            setTimeout(function () {\n              helperInput.value = 1;\n            }, 1500);\n          }\n        }\n      });\n    } else {\n      document.addEventListener('swiped-left', function () {\n        showNextSlide();\n      });\n      document.addEventListener('swiped-right', function () {\n        showPrevSlide();\n      });\n    }\n  }\n\n  init();\n});\n\n//# sourceURL=webpack://gulpstarter/./src/js/script.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/script.js"]()})();
//# sourceMappingURL=script.js.map
