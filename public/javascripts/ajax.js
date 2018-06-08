var randompic = "https://loremflickr.com/36/36";
$(document).ready(function(e){
	$.ajax({
  		method: "GET", //hacemos un SEND en vez de GET, el GET va del lado del cliente (?)??
  		url: "http://jsonplaceholder.typicode.com/post/1/comments",
 		 
		})
  	.done(function(data) {
    	console.log(data);
    	for (i = 0; i < data.length; i++) {
    		var comentarios = //creamos un div donde le damos los vals de la url
    		'<h3 class="titulo">' +
        '<h4 class="autor">' +
        '<img class="portada" src="'+ img +'">' +
    		'<p class="username">' + data[i].name + '</p></div>' +
    		'<p class="email"> <a href="mailto:' + data[i].email +
         '" target="_blank">' + data[i].email + '</a></p>'+
    		'<p class="commentbody">' + data[i].body + '</p>' +
    		'</div>';
    		$(".comments").append(comentarios);    		
    	}

  	});

});

