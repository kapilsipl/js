//Homogeneous Array 
var arrayH = ["hello","world"];
arrayH;
["hello", "world"];
arrayH [1];
"world"
var arrayH = ["hello","world",55];
arrayH [2];
55
//Heterogeneous Array 
var arrayHe = ["hello",100,true,null,undefined];
arrayHe ;
["hello", 100, true, null, undefined];
arrayHe [2];
true
arrayHe [4];
undefined
arrayHe [3];
null
arrayHe.length;
5
//Multidimensions Array 
var arrayM = ["hello", [100, 5 + 5, "prem",[false,undefined]], true, null, undefined];
arrayM;
["hello", Array[4], true, null, undefined];
arrayM.length;
5
arrayM [2];
true
arrayM [1];
[100, 10, "prem", Array[2]];

arrayM [1].length;
4
arrayM [1] [3].length;
2
arrayM [1] [3] [0];
false