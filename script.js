function getElement(id){
    const value = document.getElementById(id);
    return value ;
}


// calling button function
getElement("card-container").addEventListener("click", function(e){
    const cardBtn = e.target;
    const everyCallCharge = 20;
    const currentPoints = getElement("point").innerText;
    const currentPointsNm = Number(currentPoints);

    if(cardBtn.className.includes("call-btn") && currentPointsNm < everyCallCharge) {
        alert(
          "You don't have enough coins. You need at least 20 coins to make a call."
        );
    }
        
    if(cardBtn.className.includes("call-btn") && currentPointsNm >= everyCallCharge){
        const serviceTitle = cardBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = cardBtn.parentNode.parentNode.children[2].children[0].innerText;

        getElement("point").innerText = currentPointsNm - everyCallCharge;

        const date = new Date().toLocaleTimeString();
        const parentDiv = getElement("parent");
        const childDiv = document.createElement("div");
        childDiv.innerHTML = `
            <div class="bg-[#FAFAFA] flex justify-between items-center p-4 rounded-[8px] mb-2">
                <div class="">
                    <h2 class="font-semibold text-[18px]">${serviceTitle}</h2>
                    <p class="text-[#5C5C5C] text-xl mt-1">${serviceNumber}</p>
                </div>
                <div class="text-[18px]">${date}</div>
            </div>
        `;
        parentDiv.appendChild(childDiv);
        
        const alerts =   "Calling" + " " + serviceTitle + " " + serviceNumber + "...";
        alert(alerts)
    }  
});



// hurt counting function
getElement("card-container").addEventListener("click", function(e){
    const hurtBtn = e.target;
    let hurtNm = Number(getElement("hurtsNm").innerText);
    if(hurtBtn.className.includes("hurt")){
        getElement("hurtsNm").innerText = hurtNm + 1;
    }
})

// clear button function
getElement("clear-btn").addEventListener("click", function(){
    getElement("parent").innerHTML = " "
})


