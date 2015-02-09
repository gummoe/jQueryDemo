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

	$('.show-it').click(function() {
		$('#the-div').show();
	})

	$('.hide-it').click(function() {
		$('#the-div').hide();
	})

	$('.fade-in').click(function() {
		$('#the-div').hide();
		$('#the-div').fadeIn(1500);
	});

	$('.fade-out').click(function() {
		$('#the-div').fadeOut(1500);
	});

	$('.reset').click(function() {
		$('#the-div').show();
	});
});
