$(document).ready(function(){

/* Создаем глобальные переменные ----------------------------------------------------------------- */

		let operand1 = "";
		let operand2 = "";
		let operator1 = "";
		let result = "";

/* Прописываем функцию по нажатию на кнопку ------------------------------------------------------ */

	function startFunClick (event) {
		if (event.type == "click") {

/* Если нажали на цифру или оператор, то выводим их значение на экран ---------------------------- */
			if ( $(event.target).hasClass("figure") || $(event.target).hasClass("operator") || $(event.target).hasClass("comma") ) {
				$(".calc-number").append(event.target.value);
			};

/* Если нажали на оператор, то сохраняем значение оператора и первого операнда ------------------- */
			if ( $(event.target).hasClass("operator") ) {
				operator1 = event.target.value;
				operand1 = $(".calc-number").text().slice(0, -1);
			}; 

/* Если нажали на равно, то ---------------------------------------------------------------------- */
			if (event.target.value === "=") {
/* Сохраняем значение вторового операнда --------------------------------------------------------- */
				const unnecessary = operand1.length + 1;
				operand2 = $(".calc-number").text().slice(unnecessary);
/* В зависимости от оператора производим и сохраняем вычисление ---------------------------------- */
				if (operator1 === "+") {
					result = Number(operand1) + Number(operand2);
				} else if (operator1 === "-") {
					result = Number(operand1) - Number(operand2);
				} else if (operator1 === "*") {
					result = Number(operand1) * Number(operand2);
				} else if (operator1 === "/") {
					result = Number(operand1) / Number(operand2);
				}
/* Выводим результат вычислений в итог ----------------------------------------------------------- */
				$(".itog-number").text(result);
				operand1 = "";
				operand2 = "";
				operator1 = "";
				result = "";
			};

/* Если нажали на С, то удаляем все данные из итога и вычислительного блока ---------------------- */
			if ( $(event.target).hasClass("btn-C") ) {
				$(".calc-number").text("");
				$(".itog-number").text("0");
				operand1 = "";
				operand2 = "";
				operator1 = "";
				result = "";
			};

/* Если нажали на Х, то слайсом вырезаем последний элемент --------------------------------------- */
			if ( $(event.target).hasClass("btn-x") ) {
				const newCalcNumber = $(".calc-number").text().slice(0, -1);
				$(".calc-number").text(newCalcNumber);
			};

/* Если нажали на % ------------------------------------------------------------------------------ */
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

/* Добавляем функцию клика при клике на кейборд ------------------------------------------------- */

	$('.keyboard').click(startFunClick);

















/* Создаем функцию по нажатию на клавиатуру ----------------------------------------------------- */

	function startFunKey (event) {
		if (event.type == "keydown") {
			console.log(event.key)

/* Если нажали на цифру или оператор, то выводим их значение на экран ---------------------------- */
			if ( event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" ||event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
				$(".calc-number").append(event.key);
			};

/* Если нажали на "." или "," то выводим точку */
			if (  event.key === "." || event.key === ",") {
				console.log(event.key);
				$(".calc-number").append(".");
			};

/* Если нажали на "x", то делаем слайс без последнего элемента ----------------------------------- */

			if ( event.key === "Backspace" ) {
				const newCalcNumber = $(".calc-number").text().slice(0, -1);
				$(".calc-number").text(newCalcNumber);
			}

/* Если нажали на делит, то стираем все данные из вывода и обновляем глобальные переменные ------ */

			if ( event.key === "Delete" ) {
				$(".calc-number").text("");
				$(".itog-number").text("0");
				operand1 = "";
				operand2 = "";
				operator1 = "";
				result = "";
			}

/* Если нажали на оператор, то сохраняем первый операнд и значение первого операнда -------------- */

			if ( event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" ) {
				operator1 = event.key;
				operand1 = $(".calc-number").text().slice(0, -1);
			}

/* Если нажали на = или ентер ... ---------------------------------------------------------------- */

			if ( event.key === "=" || event.key === "Enter" ) {
	/* Сохраняем значение вторового операнда --------------------------------------------------------- */
				const unnecessary = operand1.length + 1;
				operand2 = $(".calc-number").text().slice(unnecessary);
	/* В зависимости от оператора производим и сохраняем вычисление ---------------------------------- */
				if (operator1 === "+") {
					result = Number(operand1) + Number(operand2);
				} else if (operator1 === "-") {
					result = Number(operand1) - Number(operand2);
				} else if (operator1 === "*") {
					result = Number(operand1) * Number(operand2);
				} else if (operator1 === "/") {
					result = Number(operand1) / Number(operand2);
				}
	/* Выводим результат вычислений в итог ----------------------------------------------------------- */
				$(".itog-number").text(result);
				operand1 = "";
				operand2 = "";
				operator1 = "";
				result = "";
			}

/* Если нажали на % ... -------------------------------------------------------------------------- */

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