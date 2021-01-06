
console.log("hallo");

function openMenu(){
    document.getElementById("dropdownMenu").classList.toggle("laatMenuZien");

}

document.getElementById("menu").addEventListener("click",openMenu);


function openDetails(){
    document.getElementById("details").classList.toggle("laatDetailsZien");

}

document.getElementById("productDetails").addEventListener("click",openDetails);
