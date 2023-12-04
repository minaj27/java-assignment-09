function handleSave(){
    var fname = document.getElementById("fn").value; 
    var lname = document.getElementById("ln").value;
    document.getElementById("d3").innerHTML="Ms." +fname +lname;
}
function handleCancel(){
    document.getElementById("fn").value="";
    document.getElementById("ln").value="";
}