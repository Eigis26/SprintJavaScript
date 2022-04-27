let elements = [];
window.onload = function() {
    if(JSON.parse(localStorage.getItem("shoppingList")) != null){
        elements = JSON.parse(localStorage.getItem("shoppingList"));
        display();
    }
}
function addElement() {
    if(document.getElementById("input").value.trim() != ""){
        elements.push(document.getElementById("input").value.trim());
        document.getElementById("input").value = "";
        if(localStorage.getItem("shoppingList") == null){
            localStorage.setItem("shoppingList", JSON.stringify(elements));
        }else {
            localStorage.setItem("shoppingList", JSON.stringify(elements));
        }
        display();
    }
}
function display(){
    document.getElementById("list").innerHTML = "";
    for (i = 0; i < elements.length; i++)
    document.getElementById("list").innerHTML += "<div class='element'>"+elements[i]+"<input type='button' id='delete' value='delete' onclick='del("+i+")'><input type='button' id='update' value='update' onclick='upd("+i+")'><input type='button' id='done' value='done' onclick='strike("+i+")'></div>";
} 
function del(index){
    elements.splice(index, 1);
    if(localStorage.getItem("shoppingList") == null){
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }else {
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }
    display();
} 
function upd(index){
    updateText = prompt("Let's update it!");
    if (updateText.length >= 20) {
        alert("Only 20 characters");
        updateText = elements[index];
    }
    if (updateText != ""){
        elements[index] = updateText;
    } 
    if(localStorage.getItem("shoppingList") == null){
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }else {
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }
    display();
} 
function strike(index){
    if(elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>","");
    elements[index] = elements[index].replace("</strike>","");
    }else elements[index] = "<strike>"+elements[index]+"</strike>";
    if(localStorage.getItem("shoppingList") == null){
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }else {
        localStorage.setItem("shoppingList", JSON.stringify(elements));
    }
    display();
}