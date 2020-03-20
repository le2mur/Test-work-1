$(document).ready(function(){
	
	let working = false;
	
	$('#sendingComment').submit(function(e){
      e.preventDefault();
	  if(working){ 
        return false;
      }

	  working = true;
	  $('#submit').val('Занято...');
	  $('span.error').remove();
		
	  $.post('../php/submit.php',$(this).serialize(),function(msg){

   	  working = false;
	  $('#submit').val('Отправить');
			
	  if(msg){
        $("#commentArea").append(`<div id="comments"><p id="nameDate"><span id="nameOfDiv">${msg.name}</span><span id="dateOfDiv">${msg.data}</span></p><p ////id="commentOfDiv">${msg.comment}</p><p id="delete"></p></div>`);
      } else {
		  $.each(msg.errors,function(k,v){
		    $('label[for='+k+']').append('<span class="error">'+v+'</span>');
		  });
		}
	  },'json');

	});
	
});
