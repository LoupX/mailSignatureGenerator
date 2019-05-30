$(function(){
	/* sert au preview sur la page main*/
	$('form input').each(function(){
		var name = $(this).attr('name');
		$(this).keyup(function(){
			var val = $(this).val();
			if(name == 'tel' && val!==''){
				val = '<b style="color:#3896D6;font-size:14px;">Tel:&nbsp;</b>'+val;
			}
			if(name == 'puesto' && val!==''){
				val = ''+val;
			}
			if(name == 'mail' && val!==''){
				val = '<a style="margin-left:10px;color:#42484c;font-size:14px;" href="#"><b style="color:#3896D6;font-size:14px;">E:&nbsp;</b><span style="color:#41474c;font-size:14px;">'+val+'</span></a>';
			}
			
			if(val==""){
				if(name == 'tel' && val==''){
					val = '<b style="color:#3896D6;font-size:14px;">Tel:&nbsp;</b>';
				}
				if(name == 'mail' && val==''){
					val = '<b style="color:#3896D6;margin-left:10px;font-size:14px;">E:&nbsp;</b>';
				}else if(name == 'pre' && val==''){
					val = '';
				}
				else if(name == 'poste' && val==''){
					val = '';
				}else{
					val = $(this).attr("placeholder");
				}
			}
			$('#preview .field-'+name).html( val );
			// update();
		});
	});
	
	
	function update(){
		$('form input').each(function(){
			var name = $(this).attr('name');
			$('#preview .field-'+name).html( $(this).val() );
		});
	}
	
});