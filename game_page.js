var username = localStorage.getItem("Player Name")

function send(){
var n1 = document.getElementById("inputN1").value
var n2 = document.getElementById("inputN2").value 
answer = parseInt(n1) * parseInt(n2)
question_number = "<h4>" + n1 + "X" + n2 + "</h4>"
input_box = "<br>Answer: <input type = 'text' id = 'inputChkBox'>"
checkSumButton = "<br><br><button class = 'btn btn-info' onclick ='check()'>Check</button>"
row = question_number + input_box + checkSumButton
document.getElementById("output").innerHTML = row
document.getElementById("inputN1").value = ""
document.getElementById("inputN2").value = ""
}