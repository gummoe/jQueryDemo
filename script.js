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
	$('.fade-in').click(function() {
		$('#the-div').hide();
		$('#the-div').fadeIn(2000);
	});
	$('.fade-out').click(function() {
		$('#the-div').fadeOut(2000);
	});
	$('.reset').click(function() {
		$('#the-div').show();
	});
});
