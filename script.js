function validatecustomername(){	
	var n=document.forms[0]["name"].value;
	if(n==null || n=="") {
		document.getElementById('message').style.visibility="visible";
		document.getElementById('message').innerHTML="O campo nome não deve ficar em branco";
	}
	else if(/^[a-zA-Z]+$/.test(n)) {
		document.getElementById('message').style.visibility="hidden";
	}
	else {
		if(/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(n)) {
			document.getElementById('message').style.visibility="visible";
			document.getElementById('message').innerHTML="Caracteres especiais não são permitidos";
		}
		else {
			document.getElementById('message').style.visibility="visible";
			document.getElementById('message').innerHTML="Números não são permitidos";
		}
	}
}

function validateCity(){	
	var cit=document.forms[0]["city"].value;
	if(cit==null || cit=="") {
		document.getElementById('message4').style.visibility="visible";
		document.getElementById('message4').innerHTML="O campo da cidade não deve ficar em branco";
	}
        else if(/^[a-zA-Z]+$/.test(cit)) {
		document.getElementById('message4').style.visibility="hidden";
	}			
	else {
		if(/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(cit))
		{
			document.getElementById('message4').style.visibility="visible";
			document.getElementById('message4').innerHTML="Caracteres especiais não são permitidos";
		}
		else
		{
			document.getElementById('message4').style.visibility="visible";
			document.getElementById('message4').innerHTML="Números não são permitidos";
		}
		
	}
}

function validateState()
{	
	var s=document.forms[0]["state"].value;
	if(s==null || s=="")
	{
		document.getElementById('message5').style.visibility="visible";
		document.getElementById('message5').innerHTML="O campo estado não pode ser vazio";
	}
	else if(/^[a-zA-Z]+$/.test(s))
	{
		document.getElementById('message5').style.visibility="hidden";
	}
	else
	{
		if(/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(s))
		{
			document.getElementById('message5').style.visibility="visible";
			document.getElementById('message5').innerHTML="Caracteres especiais não são permitidos";
		}
		else
		{
			document.getElementById('message5').style.visibility="visible";
			document.getElementById('message5').innerHTML="Números não são permitidos";
		}
	}
}

function validateTelephone(){
         var tele=document.forms[0]["telephoneno"].value;
         if(tele==null || tele=="")
         {
                document.getElementById('message7').style.visibility="visible";
                document.getElementById('message7').innerHTML="O número do telefone não deve ficar em branco";
         }
        else if(tele!=parseInt(tele))
        {
            if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(tele))
            {
                document.getElementById('message7').style.visibility="visible";
                document.getElementById('message7').innerHTML="Caracteres especiais não são permitidos";
            }
            else
            {
                document.getElementById('message7').style.visibility="visible";
                document.getElementById('message7').innerHTML="Caracteres não são permitidos";
                return false;

            }
        }
       else
        {
                document.getElementById('message7').style.visibility="hidden";
         } 
}

function validatePIN(){ 
    var pin=document.forms[0]["pinno"].value;
    if(pin==null || pin=="")
    {
            document.getElementById('message6').style.visibility="visible";
            document.getElementById('message6').innerHTML="O CEP não deve ficar em branco";
    }
    else if(pin!=parseInt(pin))
    { 
        if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(pin)) {
            document.getElementById('message6').style.visibility="visible";
            document.getElementById('message6').innerHTML="Caracteres especiais não são permitidos";
        }
        else {
            document.getElementById('message6').style.visibility="visible";
            document.getElementById('message6').innerHTML="Caracteres não são permitidos";
            return false;
        }
    }
    else if(pin.length < 6) {
            document.getElementById('message6').style.visibility="visible";
            document.getElementById('message6').innerHTML="O código PIN deve ter 6 dígitos";
    }
    else
    {
            document.getElementById('message6').style.visibility="hidden";
    } 
}

function validateEmail(){
	var email=document.forms[0]["emailid"].value;
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if(email==null || email=="")
	{
		document.getElementById('message9').style.visibility="visible";
		document.getElementById('message9').innerHTML="O campo email não deve ficar em branco";
	}
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
			document.getElementById('message9').style.visibility="visible";
			document.getElementById('message9').innerHTML="Email-ID Não é valido";	
	}
	else
	{
		document.getElementById('message9').style.visibility="hidden";
	}
}

function validatenewCust() {
    var v1=document.getElementById("message").style.visibility;
    var v2=document.getElementById("message4").style.visibility;
    var v3=document.getElementById("message5").style.visibility;
    var v4=document.getElementById("message6").style.visibility;
    var v5=document.getElementById("message7").style.visibility;
    var v6=document.getElementById("message9").style.visibility;
    //var v7=document.getElementById("message23").style.visibility;
    if (v1=="hidden" && v2=="hidden" && v3=="hidden" && v4=="hidden" && v5=="hidden" && v6=="hidden") {
        return true;
    }
    else {
        alert("Please fill all fields");
        return false;
    }
}