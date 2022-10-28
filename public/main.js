var dropMenu = document.getElementById('tqd-drop-menu')
var dropItem = document.getElementById('tqd-drop-menu-item')


document.addEventListener('click', (e) => {
  if(dropMenu.contains(e.target)){
    dropItem.classList.toggle('hidden')
  }
  else{
    if(!(dropItem.contains(e.target))){
      dropItem.classList.add('hidden')
    }
  }
})
// slide baner
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  history: {
    key: "slide",
  },
});
// slide 1
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".but-n-1",
    prevEl: ".but-p-1",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.4,
      spaceBetween: 24,
    },
  },
});
// slide 2
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".but-n",
    prevEl: ".but-p",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 24,
    },
  },
});
//  ưu đãi
document.getElementById("UD").onclick = function() {
  document.getElementById("ud").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
// dịch vụ
document.getElementById("DV").onclick = function() {
  document.getElementById("dv").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
// giới thiệu
document.getElementById("GT").onclick = function() {
  document.getElementById("gt").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
// Đội ngũ bác sĩ
document.getElementById("DN").onclick = function() {
  document.getElementById("dn").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
//  bảng giá
document.getElementById("BG").onclick = function() {
  document.getElementById("bg").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}