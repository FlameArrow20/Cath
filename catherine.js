function linked(){


    alert ("Successfully linked!");
}


function accept(){

    let accept_value = document.getElementById("yes");
    let nobtn = document.getElementById("no");

    accept_value.value = "1";

    console.log(accept_value.value);
    
    document.getElementById("image").style.backgroundImage = "url(lovecat.gif)"
    document.getElementById("myInvitation").innerHTML = "I love you!!!"

    if (accept_value.value === "1"){


        nobtn.remove();
        accept_value.remove();
    }

    


}


function decline(){

    let sample_decline = document.getElementById("no");

    let sample_decline_value = sample_decline.value;

    //console.log(sample_decline_value);


   
    
    if (sample_decline_value === "1"){

       
        
        let value1 = document.getElementById("no").value = "2";
        console.log(value1);

        
        document.getElementById("yes").innerText = "Pretty please!";
        document.getElementById("yes").style.fontSize = "50px";
        document.getElementById("yes").style.width = "300px";

        document.getElementById("no").innerText = "I said no!";
    }

    else if (document.getElementById("no").value === "2"){

       
        

        let value2 = document.getElementById("no").value = "3";
        console.log(value2);

        document.getElementById("yes").style.fontSize = "75px";
        document.getElementById("yes").style.width = "500px";
        document.getElementById("yes").innerText = "Pretty Pretty please!"
        
        document.getElementById("no").innerText = "No! no! no!";

    }

    else if (document.getElementById("no").value === "3"){


        let value3 = document.getElementById("no").value = "4";
        console.log(value3);

        document.getElementById("yes").style.fontSize = "100px";
        document.getElementById("yes").style.width = "700px";
        document.getElementById("yes").innerText = "I'm begging you, please!"

        document.getElementById("no").innerText = "N-O";



    }

    else if (document.getElementById("no").value === "4"){


        let value4 = document.getElementById("no").value = "5";
        console.log(value4);

        document.getElementById("yes").style.fontSize = "120px";
        document.getElementById("yes").style.width = "700px";
        document.getElementById("yes").innerText = "If you don't press this, I'll cut your pp off!!!"

        alert ("This is the last time I will ask!!!")

        

        document.getElementById("no").innerText = "The answer is still no!";

        



    }

    else if (document.getElementById("no").value === "5"){


        //document.getElementById("no").textContent = "Look at the invitation message >:(";

        document.getElementById("image").style.backgroundImage = "url(angrycat.gif)"
        document.getElementById("myInvitation").textContent = "Time to cut your pp, then";

        document.getElementById("yes").remove();
        document.getElementById("no").remove();


        
        

       /* document.getElementById("yes").style.fontSize = "100px";
        document.getElementById("yes").style.width = "700px";
        document.getElementById("yes").innerText = "I'm begging you, please!"

        document.getElementById("no").innerText = "N-O"; */



    }


    

    
}