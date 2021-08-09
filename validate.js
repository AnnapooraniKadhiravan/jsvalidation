let userName=document.getElementById("txtUserName");
let orgName=document.getElementById("txtOrgName");
let phNo=document.getElementById("txtPhone");
let email=document.getElementById("txtEmail");
let sub=document.getElementById("txtSub");
let msg=document.getElementById("txtMessage");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
	if(orgName.value.trim()===""){
		onError(orgName,"Organization Name cannot be empty");
	 }else{
		 onSuccess(orgName);
	 }
	 if(phNo.value.trim()===""){
		onError(phNo,"Phone Number cannot be empty");
	 }else{
		 onSuccess(phNo);
	 }

    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //password
    if(sub.value.trim()===""){
        onError(sub,"Subject cannot be empty");
     }else{
         onSuccess(sub);
     }
     if(msg.value.trim()===""){
        onError(msg,"Message cannot be empty");
     }else{
          onSuccess(conPwd);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}