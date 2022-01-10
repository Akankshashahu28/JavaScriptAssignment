function submit() {
    let amt = document.getElementById("input").value;
    let a;
    if (amt >= 15) {
        a = amt - 15;
        alert("Ashish purchased Grocery and Ice cream and the amount left with him  is " + a);
    }
    else if (amt === 20) {
        alert("Ashish was only able to purchase Grocery with the given amount")
    }
    else if (amt === "") {
        alert("Enter the amount first!");
    }
    else {
        alert("Ashish wasn't able to purchase anything due to insuffient amount");
    }
}

function clear(){
return document.getElementById("input").value=" ";
}
