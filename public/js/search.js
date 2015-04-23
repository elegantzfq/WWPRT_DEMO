
$(document).ready(function(){
	console.log('Ready.');
	$('body').delegate('#btn_search','click',btn_search_click);
});

function btn_search_click(){
	$.ajax({
		url:'/search',type:'post',
		data:{name:$('#cat_name').val()},
		success:function(data,status){
			//
			console.log(data+';'+status);
		}
	});
}
