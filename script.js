$(document).ready(function() {
	$(function () {
  		$('[data-toggle="popover"]').popover()
	});
	
	$('.slide').click(function() {
		$('#the-div').effect('slide');
	});

	$('.explode').click(function() {
		$('#the-div').effect('explode');
	});
	// $('#the-div').click(function() {
	// 	// $(this).animate({left: '+=50px'}, 500);
		
	// });	
});