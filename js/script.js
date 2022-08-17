$(document).ready(function(){
	// 간이 네비게이션
	$('div.qck_point ul> li').on('click', function(){
		var winHT = $(window).height();
		var navindex = $(this).index();
		var nowTop = navindex * winHT
		//console.log(nowTop);

		$('html').stop().animate({scrollTop:nowTop},700);
		$('div.qck_point ul> li').removeClass('on');
		$(this).addClass('on');
	});

	// 윈도우 리사이즈
	$(window).on('resize', function(){
		var winH = $(window).height();
		$('article').height(winH);
	});

	// 마우스휠 제어
	$('article').on('mousewheel', function(event, delta){
		if(delta>0){
			var prev = $(this).prev().offset().top;
			$('html').stop().animate({'scrollTop':prev},1200);
		}else if(delta<0){
			var next = $(this).next().offset().top;
			$('html').stop().animate({'scrollTop':next},1200);
		}
	});

	// 스타일제어
	$(window).on('scroll', function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0; i<10; i++){
			if(scroll>= i*ht && scroll < (1+i)*ht ){
				$('div.qck_point ul> li').removeClass('on');
				$('div.qck_point ul> li').eq(i).addClass('on');
			}
		}
	});


	$('div.answer p.sub_answer').click(function(){
		$('div.advice>p').removeClass('on');
		$(this).parent().next().children().addClass('on');
	});

	$('section.columns.right >div.advice p').click(function(){
		var next = $(this).parents('article').next().offset().top;
		$('html').stop().animate({'scrollTop':next},1200);
	});

	//배열,키캡,스위치
	$('ul.three_things li>a>p').on('mouseover', function(){
		$(this).removeClass('on');
		$(this).prev('h4').addClass('on');
	});
	$('ul.three_things li>a>h4').on('mouseover', function(){
		$(this).removeClass('on');
		$(this).next('p').addClass('on');
	});

	//클릭하면 설명창 나오기
	$('ul.three_things li').click(function(event){
		event.preventDefault();
		var index = $(this).index();

		$('article#machine section.descript').removeClass('on');
		$('article#machine section').eq(index).addClass('on').animate({'left':0},1000);
	});

	//스위치는 내려가기
	$('ul.three_things li:last-child').click(function(){
		var next = $(this).parents('article').next().offset().top;
		$('html').stop().animate({'scrollTop':next},1200);
	});

	//뒤로가기 버튼
	$('span.circle_back').click(function(){
		$(this).parents('section').animate({'left':'-100%'},1000,function(){
			$('article#machine section.descript').removeClass('on');
		});
	});

	//옵션	
	$('ul.op_list >li.options').click(function(event){
		event.preventDefault();
		$('ul.op_list >li.options').removeClass('on');
		$(this).addClass('on');
	});
    
	//스위치 설명
    $('.switch_sec').click(function(){
		$('.switch_sec').removeClass('on');
		$(this).addClass('on');
	});
	$('article#switches div.barTop_ex').click(function(){
		$('.switch_sec').removeClass('on');
	});
    
    
	//타건영상 썸네일 슬라이드
    $('.ar_right').click(function(){
        $('div.video_wrap ul.video_list li').eq(0).insertAfter('div.video_wrap ul.video_list li:last-child');
    });
    $('.ar_left').click(function(){
        $('div.video_wrap ul.video_list li').eq(-1).insertBefore('div.video_wrap ul.video_list li:first-child');
    });
    
	//마지막 체크
    $('ul.faq_list li').click(function(event){
       event.preventDefault();
       $('ul.faq_list li').removeClass('on');
       $(this).addClass('on');
        
        var $answerIndex = $(this).index();
        console.log($answerIndex);
        
        $('ul.answer_faq li').removeClass('on');
        $('ul.answer_faq li').eq($answerIndex).addClass('on');
    });
    
	//아웃트로
    $('ul.big_menu>li a.choice').click(function(event){
        event.preventDefault();
        $(this).addClass('off');
        $(this).next('ul').addClass('on');
    });
    
    
    $('ul.short_menu>li').click(function(){
        var $this = $(this).index();
        var $quick = $this + 2;
        var winHT = $(window).height();
		//console.log($this);
        
        if($this <= 2){
           $('html').stop().animate({scrollTop:winHT * $quick},700);
        }else if($this == 3){
           $('html').stop().animate({scrollTop:winHT*($quick+1)},700);
        }else{
           $('html').stop().animate({scrollTop:winHT*($quick+2)},700);
        }
        
    });
});