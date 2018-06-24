$(window).on('scroll', function (){
	let NEXTPageTEXT = Array.from($('.page-text'))
	for (let nextpage of NEXTPageTEXT){
		let nextPageText = NEXTPageTEXT[nextpage]
	}
	// var TextPos = $('#intro').offset();
	// $('.page-text').each(function(){
	// 	if (window.pageYOffset >= 1270){
	// 		var nextPageText = $('.page-text').next().prevObject[1].innerText;
	// 		var oldPageText = $('.page-text')[0].innerText;
	// 		$('.page-text').html(nextPageText);
	// 	}
	// 	else {
	// 		$('.page-text').html(oldPageText);
	// 	}
	// 		return;
	// 	})
	$(document).ready(function() {
		$(window).trigger("scroll");
	})
})
	// // jQuery Function Number 1
	// $('#intro').css("margin", "25% 58% 20% 7%");
	// // jQuery Function Number 2
	// $("#intro").slideDown(5000);
	// $("quote").css("display","block");
	// $("#quote").animate({width:'toggle'},7000);
	// // jQuery Function Number 3
	// $("#second").hover(function() {
	// 	// jQuery Function Number 4
	// 	$(this).html("this site is still under construction");
	// 	$(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	// })
	// // jQuery Function Number 5
	// $("#button1").click(function() {
	// 	$('html, body').animate({
	// 		// jQuery Function Number 6
 //        scrollTop: $("#what-i-do").offset().top
 //    }, 2000);
	// })

	// // TypeIt Introduction
	// new TypeIt('#intro p', {
	// 	speed:80,
	// 	startDelay:6000,
	// }).type('I’m a senior at UC Berkeley studying Statistics, currently purusing an interest in design and furthering my passions in creative writing.').break().break().type('To me, writing is a form of artistry that allows me to understand that which seems nebulous -- a soul-searching of sorts. I infrequently write for the Daily Cal and occasionally update this blog.').break().break().type('Feel free to explore this website and should you feel the need, contact me!')

