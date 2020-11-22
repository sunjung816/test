function onuserinput(){
    let textInput = document.getElementById("userInput");
    if(textInput.value =="dog"){
        textInput.style ="color:green";
    }
    else{
        textInput.style ="color:red";
    }
    textInput = document.getElementById("userInput2");
    if(textInput.value =="cat"){
        textInput.style ="color:yellow";
    }
    else{
        textInput.style ="color:blue";
    }
}