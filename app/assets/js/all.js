$(function() {
  console.log('Hello Bootstrap4');

  $(".datepicker").flatpickr({
    dateFormat: 'Y/m/d',
    locale: {
      firstDayOfWeek: 7,
      weekdays: {
        shorthand: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
        longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      },
      months: {
        shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      },
    },
  });

  const today = new Date();
  const todayDateString = today.getFullYear() + "/" + paddingLeft(String(today.getMonth() + 1), 2) + "/" + paddingLeft(String(today.getDate()), 2);
  const tomorrow = today.addDays(1);
  const tomorrowDateString = tomorrow.getFullYear() + "/" + paddingLeft(String(tomorrow.getMonth() + 1), 2) + "/" + paddingLeft(String(tomorrow.getDate()), 2);
  $("#inputFromDate").val(todayDateString);
  $("#inputToDate").val(tomorrowDateString);
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
    }
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + days);
  return this;
}

function paddingLeft(str, length){
  if(str.length >= length)
  {
      return str;
  }
  else
  {
      return paddingLeft("0" + str, length);
  }
}