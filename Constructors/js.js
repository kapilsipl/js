function PremSingh(){
     this.color = "red";
    this.width = 250;
    this.height = 200;
    
console.log(this);   
   
}
var apple = new PremSingh();
var apple2 = new PremSingh();
var apple3 = new PremSingh();

function ConstrectionAppler(color, width, hright) {
    console.log(this);
    color = "color";
    width = "width";
    height = "height";
    
}
var color = "red"
var prem = new ConstrectionAppler();