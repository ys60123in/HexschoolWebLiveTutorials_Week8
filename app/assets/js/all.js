$(function() {
  console.log('Hello Bootstrap4');

  datePickerInit();
 
  function datePickerInit(){
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
  }

  function datePickerDispose(){
    $(".flatpickr-calendar").remove();
  }
  
  $("#linkListPetPhotos a").on("click", function(){
    $(".display-board").attr("src", $(this).attr('href'));
    return false;
  });

  $("#inputAccout").on("blur", showLoginPrompt);
  $("#inputPassword").on("blur", showLoginPrompt);
  $("#btnLoginSubmit").on("click", showLoginPrompt);

  function showLoginPrompt(){
    //提示帳號是否輸入
    if($("#inputAccout").val() === ""){
      $("#accountHelp").removeClass("d-none");
      return false;
    }
    else{
      $("#accountHelp").addClass("d-none");
    }

    //提示密碼是否輸入
    if($("#inputPassword").val() === ""){
      $("#passwordHelp").removeClass("d-none");
      return false;
    }
    else{
      $("#passwordHelp").addClass("d-none");
    }
  }

  //有將envOptions.js的jQuery從jquery.slim.min.js改成jquery.min.js
  //Modal 預約項目
  $("#reserveItemsModal .modal-content").load("modal/modalReserveItems.html", function(){
    modalChange("btnModalReserveInfo", "reserveInfoModal", "reserveItemsModal");
  });
  $("#reserveItemsModal").on("shown.bs.modal", datePickerInit);
  $("#reserveItemsModal").on("hidden.bs.modal", datePickerDispose);
  //Modal 預約資訊
  $("#reserveInfoModal .modal-content").load("modal/modalReserveInfo.html", function(){
    modalChange("btnBackModalReserveItems", "reserveItemsModal", "reserveInfoModal");
    modalChange("btnModalPaymentInfo", "paymentInfoModal", "reserveInfoModal");
  });
  //Modal 付款資訊
  $("#paymentInfoModal .modal-content").load("modal/modalPaymentInfo.html", function(){
    modalChange("btnBackModalReserveInfo", "reserveInfoModal", "paymentInfoModal");
    modalChange("btnModalReserveSuccess", "reserveSuccessModal", "paymentInfoModal");
  });
  //Modal 預約成功
  $("#reserveSuccessModal .modal-content").load("modal/modalReserveSuccess.html");

  //Modal按鈕點擊時顯示Modal
  modalChange("btnModalReserveItems", "reserveItemsModal", "");

  function modalChange(triggerButtonId, showModalId, hideModalId){
    $("#" + triggerButtonId).on("click", function(e){
      e.preventDefault();
      if(hideModalId !== ""){
        $("#" + hideModalId).modal("hide");
      }
      $("#" + showModalId).modal("show");
    });
  }
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