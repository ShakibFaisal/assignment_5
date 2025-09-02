

function domID(id) {
  return document.getElementById(id);
}
function value(e) {
  return parseInt(e.innerText);
}
function callHistory(title,num){
    const history=domID("history");
   const div=document.createElement("div");
   div.innerHTML = `
     <div class="flex justify-between items-center rounded-2xl p-4 bg-[#fafafa]">
             <div class="">
                <h3 class="font-['Hind Madurai'] text-2xl font-bold mt-4">${title}</h3>
                <h3 class="font-['Roboto'] text-2xl  mt-5 number">${num}</h3>
             </div>
             <h3 class="text-[#111111] font-['Hind Madurai'] text-[1.1rem] ">
                ${new Date().toLocaleTimeString()}
             </h3>
        </div>
   `
   history.appendChild(div);

    history.appendChild(div);
}
// heart part js
document.querySelectorAll(".heart").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const heart = domID("heart_count");
    let heartCount = value(heart);
    heart.innerText = heartCount + 1;
  });
});
// call part js
document.querySelectorAll(".call").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const coindiv = domID("coin");
    let coin = value(coindiv);
    const parent = btn.closest(".card");
    const subTile = parent.querySelector(".sub_title").innerText;
    const title=parent.querySelector(".title").innerText;
    const number = parent.querySelector(".number").innerText;
    if (coin >= 20) {
      alert("Calling " + subTile + " " + number + "...");
      coin -= 20;
      coindiv.innerText = coin;
      callHistory(title,number);
      
    } else {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
});
// Clear button work 
document.getElementById("clear").addEventListener("click",function (event){
     event.preventDefault();
     const history=document.getElementById("history");
     history.innerHTML="";
})