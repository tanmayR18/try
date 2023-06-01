let num = parseInt(document.querySelector(".number").textContent);
function plus(){
    num += 1;
    document.querySelector(".number").textContent = num;
}

function minus(){
    num -= 1;
    document.querySelector(".number").textContent = num;
}