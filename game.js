Name1 = localStorage.getItem("Inp1");
Name2 = localStorage.getItem("Inp2");

console.log(Name1);


document.getElementById("player1name").innerHTML = Name1;
document.getElementById("player2name").innerHTML = Name2;

Player1Score = 0;
Player2Score = 0;

Questurn = "Player1";
Ansturn = "Player2";

document.getElementById("player1score").innerHTML = Player1Score;
document.getElementById("player2score").innerHTML = Player2Score;

document.getElementById("Ques").innerHTML = Name1;
document.getElementById("Ans").innerHTML = Name2;

function send() {
	number1 = document.getElementById("number1").value;

	number2 = document.getElementById("number2").value;

	actual_answer = parseInt(number1)*parseInt(number2);

	console.log(actual_answer);

    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";

    input_box = "<br>Answer : <input type='number' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";

    row =  question_number + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;

	document.getElementById("number1").value = "";
    
	document.getElementById("number2").value = "";
}

