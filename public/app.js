var btn_en = document.getElementById("btn_en")
var btn_de = document.getElementById("btn_de")

var input  = document.getElementById("text");

function encrypt(text,k){
    text = text.toUpperCase();
    let result = '';
    
      for (let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        let newAscii;
        if(Number(k)+Number(ascii)>90)
            newAscii = (Number(k)+Number(ascii) - 26);
        else
            newAscii = Number(k)+Number(ascii);
        result += String.fromCharCode(newAscii);
    }
    
    return result;

}

function decrypt(text,k){
    text = text.toUpperCase();
    let result = '';
    
      for (let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        let newAscii;
        if(-Number(k)+Number(ascii)<65)
            newAscii = (-Number(k)+Number(ascii) + 26);
        else
            newAscii = -Number(k)+Number(ascii);
        result += String.fromCharCode(newAscii);
    }
    
    return result    
}

btn_en.addEventListener("click",(event)=>{
    event.preventDefault();

    let display =  document.getElementById("display");
    display.innerHTML = "";
    let text = input.value;
    let k = document.getElementById("key").value;

    let result = document.createElement("div");

    result.innerHTML = "Kết quả sau khi mã hóa là: ";
    result.innerHTML += encrypt(text,k);

    display.appendChild(result);
})

btn_de.addEventListener("click",(event)=>{
    event.preventDefault();

    let display =  document.getElementById("display");
    display.innerHTML = "";
    let text = input.value;
    let k = document.getElementById("key").value;

    let result = document.createElement("div");

    result.innerHTML = "Kết quả sau khi giải mã là: ";
    result.innerHTML += decrypt(text,k);

    display.appendChild(result);
})