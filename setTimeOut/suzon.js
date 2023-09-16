let button=document.querySelector(".btn");
let message=document.querySelector(".message");

button.addEventListener("click",display);
function display()
{
    message.textContent="Yes,You are a Tabassum";

   // setTimeout(suzon,3000)
    //function suzon()
   // {
     // message.textContent=" ";
    //}

    setTimeout(()=>{
        message.textContent=" ";
    },3000);
}




