const togglebtn=document.getElementById("close-icon")
const creator=document.getElementById("creator")
const Abuot=document.getElementById("About")
const Contact=document.getElementById("Contact")
const closelistElement=document.querySelector(".close-list")
const vidoes=document.querySelectorAll(".videos")
console.log();

togglebtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-xmark")) {
    e.target.className = "fa-solid fa-bars";
    closelistElement.style.display = "none";
    } else if (e.target.classList.contains("fa-bars")) {
    e.target.className = "fa-solid fa-xmark";
    closelistElement.style.display = "flex";
    }
    });

const lists=[...closelistElement.children[0].children]
console.log(lists);
lists.forEach((element) => {
element.addEventListener("click",function(){
console.dir(element.innerText);
vidoes.forEach((valu)=>{
    
if(element.innerText==="Creator"){
    creator.style.display="none";
    Abuot.style.display="none";
    Contact.style.display="none";
creator.style.display="block";
closelistElement.style.display="none";
valu.style.display="none";

}

else if(element.innerText==="Abuot"){
    creator.style.display="none";
    Abuot.style.display="none";
    Contact.style.display="none";
Abuot.style.display="block";
closelistElement.style.display="none";

valu.style.display="none";


}

else if(element.innerText==="Contact"){
    creator.style.display="none";
    Abuot.style.display="none";
    Contact.style.display="none";
    Contact.style.display="block";
closelistElement.style.display="none";
valu.style.display="none";


}
})

})

});


lists.forEach((item)=>{
    console.log(item);
})
creator.addEventListener("click",()=>{
        closenavselection(creator)
        })

Contact.addEventListener("click",()=>{
        closenavselection(Contact)
        })

Abuot.addEventListener("click",()=>{
        closenavselection(Abuot)
        })

        function closenavselection(item){

            if(item.style.display=="block"){
                
                item.style.display="none";
                closelistElement.style.display="flex";
                vidoes.forEach((valu)=>{
                    valu.style.display="block";

                })
            }
        }


    document.addEventListener("click",async(e)=>{
    console.log(closelistElement.style.display==="flex");
    console.log(e.target.className);
    if(e.target.className!="close-list" && e.target.className!="fa-solid fa-xmark" && e.target.className!="fa-solid fa-bars"&& e.target.className!="alist"){
        if(closelistElement.style.display==="flex"){
            closelistElement.style.display="none";
}
    }
})



