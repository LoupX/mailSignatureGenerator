$(function () {
	/* sert au preview sur la page main*/
	$('form input').each(function () {
		var name = $(this).attr('name');
		$(this).keyup(function () {
			var val = $(this).val();
			if (name == 'tel' && val !== '') {
				val = val;
			}
			if (name == 'puesto' && val !== '') {
				val = '' + val;
			}
			if (name == 'mail' && val !== '') {
				val = val;
			}

			if (val == "") {
				if (name == 'tel' && val == '') {
					val = '';
				}
				if (name == 'mail' && val == '') {
					val = '';
				} else {
					val = $(this).attr("placeholder");
				}
			}
			$('#preview .field-' + name).html(val);
			// update();
		});
	});


	function update() {
		$('form input').each(function () {
			var name = $(this).attr('name');
			$('#preview .field-' + name).html($(this).val());
		});
	}

});
