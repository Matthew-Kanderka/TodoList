// check off specific todos by clicking
$("li").click(function() {
	//if li is gray, turn it black else turn gray
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});