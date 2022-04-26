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
    document.getElementById("list").innerHTML += "<div class='element'>"+elements[i]+"</div>";
} 
