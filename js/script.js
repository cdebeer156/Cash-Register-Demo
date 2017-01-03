$(function() {
	var total = 0;

	$('#entry').submit(function() {
		event.preventDefault();
		addPrice()
	});

	function addPrice () {
		var entry = $('#newEntry').val();
		var entry = parseFloat(entry);
		currency = formatAsCurrency(entry);

		$('#entries').append('<tr><th></th><th>' + currency + '</th></tr>');
		
		total += entry;

		$('#total').html(formatAsCurrency(total));
		$('#newEntry').val('');
		// return false;
	}

	function formatAsCurrency(number) {
		var currency = parseFloat(number);
		currency = currency.toFixed(2);
		currency = '$' + currency;
		return currency;
	}

})