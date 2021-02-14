var constant = 495;  
var number = 259;  

function Numero(num, type) {                                        
	var digits = (""+num).split("");
	if(type == "normal"){
		digits.sort(function(a, b){return a-b});
	}
	else if(type == "inverse"){
		digits.sort(function(a, b){return b-a});
	}
	return digits.join('');
}

function Kaprekar(num) {                                               
	
	while(num !== constant ){
		var min = Numero(num, "normal");                          
		var max = Numero(num, "inverse");                         
		
		console.log(max, "-", min, "=", max-min); 
		num = max-min;
	}
	
}
console.log("Number:", number); 
Kaprekar(number);                                                     
