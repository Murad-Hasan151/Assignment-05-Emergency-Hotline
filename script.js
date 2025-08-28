function getElement(id){
    const value = document.getElementById(id);
    return value ;
}

getElement("card-container").addEventListener("click", function(e){
    const cardBtn = e.target;
    
    if(cardBtn.className.includes("call-btn")){
        const serviceTitle = cardBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = cardBtn.parentNode.parentNode.children[2].children[0].innerText;

        const date = new Date().toLocaleTimeString();
        const parentDiv = getElement("parent");
        const childDiv = document.createElement("div");
        childDiv.innerHTML = `
            <div class="bg-[#FAFAFA] flex justify-between items-center p-4 rounded-[8px] mb-2">
                <div class="">
                    <h2 class="font-semibold text-[18px]">Fire Service Number</h2>
                    <p class="text-[#5C5C5C] text-[18px] mt-1">999</p>
                </div>
                <div class="text-[18px]">12:22:00 pm</div>
            </div>
        `;
        parentDiv.appendChild(childDiv);
        
        alert('card added')
    }
});