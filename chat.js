
$( document).ready(function() {

	let userName = 'ʕ•ᴥ•ʔ';
	let imgProfile = 'imgs/img_usuario.jpg';

	$( "#talk" ).keypress(function(e){
 		if ((e.keyCode == 13) && ($( "#talk" ).val().trim() != '')){
 			//agregar el texto al chat
 			liItem();
			//hacer que el chat empuje los mensajes hacia arriba mediante aparecen
 			$('.chatSpace').animate({scrollTop: $('	.chatSpace').prop("scrollHeight")}, "slow");

 			};

  });

	function liItem(){

		 $('#chatText').append('<li class="newItem">'+'<h5 class="nickname" id="userName">'+userName+'</h5>'+
		 $("#talk").val()+'<img class="miniFotoChat setimg" src='+imgProfile+' alt="profilePic">'+'</li>');

		 /*$('#chatText').append('<h4 class="nickname">'+userName+'</h4>'+
		 	'<img class="miniFoto" src='+imgProfile+
		 	' alt="profilePic">'+'<li class="newItem">'+ $("#talk").val()+'</li>');*/
		$('#talk').val('');
	};

	/*al darle click al boton de "send", correra la siguiente funcion: si se escribe en la barra o se
	tiene algo escrito, entonces correra la funcion de arriba y apareceran los mensajes.*/

	$('#send').click(function(e){
		if (($("#talk").val().trim() != '')) {
			liItem();
		}
	});

	//cambiar foto de perfil: para general y para icono pequeno, luego aplicar a la variable ya establecida

	$('#textImg').on('change',function(e){
		$('.setimg').attr("src",$('#textImg').val());
		imgProfile = $('#textImg').val();
	});

	$('#textName').on('change',function(e){
		$('.nickname, #userName').text($('#textName').val());
		userName = $('#textName').val();
	})

	//en proceso

	/*$('#checkNotif').is('::checked',function(e){

	})*/

});
