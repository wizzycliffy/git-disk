/***
warri boys in action..lol
***/
	 function downloadLink(){
	 window.location="pinepower fly.png";
	 }  
	
	 function ask(){
	 do { 
	 alert("You must enter a name to proceed, click OK to enter your name");
	 var name = prompt("Please enter your name");
	 }
	 while (name === null ||
	     name === " " || 
	     name === "" );
	if (name === "Franklin Mba"){
	    if (confirm("Our dear son " + name + " We're your Original VILLAGERS, we have finally catch up with you online today. hahaha! If you're ready to settle us now click OK") === true) {  
	  var amount = prompt("Oya, Enter the amount 20million USD here. Remember, we're using an updated Shongo version so we only accept bitcoin or USD.");
	 checkAmount(amount);
}else{
	    alert("We will not free your matter");
	    location.reload();
	    }
}else {
	 alert("Oga, we don't know you. Who you help? ");
	 location.reload();
	 	 }
}
function checkAmount(amount){
	 if (amount == 20){
	    alert("Yeah! that's a good son of Nnewi! We have  freed your matter, you can now download your flier");
	     downloadLink();
    }else { alert("invalid amount, only 20million USD can settle us!"); 
	    location.reload(); 
	    }
	 } 
