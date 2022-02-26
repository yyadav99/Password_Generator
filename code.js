//manipulating slider values
var slider = document.getElementById("ranger_original_value");
var output = document.getElementById("ranger_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let upper=document.getElementById("uppercaseche");
let lower=document.getElementById("lowercase");
let num=document.getElementById("numbersc");
let sym=document.getElementById("symbols");
//copy to clipboard
let btn_cpy=document.getElementById("copy-btn");
btn_cpy.addEventListener('click',()=>{
    const password1=document.getElementById("generated_password").innerText;
    const textarea = document.createElement("textarea");
	if (!password1 ||password1 == "CLICK GENERATE"){
		return;
	}
	textarea.value = password1;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
    textarea.remove();
    alert("Text Copied!")
})
let btn_gen=document.getElementById("generate");
let generated_password=document.getElementById("generated_password");
//generating random variables
function secureMathRandom() {
	return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function countTrue(arr) {
	return arr.filter(w => w === true).length;
}
//check everytime checkbox is clicked
let aarray=[]
let barray=[];
function checklength(){
    let upperon=upper.checked;
    let loweron=lower.checked;  
    let numon=num.checked;
    let symon=sym.checked;
    let sum=upperon+loweron+numon+symon;
    if(sum==0){
        let password_area=document.getElementById("generated_password")
        password_area.innerHTML="Must select atleat one";
        alert("Select atleast one to continue");
    }
    barray=[upperon,loweron,numon,symon];
}
//button to generate password
btn_gen.addEventListener('click',()=>{
    checklength();
    let password_length=document.getElementById("ranger_original_value").value;
    var password="";
    for(let i =0;i<password_length;i++){
        if(barray[0]!=false)
            password+=getRandomUpper();
        if(barray[1]!=false)
            password+=getRandomLower();
        if(barray[2]!=false)
            password+=getRandomNumber();
        if(barray[3]!=false)
            password+=getRandomSymbol();            
    }
    password=password.slice(0,password_length)
    generated_password.innerHTML=password;
})