
/* SWTL JS (Great Distance) */

function greetUser() {
  var firstName = document.getElementById("firstName").value; 
  var midIn = document.getElementById("midIn").value; 
  var lastName = document.getElementById("lastName").value;
  alert("Greetings, " + firstName + " " + midIn + ". " + lastName + ".");

function askNumber() {
	var userNum = prompt("How many years into the future do you want to go, " + firstName + "?");
	for (var currentNum = 0; currentNum <= userNum; currentNum++) {
		If (userNum % 2 == 0) {
			document.getElementById("countUp").innerHTML = userNum + "). " + "Your number is Even!" +  "<br> " + "<br>";
		} else {
			document.getElementById("countUp").innerHTML = userNum + "). " + "Your number is Odd!" +  "<br> " + "<br>";
		}
	}
  
  var joinUs = document.getElementById("joinUs").innerHTML;
  joinUs.textContent = "Welcome to the Great Distance Family, " + firstName + "!";
}
	
if (currentNum % 3 == 0 && currentNum % 5 = 0) {
					document.getElementById("countUp").innerHTML += currentNum + "). " + "Super Eureka!" + "<br> " + "<br>";
				} else if (currentNum % 3 == 0) {
					document.getElementById("countUp").innerHTML += currentNum + "). " + "Eureka!" + "<br> " + "<br>";
				} else {
					document.getElementById("countUp").innerHTML += currentNum + "). " + "Think..." + "<br> " + "<br>";
				}
