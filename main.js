// 페이지 스크롤 효과
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector("#hero");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        hero.style.opacity = 0.7;
      } else {
        hero.style.opacity = 1;
      }
    });
  });
  