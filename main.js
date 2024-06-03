const swiper = new Swiper('.swiper-container', {

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $(":input").inputmask();

  $("#phone").inputmask({"mask": "(999) 999-9999"});