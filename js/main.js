document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // navbar
  var navbar = document.querySelector(".navbar ");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
      // navbar
      if (navbar) {
        var expan = navbar.querySelector(".navbar-expan");
        var search = navbar.querySelector(".navbar-search");

        search.onclick = function () {
          this.classList.toggle("active");
        };

        expan.onclick = function () {
          this.classList.toggle("active");
          if (this.classList.contains("active")) {
            this.firstElementChild.innerHTML = '<i class="fas fa-times"></i>';
          } else {
            this.firstElementChild.innerHTML = '<i class="fas fa-bars"></i>';
          }
        };
      }
      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // hide cac element khi click ra ngoai
      // document.addEventListener("click", function (e) {});
    },

    // color thief
    colorThief: function () {
      // var caretakers =  document.querySelector('.article-caretaker')
      // var pictureFrames =  document.querySelector('.js-picture-frame')
      // var colorThief = new ColorThief();
      // var img = document.getElementById('imag');
      // // check if img is loaded
      // if (img && img.naturalWidth) {
      //   onImageLoad();
      // } else {
      //   img.onload = function() {
      //     onImageLoad();
      //   };
      // }
      // function onImageLoad() {
      //   URL.revokeObjectURL(image.src);
      //   var rgb = colorThief.getColor(img);
      //   document.body.style.backgroundColor = 'rgb(' + rgb.join(', ') + ')';
      // }
    },

    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 60,
      });
    },
    // fancybox
    fancybox: function () {
      if (fancyboxes) {
        fancyboxes.forEach(function (fancybox) {
          $(".fancybox-full a").fancybox();
        });
      }
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // sticky bar home 1
      this.stickyHome1();
      // fancybox
      this.fancybox();
    },
  };

  app.start();
});
