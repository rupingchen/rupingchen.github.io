$(document).ready(function() {
	// jQuery Function Number 1
	$('#intro').css("margin", "25% 58% 20% 7%");
	// jQuery Function Number 2
	$("#intro").slideDown(5000);
	$("quote").css("display","block");
	$("#quote").animate({width:'toggle'},7000);
	// jQuery Function Number 3
	$("#second").hover(function() {
		// jQuery Function Number 4
		$(this).html("this site is still under construction");
		$(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	})
	$(window).scroll(function() {
		$("#pointer-rectangle").show();

	})

})