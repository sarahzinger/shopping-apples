//add an item, and then clears form
$(document).ready(function(){
	$(document).keydown(function(event){
    if (event.which == 13) {
    event.preventDefault();
	var newAppleText = $("#newItem").val();
	$("ul").append("<li>" + newAppleText +"<img src='applecore.png' class='applecore'></li>");
	$("input").val("");
}

});
//cross out stuff
	$(document).on('click', 'li', function() {
		$(this).toggleClass('cross');
	});
//remove an item by clicking on applecore...not working for some reason.
$(document).on("click",".applecore",function(){
	$(this).parent().remove();
});
//


});



