// All code is in an anonymous function to avoid polluting
// the global scope with function names.
(function() {
	"use strict";

	//The internal value, i.e. "memory" of the calculator
	var internalvalue="";
	//The displayed value of the calculator
	var displayedvalue="";

    /**
    Handles when an operator or number button is pressed

    @param value is the value of the button, either a number or an operator
    */
    function onButtonPress(value) {
    	
    	//If an operator is pressed
        if (value=="+" || value=="-" || value=="*" || value=="/") {

        	//Check if the last pressed button was an operator,
        	//If so then replae that with the most recent operator
        	if(internalvalue[internalvalue.length - 1] == "+"
        		|| internalvalue[internalvalue.length - 1] == "-"
        		|| internalvalue[internalvalue.length - 1] == "*"
        		|| internalvalue[internalvalue.length - 1] == "/") {
        		internalvalue = internalvalue.substr(0, internalvalue.length - 1) + value;
        	}
        	//Otherwise, proceed with evaluation
        	else{
        		//Evaluate the result
        		var result = eval(internalvalue);
        		//Set the internal value to the result so it's not a huge chain of operations
        		internalvalue = result;
        		//Append the operator to the internal value for the next operation
        		internalvalue+=value;
        		//Display the value
        		displayValue(result);
        		//Reset the display value to empty so the next number entry displays
        		displayedvalue="";
        	}        	
        }
        //If the display is empty or zero don't append zeroes to the internal value
        else if ((value == "0" && displayedvalue == "") || (value == "0" && displayedvalue == "0")) {
        	displayedvalue = "0";
        	displayValue(displayedvalue);
        }
        //If a number is pressed
        else {
    		//Append to the internal value
    		internalvalue+=value;
    		//Append to the display
    		if(displayedvalue == "0") {
    			displayedvalue = value;
    		}
    		else{
    			displayedvalue+=value;
    		}
    		//Display to the output
    		displayValue(displayedvalue);
        }
    	
    }

    /**
    Displays the value to the calculator output

    @param value is the value to be displayed
    */
    function displayValue(value) {
    	var output = document.getElementById("output");
    	output.value= value;
    }

    /**
    Clears the calculator screen and memory
    Sets both the output and internal value to an empty string
    */
    function clear() {
    	var output = document.getElementById("output");
    	output.value="";
    	internalvalue="";
    }

	function init() {
		var btn0 = document.getElementById("0");
		var btn1 = document.getElementById("1");
		var btn2 = document.getElementById("2");
		var btn3 = document.getElementById("3");
		var btn4 = document.getElementById("4");
		var btn5 = document.getElementById("5");
		var btn6 = document.getElementById("6");
		var btn7 = document.getElementById("7");
		var btn8 = document.getElementById("8");
		var btn9 = document.getElementById("9");
		var btnadd = document.getElementById("add");
		var btnsub = document.getElementById("sub");
		var btnmul = document.getElementById("mul");
		var btndiv = document.getElementById("div");
		var btndec = document.getElementById("dec");
		var btnclr = document.getElementById("clr");

		btn0.addEventListener("click", function() {
			onButtonPress(btn0.value)
		});
		btn1.addEventListener("click", function() {
			onButtonPress(btn1.value)
		});
		btn2.addEventListener("click", function() {
			onButtonPress(btn2.value)
		});
		btn3.addEventListener("click", function() {
			onButtonPress(btn3.value)
		});
		btn4.addEventListener("click", function() {
			onButtonPress(btn4.value)
		});
		btn5.addEventListener("click", function() {
			onButtonPress(btn5.value)
		});
		btn6.addEventListener("click", function() {
			onButtonPress(btn6.value)
		});
		btn7.addEventListener("click", function() {
			onButtonPress(btn7.value)
		});
		btn8.addEventListener("click", function() {
			onButtonPress(btn8.value)
		});
		btn9.addEventListener("click", function() {
			onButtonPress(btn9.value)
		});
		btndec.addEventListener("click", function() {
			onButtonPress(btndec.value)
		});

		btnadd.addEventListener("click", function() {
			onButtonPress(btnadd.value)
		});
		btnsub.addEventListener("click", function() {
			onButtonPress(btnsub.value)
		});
		btnmul.addEventListener("click", function() {
			onButtonPress(btnmul.value)
		});
		btndiv.addEventListener("click", function() {
			onButtonPress(btndiv.value)
		});

		btnclr.addEventListener("click", clear);
	}

	// Delay the setup code until page is fully loaded.
	// This code used from professor Tuck's lecture
 	window.addEventListener('load', init, false);

})();