// document

$(document).ready(function(){

// Submit texto

	$('.btn').on('click', function(event){
		var data = $('#sendtweet').val();
		var likes = 1 + Math.floor(Math.random() * 10);

		var element = '<li><div class="Tweet_block"><span>' + data + '</span><a class="likeable" href="#" >&nbsp;&nbsp;<i class="fas fa-heart add__tweet__like">&nbsp;<p class="contador">' + likes + '</p>&nbsp;</i></a>&nbsp;<a class="add__tweet__remove" href="#"><i class="fas fa-trash"></i></a></div></li>';
		
		$('.add__tweet').append(element);
		$('#sendtweet').val('');
	
	});

// Al apretar like

	$('ul').on('click', '.add__tweet__like', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass('add__tweet__like--clicked');
		var hearts = parseInt($(this).children('.contador').text());
		console.log(hearts++)
		$(this).children('.contador').text(hearts)
	});

// Eliminar tweet

	$('ul').on('click', '.add__tweet__remove', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().remove();
	});

});






