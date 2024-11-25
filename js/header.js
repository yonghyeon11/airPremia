// 상단 메뉴 관련
$('.header > .header-inner > .top-menu-bar > ul > li').mouseenter(function(){
    $(this).addClass('active');
    $(this).find('> a').addClass('active');
});

$('.header > .header-inner > .top-menu-bar > ul > li').mouseleave(function(){
    $(this).removeClass('active');
    $(this).find('> a').removeClass('active');
});

// 상단 2차 메뉴 배경
$('.header > .header-inner > .top-menu-bar > ul > .menu-1').mouseenter(function(){
    $('.sub-menu-bg').css('height','164px');
});
$('.header > .header-inner > .top-menu-bar > ul > .menu-1').mouseleave(function(){
    $('.sub-menu-bg').css('height','');
});

$('.header > .header-inner > .top-menu-bar > ul > .menu-2').mouseenter(function(){
    $('.sub-menu-bg').css('height','238px');
});
$('.header > .header-inner > .top-menu-bar > ul > .menu-2').mouseleave(function(){
    $('.sub-menu-bg').css('height','');
});

$('.header > .header-inner > .top-menu-bar > ul > .menu-3').mouseenter(function(){
    $('.sub-menu-bg').css('height','164px');
});
$('.header > .header-inner > .top-menu-bar > ul > .menu-3').mouseleave(function(){
    $('.sub-menu-bg').css('height','');
});

$('.header > .header-inner > .top-menu-bar > ul > .menu-4').mouseenter(function(){
    $('.sub-menu-bg').css('height','90px');
});
$('.header > .header-inner > .top-menu-bar > ul > .menu-4').mouseleave(function(){
    $('.sub-menu-bg').css('height','');
});

$('.header > .header-inner > .top-menu-bar > ul > .menu-5').mouseenter(function(){
    $('.sub-menu-bg').css('height','127px');
});
$('.header > .header-inner > .top-menu-bar > ul > .menu-5').mouseleave(function(){
    $('.sub-menu-bg').css('height','');
});


// 서치 박스
$('.header > .header-inner > .search, .search-on > .search-inner > .close-btn ').click(function(){
    $('.header > .header-inner > .search-on').toggleClass('active');
});

// 모바일 메뉴 버튼
$('.m-header > .m-menu-btn').click(function(){
    if ( $(this).hasClass('active') ){
        $('html').removeClass('m-menu-scroll');
        
        $(this).removeClass('active');
        $(this).siblings('.mobile-mask').css('height','');
        $(this).siblings('.m-menu-list').removeClass('active');
    }
    else {
        $('html').addClass('m-menu-scroll');
        
        $('.m-header > .search > img').attr('src','https://www.dacorkorea.com/images/icon-search.png');
        $('.m-header > .m-search-on').removeClass('active');
        
        $(this).siblings('.m-menu-list').find(' > ul > li.active').removeClass('active');
        $(this).siblings('.m-menu-list').find(' > ul > li > ul').slideUp(0);
        
        $(this).addClass('active');
        $(this).siblings('.mobile-mask').css('height','100%');
        $(this).siblings('.m-menu-list').addClass('active');
    };
});

// 모바일 메뉴 리스트
$('.m-header > .m-menu-list > ul > li').click(function(){
    if ( $(this).hasClass('active') ) {
        $(this).find(' > ul').slideUp(300);
        $(this).removeClass('active');
    }
    else {
        $(this).siblings('li.active').removeClass('active');
        $(this).siblings().find(' > ul').slideUp(300);
        $(this).find(' > ul').slideDown(300);
        $(this).addClass('active');
    }
});

$('.m-header > .m-menu-list > ul > li > ul').click(function(e){
    e.stopPropagation();
});

// 모바일 서치 온
$('.m-header > .search').click(function(){
    if ( $('.m-header > .m-search-on').hasClass('active') ){
        $('html').removeClass('m-menu-scroll');
        
        $(this).find(' > img').attr('src','https://www.dacorkorea.com/images/icon-search.png');
        $(this).siblings('.mobile-mask').css('height','');
        $('.m-header > .m-search-on').removeClass('active');
    }
    else {
        $('html').addClass('m-menu-scroll');
        
        $('.m-header > .m-menu-btn').removeClass('active');
        $(this).siblings('.m-menu-list').removeClass('active');
        
        $(this).find(' > img').attr('src','https://www.dacorkorea.com/images/icon-search-close.png');
        $(this).siblings('.mobile-mask').css('height','100%');
        $('.m-header > .m-search-on').addClass('active');
    }
});


