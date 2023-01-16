document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // navbar
  var navbar = document.querySelector(".navbar ");

  // đề xuất
  var suggest = document.querySelector(".block-suggest");

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
      if (suggest) {
        var pictureFrames = suggest.querySelectorAll(".js-picture-frame");
        pictureFrames.forEach((pictureFrame) => {
          var parent = pictureFrame.parentElement.parentElement;
          var caretaker = parent.querySelector(".article-caretaker");
          var content = parent.querySelector(".article-content");
          var coating = parent.querySelector(".coating-secondary");
          var img = new Image();
          let srcImg = `${pictureFrame.src}`;

          img.onload = function () {
            var colorThief = new ColorThief();
            var color = colorThief.getColor(img);

            caretaker.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            coating.onmouseover = function () {
              this.style.background = `rgba(${color[0]}, ${color[1]}, ${color[2]},0.5)`;
            };

            coating.onmouseout = function () {
              this.style.background = `transparent`;
            };

            if (content.closest(".box-priamry")) {
              content.style.background = `linear-gradient(to right, transparent, rgba(${color[0]}, ${color[1]}, ${color[2]},0) 4%, rgba(${color[0]}, ${color[1]}, ${color[2]},0.5) 8%, rgb(${color[0]}, ${color[1]}, ${color[2]}) 12%)`;
            } else if (content.closest(".box-secondary")) {
              content.style.background = `linear-gradient(transparent, rgba(${color[0]}, ${color[1]}, ${color[2]},0) 4%, rgba(${color[0]}, ${color[1]}, ${color[2]},0.5) 8%, rgb(${color[0]}, ${color[1]}, ${color[2]}) 12%)`;
            } else {
              content.style.background = `linear-gradient(to left, transparent, rgba(${color[0]}, ${color[1]}, ${color[2]},0) 4%, rgba(${color[0]}, ${color[1]}, ${color[2]},0.5) 8%, rgb(${color[0]}, ${color[1]}, ${color[2]}) 12%)`;
            }
          };

          img.crossOrigin = "Anonymous";
          img.src = srcImg;
        });
      }
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
      // color thief
      this.colorThief();
    },
  };

  app.start();
});
