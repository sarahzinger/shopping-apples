//add an item
$(document).ready(function(){
	$(document).keydown(function(event){
    if (event.which == 13) {
    event.preventDefault();
	var newAppleText = $("#newItem").val();
	$("ul").append("<li>" + newAppleText +"<img src='applecore.png'></li>");
}

});

//cross out stuff
	$(document).on('click', 'li', function() {
		$(this).toggleClass('cross');
	});
//remove an item by clicking on applecore...not working for some reason.
$(document).on("click","img",function(){
	$(this).parent.remove();
});


});



