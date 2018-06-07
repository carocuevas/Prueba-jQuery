// document

$(document).ready(function(){

// Submit texto

	$('.btn').on('click', function(event){
		var data = $('#sendtweet').val();
		var likes = 1 + Math.floor(Math.random() * 10);

		var element = '<li><div class="Tweet_block"><span>' + data + '</span><a class="add__tweet__like" href="#" >&nbsp;&nbsp;<i class="fas fa-heart">&nbsp;<p class="likeable">' + likes + '</p>&nbsp;</i></a>&nbsp;<a class="add__tweet__remove" href="#"><i class="fas fa-trash"></i></a></div></li>';
		
		$('.add__tweet').append(element);
		$('#sendtweet').val('');
	
	});

// Al apretar like

	$('ul').on('click', '.add__tweet__like', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass('.add__tweet__like--clicked');
	});

// Eliminar tweet

	$('ul').on('click', '.add__tweet__remove', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().remove();
	});

	$('ul').on('click', '.add__tweet__like', function(event){
		event.preventDefault();
		event.stopPropagation();
		var heart = parseInt($(likes).val()) + 1;
		$('likes').show().val(heart);

		console.log(heart)




	});

});





