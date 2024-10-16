$(document).ready(function(){

/* ������� ���������� ���������� ----------------------------------------------------------------- */

		let operand1 = "";
		let operand2 = "";
		let operator1 = "";
		let result = "";

/* ����������� ������� �� ������� �� ������ ------------------------------------------------------ */

	function startFunClick (event) {
		if (event.type == "click") {

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
		};
	};

/* ��������� ������� ����� ��� ����� �� ������� ------------------------------------------------- */

	$('.keyboard').click(startFunClick);

















/* ������� ������� �� ������� �� ���������� ----------------------------------------------------- */

	function startFunKey (event) {
		if (event.type == "keydown") {
			console.log(event.key)

/* ���� ������ �� ����� ��� ��������, �� ������� �� �������� �� ����� ---------------------------- */
			if ( event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" ||event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
				$(".calc-number").append(event.key);
			};

/* ���� ������ �� "." ��� "," �� ������� ����� */
			if (  event.key === "." || event.key === ",") {
				console.log(event.key);
				$(".calc-number").append(".");
			};

/* ���� ������ �� "x", �� ������ ����� ��� ���������� �������� ----------------------------------- */

			if ( event.key === "Backspace" ) {
				const newCalcNumber = $(".calc-number").text().slice(0, -1);
				$(".calc-number").text(newCalcNumber);
			}

/* ���� ������ �� �����, �� ������� ��� ������ �� ������ � ��������� ���������� ���������� ------ */

			if ( event.key === "Delete" ) {
				$(".calc-number").text("");
				$(".itog-number").text("0");
				operand1 = "";
				operand2 = "";
				operator1 = "";
				result = "";
			}

/* ���� ������ �� ��������, �� ��������� ������ ������� � �������� ������� �������� -------------- */

			if ( event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" ) {
				operator1 = event.key;
				operand1 = $(".calc-number").text().slice(0, -1);
			}

/* ���� ������ �� = ��� ����� ... ---------------------------------------------------------------- */

			if ( event.key === "=" || event.key === "Enter" ) {
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
			}

/* ���� ������ �� % ... -------------------------------------------------------------------------- */

			if ( event.key === "%" ) {
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
			}
		};
	};

	$('body').keydown(startFunKey);

});