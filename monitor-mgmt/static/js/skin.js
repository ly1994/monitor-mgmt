// Custom scripts
// 顶部菜单固定
$(document).ready(function () {
  $('#fixednavbar').click(function () {
    if ($('#fixednavbar').is(':checked')) {
      $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
      $("body").removeClass('boxed-layout');
      $("body").addClass('fixed-nav');
      $('#boxedlayout').prop('checked', false);
    } else {
      $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
      $("body").removeClass('fixed-nav');
    }
  });

// 左侧菜单固定
  $('#fixedsidebar').click(function () {
    if ($('#fixedsidebar').is(':checked')) {
      $("body").addClass('fixed-sidebar');
      $('.sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
      });
    } else {
      $('.sidebar-collapse').slimscroll({
        destroy: true
      });
      $('.sidebar-collapse').attr('style', '');
      $("body").removeClass('fixed-sidebar');
    }
  });

// 收起左侧菜单
  $('#collapsemenu').click(function () {
    if ($('#collapsemenu').is(':checked')) {
      $("body").addClass('mini-navbar');
      SmoothlyMenu();
    } else {
      $("body").removeClass('mini-navbar');
      SmoothlyMenu();
    }
  });

// 自适应宽度
  $('#boxedlayout').click(function () {
    if ($('#boxedlayout').is(':checked')) {
      $("body").addClass('boxed-layout');
      $('#fixednavbar').prop('checked', false);
      $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
      $("body").removeClass('fixed-nav');
      $(".footer").removeClass('fixed');
      $('#fixedfooter').prop('checked', false);
    } else {
      $("body").removeClass('boxed-layout');
    }
  });

// 底部版权固定
  $('#fixedfooter').click(function () {
    if ($('#fixedfooter').is(':checked')) {
      $('#boxedlayout').prop('checked', false);
      $("body").removeClass('boxed-layout');
      $(".footer").addClass('fixed');
    } else {
      $(".footer").removeClass('fixed');
    }
  });

// RTL模式
  $('#RTLmode').click(function () {
    if ($('#RTLmode').is(':checked')) {
      $('head').append('<link href="css/bootstrap-rtl.css" id="rtl-mode" rel="stylesheet">');
      $('body').addClass('rtls');
    } else {
      $('#rtl-mode').remove();
      $('body').removeClass('rtls');
    }
  });

// 皮肤选择
  $('.spin-icon').click(function () {
    $(".theme-config-box").toggleClass("show");
  });

// 默认主题
  $('.s-skin-0').click(function () {
    $("body").removeClass("skin-1");
    $("body").removeClass("skin-2");
    $("body").removeClass("skin-3");
  });

// 蓝色主题
  $('.s-skin-1').click(function () {
    $("body").removeClass("skin-2");
    $("body").removeClass("skin-3");
    $("body").addClass("skin-1");
  });

// 灰色主题
  $('.s-skin-2').click(function () {
    $("body").removeClass("skin-1");
    $("body").removeClass("skin-3");
    $("body").addClass("skin-2");
  });

// 黄色主题
  $('.s-skin-3').click(function () {
    $("body").removeClass("skin-1");
    $("body").removeClass("skin-2");
    $("body").addClass("skin-3");
  });
});
