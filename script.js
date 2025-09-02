function domID(id){
    return document.getElementById(id);
}
function value(e){
    return parseInt(e.innerText);
}
// heart part js
document.querySelectorAll(".heart").forEach(btn =>{
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        const heart = domID("heart_count");
        let heartCount = value(heart);
        heart.innerText = heartCount + 1;
    });
});
// call part js
document.querySelectorAll(".call").forEach(btn =>{
      btn.addEventListener("click",function(event){
        event.preventDefault();
        const coindiv=domID("coin");
        let coin=value(coindiv);
        const parent =btn.closest(".card");
        const subTile=parent.querySelector(".sub_title").innerText;
        const number=parent.querySelector(".number").innerText;
        if (coin>=20) {
            alert("Calling "+subTile+" "+number+"...");
            coin-=20;
            coindiv.innerText=coin; 
        }
        else{
             alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        }
       
        
        
    
})})
