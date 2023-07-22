//  Parallax scroll
var rellax = new Rellax(".rellax");

// scroll event
let observer = new IntersectionObserver((e) => {
  e.forEach((news) => {
    if (news.isIntersecting) {
      news.target.style.opacity = 1;
    } else {
      news.target.style.opacity = 0;
    }
  });
});

let news = document.querySelectorAll(".rellax");
observer.observe(news[0]);
observer.observe(news[1]);
observer.observe(news[2]);
observer.observe(news[3]);
observer.observe(news[4]);

let observer1 = new IntersectionObserver((e) => {
  e.forEach((news) => {
    if (news.isIntersecting) {
      news.target.style.opacity = 1;
    } else {
      news.target.style.opacity = 0;
    }
  });
});

let overviewTxt = document.querySelectorAll(".overview_p");
observer.observe(overviewTxt[0]);
observer.observe(overviewTxt[1]);
observer.observe(overviewTxt[2]);
observer.observe(overviewTxt[3]);
observer.observe(overviewTxt[4]);
observer.observe(overviewTxt[5]);
