$(document).ready(function(){

/* ���������� ����� � keyboard ------------------------------------------------------------------- */

		let operand1 = "";
		let operand2 = "";
		let operator1 = "";
		let result = "";

	$(".keyboard").on("click", function(event) {

/* ���� ������ �� ����� ��� ��������, �� ������� �� �������� �� ����� ---------------------------- */
		if ( $(event.target).hasClass("figure") || $(event.target).hasClass("operator") || $(event.target).hasClass("comma") ) {
			$(".calc-number").append(event.target.value);
		};

/* ���� ������ �� ��������, �� ��������� �������� ��������� � ������� �������� ------------------- */
		if ( $(event.target).hasClass("operator") ) {
			operator1 = event.target.value;
			operand1 = $(".calc-number").text().slice(0, -1);
		}; 

/* ���� ������ �� �����, �� ---------------------------------------------------------------------- */
		if (event.target.value === "=") {
/* ��������� �������� ��������� �������� --------------------------------------------------------- */
			const unnecessary = operand1.length + 1;
			operand2 = $(".calc-number").text().slice(unnecessary);
/* � ����������� �� ��������� ���������� � ��������� ���������� ---------------------------------- */
			if (operator1 === "+") {
				result = Number(operand1) + Number(operand2);
			} else if (operator1 === "-") {
				result = Number(operand1) - Number(operand2);
			} else if (operator1 === "*") {
				result = Number(operand1) * Number(operand2);
			} else if (operator1 === "/") {
				result = Number(operand1) / Number(operand2);
			}
/* ������� ��������� ���������� � ���� ----------------------------------------------------------- */
			$(".itog-number").text(result);
			operand1 = "";
			operand2 = "";
			operator1 = "";
			result = "";
		};

/* ���� ������ �� �, �� ������� ��� ������ �� ����� � ��������������� ����� ---------------------- */
		if ( $(event.target).hasClass("btn-C") ) {
			$(".calc-number").text("");
			$(".itog-number").text("0");
			operand1 = "";
			operand2 = "";
			operator1 = "";
			result = "";
		};

/* ���� ������ �� �, �� ������� �������� ��������� ������� --------------------------------------- */
		if ( $(event.target).hasClass("btn-x") ) {
			const newCalcNumber = $(".calc-number").text().slice(0, -1);
			$(".calc-number").text(newCalcNumber);
		};

/* ���� ������ �� % ------------------------------------------------------------------------------ */
		if ( $(event.target).hasClass("btn-%") ) {
			if (operand1 === "") {
				operand1 = $(".calc-number").text().slice(0); 
				operand1 = operand1 / 100;
				$(".itog-number").text(operand1);
			} else {
				const unnecessary2 = operand1.length + 1;
				operand2 = $(".calc-number").text().slice(unnecessary2);
				const procent = (Number(operand1) / 100) * Number(operand2);
				console.log(procent);

				if (operator1 === "+") {
					result = Number(operand1) + Number(procent);
				} else if (operator1 === "-") {
					result = Number(operand1) - Number(procent);
				} else if (operator1 === "*") {
					result = (Number(operand1) / 100) * Number(operand2);
				} else if (operator1 === "/") {
					result = Number(operand1) / (Number(operand2) / 100);
				}
				$(".itog-number").text(result);
			}
		};
	});

});