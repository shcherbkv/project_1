$(document).ready(function(){

/* Добавление цифры в keyboard ------------------------------------------------------------------- */

		let operand1;
		let operand2;
		let operator1;
		let result;

	$(".keyboard").on("click", function(event) {

/* Если нажали на цифру или оператор, то выводим их значение на экран ---------------------------- */
		if ( $(event.target).hasClass("figure") || $(event.target).hasClass("operator") ) {
			$(".calc-number").append(event.target.value);
		};
/* Если нажали на оператор, то сохраняем значение оператора и первого операнда ------------------- */
		if ( $(event.target).hasClass("operator") ) {
			operator1 = event.target.value;
			operand1 = $(".calc-number").text().slice(0, -1);
			console.log(operand1);
		}; 
/* Если нажали на равно, то ---------------------------------------------------------------------- */
		if (event.target.value === "=") {
/* Сохраняем значение вторового операнда --------------------------------------------------------- */
			const unnecessary = operand1.length + 1;
			operand2 = $(".calc-number").text().slice(unnecessary);
			console.log(operand2);
/* */
			if (operator1 === "+") {
				result = Number(operand1) + Number(operand2);
			} else if (operator1 === "-") {
				result = Number(operand1) - Number(operand2);
			} else if (operator1 === "*") {
				result = Number(operand1) * Number(operand2);
			} else if (operator1 === "/") {
				result = Number(operand1) / Number(operand2);
			}
/* */
			$(".itog-number").text(result);
		}
	});

});

