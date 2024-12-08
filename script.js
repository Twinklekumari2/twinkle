document.addEventListener("DOMContentLoaded",function(){

    const lowerToUpper = document.getElementById("lowerToUpper");
    const cancelButton = document.getElementById("cancel");
    const convertorButton = document.getElementById("convertor");
    const spaceButton = document.getElementById("space");
    const enterButton = document.getElementById("enter");
    const alphabet = document.getElementsByClassName("alphabet");
    const alphabetButtons = document.querySelectorAll(".alphabet");
    const number = document.getElementsByClassName("number");
    const messageBar = document.querySelector(".message");
    const sendButton = document.querySelector(".enter");
    const msgSection = document.getElementById("message-section");
    const clrsrc = document.getElementById("clrsrc");

    const alphabets = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','.',','];

    const signs = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','\\','|',':',';','<',',','>','\"','\'','.',','];

    let isSigns = false;

    convertorButton.addEventListener('click',function(){
        alphabetButtons.forEach((button,index) => {
            button.textContent = isSigns ? alphabets[index] : signs[index] ;
        });
        isSigns = !isSigns;
    });



    let input = "";
    // if(input.length >= 10){
    //     messageBar.innerHTML = "<br>";
    // }
    Array.from(alphabet).forEach((button) => {

        button.addEventListener('click',function(event){
            if(input.length >= 25){
                messageBar.innerHTML += "<br>";
                input = "";
            }
            input += event.target.textContent;
            messageBar.textContent = input;   
        });
    });
    Array.from(number).forEach((button) => {
        button.addEventListener('click',function(event){
            input += event.target.textContent;
            messageBar.textContent = input;   
            if(input.length >= 25){
                messageBar.innerHTML += "<br>";
            }
        });

    })

    function sendButtonn(event){
        
        msgSection.textContent += messageBar.textContent + " ";
    }
    sendButton.addEventListener('click' , sendButtonn)
    
    spaceButton.addEventListener('click' , function(){
        input += " ";
        messageBar.textContent = input;
    })
    
    cancelButton.addEventListener('click' , function(){
        if(input.length > 0){
            input = input.slice(0,-1);
            messageBar.textContent = input;
        }
    })
    
    enterButton.addEventListener('click' , function(){
        messageBar.innerHTML += "<br>"; 
    })
    
    clrsrc.addEventListener('click' , function(){
           messageBar.textContent = "Successfully sent";
           setTimeout( () => {
            messageBar.textContent = "";
           },1000);
        //    messageBar.textContent = "";
        input = "";

    })

    lowerToUpper.addEventListener('click',function(){
        Array.from(alphabet).forEach(function(button){
            button.style.textTransform = "uppercase";
            button.style.padding = " 4px 5px"
            lowerToUpper.style.backgroundColor = "rgb(16, 16, 155)"
        });

        Array.from(alphabet).forEach(function(element){
            element.textContent = element.textContent.toUpperCase();

        });
    });
lowerToUpper.addEventListener('dblclick',function() {
    Array.from(alphabet).forEach(function(button){
        button.style.textTransform = "lowercase";
        button.style.padding = " 5px 7px";
        lowerToUpper.style.backgroundColor = "rgb(141, 141, 170)";
    });

    Array.from(alphabet).forEach(function(element){
        element.textContent = element.textContent.toLowerCase();

    });
})

    






    


})