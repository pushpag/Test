$(document).ready(function(){

	function toggleChevron(e) {
	    $(e.target)
	        .prev('.panel-heading')
	        .find("i.indicator")
	        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

	$('.edit').click(function(){
		$('.editor').attr('contenteditable', 'true').css({'background': '#daf7a6', 'margin-top': '25px', 'padding': '10px'});
	});

	$('.accordion-toggle, .ok').click(function(){
		$('.editor').attr('contenteditable', 'false').css({'background': '#fff', 'margin-top': '0', 'padding': '0'});
	
	});

});

