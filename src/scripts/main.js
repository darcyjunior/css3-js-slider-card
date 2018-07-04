(function() {
  const init = () => {
    initKeyboard();
  };

  flag = 1;

  const images = [
    { url: "images/AGRA.jpg" },
    { url: "images/NEW%20YORK.jpg" },
    { url: "images/PARIS.jpg" }
  ];

  let nextBtn = document.querySelector("#nex"),
    prevBtn = document.querySelector("#pre"),
    mainEl = document.querySelector("#main");

  nextBtn.addEventListener("click", () => {
    console.log("clicou");
  });

  prevBtn.addEventListener("click", () => {
    console.log("clicou");
  });

  const seq = [1, 2, 3];

  const createImgEl = url => {
    const imgEl = document.createElement("IMG");
    imgEl.src = url;
    imgEl.className = "images";
    return imgEl;
  };

  const createSlideEl = url => {
    const slideEl = `<div id="slide1">`;
    return slideEl;
  };

  const initSliderCards = () => {
    slides = [];
    images.forEach((image, index) => {
      const imageEl = createImgEl(image.url);
      const slideEl = document.createElement("DIV");
      slideEl.id = `slide${index + 1}`;
      slideEl.appendChild(imageEl);

      main.appendChild(slideEl);
      console.log(image);
    });
  };

  const moveSlideNext = () => {
    console.log(images[0]);
  };

  var initKeyboard = () => {
    document.addEventListener("keyup", function(e) {
      switch (e.key) {
        case "ArrowRight":
          moveSlideNext();
          break;

        default:
          break;
      }
      console.log(e.key);
    });
  };
  $("#nex").click(() => {
    if (flag == 0) {
      $("#slide1").css("z-index", "99");
      $("#slide2").css("z-index", "1");
      $("#slide3").css("z-index", "1");
      $("#slide1").css("transform", "translateX(0px) scale(1.5)");
      $("#slide2").css("transform", "translateX(-100px) scale(1)");
      $("#slide3").css("transform", "translateX(100px)");

      flag = 1;
    } else if (flag == 1) {
      $("#slide3").css("z-index", "99");
      $("#slide2").css("z-index", "1");
      $("#slide1").css("z-index", "1");
      $("#slide3").css("transform", "translateX(0px) scale(1.5)");
      $("#slide1").css("transform", "translateX(-100px) scale(1)");
      $("#slide2").css("transform", "translateX(100px)");
      flag = 2;
    } else if (flag == 2) {
      $("#slide2").css("z-index", "99");
      $("#slide3").css("z-index", "1");
      $("#slide1").css("z-index", "1");
      $("#slide2").css("transform", "translateX(0px) scale(1.5)");
      $("#slide3").css("transform", "translateX(-100px) scale(1)");
      $("#slide1").css("transform", "translateX(100px)");
      flag = 0;
    }
  });
  $("#pre").click(() => {
    if (flag == 0) {
      $("#slide3").css("z-index", "99");
      $("#slide2").css("z-index", "1");
      $("#slide1").css("z-index", "1");
      $("#slide3").css("transform", "translateX(0px) scale(1.5)");
      $("#slide1").css("transform", "translateX(-100px) scale(1)");
      $("#slide2").css("transform", "translateX(100px)");
      flag = 2;
    } else if (flag == 1) {
      $("#slide2").css("z-index", "99");
      $("#slide3").css("z-index", "1");
      $("#slide1").css("z-index", "1");
      $("#slide2").css("transform", "translateX(0px) scale(1.5)");
      $("#slide3").css("transform", "translateX(-100px) scale(1)");
      $("#slide1").css("transform", "translateX(100px)");
      flag = 0;
    } else if (flag == 2) {
      $("#slide1").css("z-index", "99");
      $("#slide2").css("z-index", "1");
      $("#slide3").css("z-index", "1");
      $("#slide1").css("transform", "translateX(0px) scale(1.5)");
      $("#slide2").css("transform", "translateX(-100px) scale(1)");
      $("#slide3").css("transform", "translateX(100px)");
      flag = 1;
    }
  });

  init();
})();
