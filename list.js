let elements = [];
function addElement() {
    if(document.getElementById("input").value.trim() != ""){
        elements.push(document.getElementById("input").value.trim());
        document.getElementById("input").value = "";
        display();
    }
}
function display(){
    document.getElementById("list").innerHTML = "";
    for (i = 0; i < elements.length; i++)
    document.getElementById("list").innerHTML += "<div class='element'>"+elements[i]+"<input type='button' id='delete' value='delete' onclick='del("+i+")'><input type='button' id='update' value='update' onclick='upd("+i+")'></div>";
} 
function del(index){
    elements.splice(index, 1);
    display();
} 
function upd(index){
    updateText = prompt("Let's update it!");
    if (updateText != ""){
        elements[index] = updateText;
    } 
    display();
} 
