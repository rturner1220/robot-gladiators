var playerName = window.prompt("What is your robot's name")
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

// execute function

fight();

var playerHealth = 100

//// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("your player is still alive!");
    
}

var playerHealth = 10;

if (playerHealth === 0) {
    console.log("This will not run.");
}

else {
    console.log("This will run instead.");
}

// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

// put new code under this
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has" + enemyHealth + " health remaining.");


// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// if player choses to fight, then fight
if (promptFight === "fight" || promptFigth === "FIGHT") {
    // remove enemy's health - playerAttack;
    console.log(playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining.");
    
    // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to choose a valid option. Try again!");
}

var confirmSkip = true;

if (confirmSkip === true) {
  // do something
}

if (confirmSkip) {
  // do something
}

