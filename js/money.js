function calculate() {
		// look up in input and output elements in the document
	var amount = document.getElementById("amount"); // ex: type in 5000 and when u leave box, it will assign the input information to var amount 
	var apr = document.getElementById("apr");
	var years = document.getElementById("years");
	var payment = document.getElementById("payment");
	var total = document.getElementById("total");
	var totalinterest = document.getElementById("totalinterest");

	// console.log(amount);


	// get the user's input from the input elements, Assume that is
	// is all valid 
	// Convert interest from a percentage to a decimal, and convert from
	//a annual rate to a monthly rate. Convert payment period in years to
	//  the number of monthly payments 

	// .value getting the value 
	var principle = parseFloat(amount.value); //parseFloat("1.2abc")   // Returns 1.2.
	var interest = parseFloat(apr.value) / 100 /12; //getting the 6.6% to 0.066 then % 12 
	// console.log(interest);
	var payments = parseFloat(years.value) * 12; //5 years would be 60 months 
	// console.log(payments);

	// now we need to copmute the monthly payment figure 
	var x = Math.pow(1 + interest, payments); // Math.pow() computes powers , 1 + 0.66, ^ 60
	var monthly = (principle*x*interest)/(x-1); // how much pay a month - 10000*432*.0055 / 431
	// 

	//console.log(monthly);

	//  if the result is a finite, the user's input was good and we have results to display 

	 if (isFinite(monthly))
	 {
		// fill in the ouput fields, rounding to 2 decimal places 
		payment.innerHTML = monthly.toFixed(2);	//rounds to 2 decimal places 
		total.innerHTML = (monthly * payments).toFixed(2); // 190 a month for 60 months 
		// console.log(total.innerHTML);
		totalinterest.innerHTML = ((monthly * payments)-principle).toFixed(2); // total.innerHTML also works 
		// console.log(totalinterest.innerHTML);
	 }
	 else {
	 	//result was Not a number or infifite, which means the input was not valide (incnplete)
	 	// console.log("heyyyyyyyyyyyyy"); 
	 	payment.innerHTML = "";
	 	total.innerHTML = "";
	 	totalinterest = "";
	 	 
	 }

};