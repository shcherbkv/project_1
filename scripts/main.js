$(document).ready(function(){

/* Добавление цифры в keyboard ------------------------------------------------------------------- */

	$(".keyboard").on("click", function(event) {
		if (event.target.value !== "=") {
			$(".calc-number").append(event.target.value);
		};
		if ( $(event.target).hasClass("operator") ) {
			const operator1 = event.target.value;
			const operand1 = $(".calc-number").text().slice(0, -1);
			console.log(operand1);
		};
		if ()
	})

});

