console.log('Site running...');


$(document).ready(function (){
  const menuToggle = $('.menu-toggle');
  menuToggle.click(() => {
    const navbarMobile = $('.navbar-mobile');
    if (navbarMobile.hasClass('active')) {
      $('.navbar-mobile').removeClass('active');
      const fa = menuToggle.children('i');
      fa.removeClass('fa-times');
      fa.addClass('fa-bars');
    } else {
      $('.navbar-mobile').addClass('active');
      const fa = menuToggle.children('i');
      console.log(fa);
      fa.removeClass('fa-bars');
      fa.addClass('fa-times');
    }
  })
})
