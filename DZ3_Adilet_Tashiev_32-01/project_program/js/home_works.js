var  btn1=document.getElementById("btn1");
    btn1.addEventListener('click',verify1);

function verify1()
    {
var email=document.getElementById("email");
var email_value=document.getElementById("email").value;
var email_length=email_value.length;


 var atindex=email_value.indexOf('@');
var dotindex=email_value.indexOf('.');
var mindex=email_value.lastIndexOf('m');




    if(email_length=="")
        {
            document.getElementById("demo").style.display="block";
            document.getElementById("demo").innerHTML="EMAIL ADDRESS IS REQUIRED";
        }
    else
        {
            if(atindex<5||dotindex-atindex!=6||mindex-dotindex!=3)
                {
                    document.getElementById("demo").style.display="block";
            document.getElementById("demo").innerHTML="PLEASE ENTER Valid Email";
                }
            else{
                if(email_value.charCodeAt(atindex+1)!=71&&email_value.charCodeAt(atindex+1)!=103||email_value.charCodeAt(atindex+2)!=109&&email_value.charCodeAt(atindex+2)!=77||email_value.charCodeAt(atindex+3)!=65&&email_value.charCodeAt(atindex+3)!=97||email_value.charCodeAt(atindex+4)!=105&&email_value.charCodeAt(atindex+4)!=73||email_value.charCodeAt(atindex+5)!=76&&email_value.charCodeAt(atindex+5)!=108)
                    {
                         document.getElementById("demo").style.display="block";
            document.getElementById("demo").innerHTML="PLEASE ENTER ONLY GMAIL-ID";
                    }
                else
                    {
                                `document.getElementById("demo").style.display="none";`
                    }
            }
    }
    }



const childBlock =document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveChildBlock = () => {
    if (positionX < 449) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 10)
    } else if (positionX >= 448 && positionY < 448 ) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 10)
    }

}

moveChildBlock()