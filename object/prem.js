var obj = {hello: "prem"};
undefined
obj;
Object {hello: "prem"}
obj.hello;
"prem"
obj = {car:"modal",width:"250mm"};
Object {car: "modal", width: "250mm"}
obj.width;
"250mm"
obj.width += 50;
"250mm50"
obj.width = "";
""
obj.width += 50;
"50"
obj.width += 100;
"50100"
obj.width *= 2;
100200
obj.width /= 2;
50100
obj.width += "100";
"50100100"
obj.width = 0;
0
obj.width += 110; 
110
obj.width += 110; 
220
obj.width /= 2;
110
obj.width *=2;
220
obj.width -=20;
200