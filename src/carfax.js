var database = database.carDataBase
var carData = database.carData;
//console.log(carData);
// your code here
var numbersArray = [1,2,3,4,5] 
toolbelt.loop(numbersArray,function(element){
	//console.log(element);
});
toolbelt.transform(numbersArray,function(num){
	//console.log(num * 5);
});

// Invoking carData on the database object
var priceParser = function(carData){
	//Declaring a new Array to store make and model list from carData
	var newArray = [];

	//Loop through car data and access the key value pairs
	toolbelt.loop(carData,function(carObject,carIndex){
		//Identify the data needed and push to the new array
		newArray.push(carObject.model + " " + carObject.price);

	});
	//Create a model that illustrates what our target `list` data looks like.
    //Create a model that illustrates the expected inputs and outputs of our `priceParser`.
    	//Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
    //Return new array of data aquired
    return newArray;	
}
//Print to see if the desired results are returned
console.log(priceParser(carData));
	//Create a function to retrun the model and year of a car, priceParcer
var yearParser = function(carData){
	//Delare a new array to store model and year data
	var newArray = []
	//Loop through the car database to access the key value pairs
	toolbelt.loop(carData,function(carDataObject,carIndex){
		//Identify the data needed and push to the new array
		newArray.push(carDataObject.year);
	});
	//Return the new array of data aquired
	return newArray;
}
//Print to test if the desired results are returned 
console.log(yearParser(carData));
//Create a function that will find the average age of the car inventory
var averageAgeCalculator = function(carDataObject){
	//We will need to transform through the database and access the year of each car
	var testVar = yearParser(carData)
	var sum = 0
	 	toolbelt.loop(testVar, function(carYear){
		sum += (2016 - carYear)/(testVar.length);
		// sum = sum + (2016 - carYear)/(testVar.length);
	});

	 return sum;
	
}

console.log(averageAgeCalculator(carData));