var objCar = {
	model: '2016',
	color: 'white',
	brand: 'Mercedes'
	colorVariation: 
	{
		basic: 'White,Red,Silver',
		secondVarient: 'Silver, Black',

	}
}

/*Object creation*/
var newObj = {demoA: "Value A"}
console.log(newObj.demoA);

/*New val add in Obj*/

newObj.newVal = "New value";
console.log(newObj.demoA);

var newObj = {demoA: "Value A", child:{
	childA: "Child A",
	numbersB: 80,
	numbersC: 10,
	numbersD: 20
}}
newObj.demoB = " Chhabra";
newObj.demoA += " Kapil";
newObj.child.numbersB -= 10;
newObj.child.numbersC *= 10;
newObj.child.numbersD %= 7;
