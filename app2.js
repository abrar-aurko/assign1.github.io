

var result;
const val=document.getElementById("num");
const opt=document.getElementById("selection");
const go=document.getElementById("go");
const output=document.getElementById("output");

go.addEventListener("click", conversion);


function conversion(e){
	let out=parseInt(val.value);
	console.log(opt.value);
	if(opt.value==="lb to kg"){
		result=out*0.45359237;
	}
	if(opt.value==="kg to lb"){
		result=out*2.20462262;
	}
	console.log(result);
	output.innerHTML=result;

	}



