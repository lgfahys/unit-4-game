$(document).ready(function () {
    // creating variables
    var isCharacterChosen = false;
    var isEnemyChosen = false;
    var chosenCharacter = "";
    var chosenEnemy = "";
    var clicks = 0;
    var enemiesAvailable = 3;

    //hiding buttons
    $("#attack").hide();
    $("#restart").hide();

    // array of characters
    var characters = [
        { id: "darthVader", name: "Darth Vader", healthPoints: "135", attack: "25", counterAttack: "15", img: "assets/images/darthvader.jpg" },
        { id: "lukeSkywalker", name: "Luke Skywalker", healthPoints: "120", attack: "10", counterAttack: "15", img: "assets/images/lukeskywalker.jpg" },
        { id: "princessLeia", name: "Princess Leia", healthPoints: "100", attack: "8", counterAttack: "20", img: "assets/images/princessleia.jpg" },
        { id: "chewbacca", name: "Chewbacca", healthPoints: "100", attack: "20", counterAttack: "15", img: "assets/images/chewbacca.jpg" },
    ];

    // creating all character cards and appending to character div
    for (i = 0; i < characters.length; i++) {
        html = "<div class='col'>";
        html += "<div class='card character' id='" + characters[i].id + "'>";
        html += "<img class='card-img' src='" + characters[i].img + "' alt='Card image'>";
        html += "<div class='card-img-overlay'>";
        html += "<h5 class='card-title'>" + characters[i].name + "</h5>";
        html += "<p class='card-text healthpoints'>" + characters[i].healthPoints + "</p>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        $("#characters").append(html);
    }


    // when user selects their character

    $(".character").click(function () {
        if (isCharacterChosen == false) {
            chooseCharacter(this);

            // when user selects their enemy
        } else if (isEnemyChosen == false) {
            chooseEnemy(this);
        } 
    });


    //when user clicks the attack button
    $("#attack").click(function () {
        clicks++;
        if (clicks <= 1) {
            characters[chosenCharacter].attack = characters[chosenCharacter].attack;
            characters[chosenCharacter].healthPoints = characters[chosenCharacter].healthPoints - characters[chosenEnemy].counterAttack;
            characters[chosenEnemy].healthPoints = characters[chosenEnemy].healthPoints - characters[chosenCharacter].attack;
        } else {
            // make chosenCharacter attack points go up by 6 each time 
            characters[chosenCharacter].attack = parseInt(characters[chosenCharacter].attack) + 6;
            characters[chosenCharacter].healthPoints = characters[chosenCharacter].healthPoints - characters[chosenEnemy].counterAttack;
            characters[chosenEnemy].healthPoints = characters[chosenEnemy].healthPoints - characters[chosenCharacter].attack;
        };
        // displaying text to notify user of your attack details in the #text div
        $("#text").text("You have attacked " + characters[chosenEnemy].name + " for " + (characters[chosenCharacter].attack) + " attack points");
        // displaying a second row of text to notify the user of enemy attack details in the #moretext div
        $("#moretext").text(characters[chosenEnemy].name + " has attacked you for " + characters[chosenEnemy].counterAttack + " attack points.");
        // subtracting health points from enemy and character on attack button click
        $("#yourcharacter").find(".healthpoints").text(characters[chosenCharacter].healthPoints);
        $("#fightsection").find(".healthpoints").text(characters[chosenEnemy].healthPoints);

        // if chosen character wins
        if (characters[chosenEnemy].healthPoints <= 0) {
            characterWon();
        };

        // if enemy wins
        if (characters[chosenCharacter].healthPoints <= 0) {
            enemyWon();
        };

        // if chosen character wins game
        if (enemiesAvailable === 0 && ($('#fightsection').is(':empty') )) {
            winGame();
        };

    });


    // restart game
    $("#restart").click(function () {
        location.reload();
    });


    function chooseCharacter(character) {
        // creating a chosenCharacter variable & getting its index based on which character was clicked
        chosenCharacter = characters.findIndex(x => x.id == event.target.offsetParent.attributes[1].nodeValue);
        // appending the clicked characer to #yourcharacter div
        $(character).appendTo("#yourcharacter");
        // appending the remaining characters to the #enemies div
        $("#characters").appendTo("#enemies");
        // setting isCharacterChosen to true
        isCharacterChosen = true;
        // changing enemies background color to red
        $(".character").css('background', 'red');
        // keeping selected characters background green
        $(character).css('background', '#60d61b');
        // making character unclickable
        $(character).off("click");
    }

    // making a choose enemy function
    function chooseEnemy(enemy) {
        // revealing the attack button
        $("#attack").show();
        // appending the clicked character to #fightsection div
        $(enemy).appendTo("#fightsection");
        // creating a chosenEnemy variable & getting its index based on which character was clicked
        chosenEnemy = characters.findIndex(x => x.id == event.target.offsetParent.attributes[1].nodeValue);
        // subtracting the of the number of enemies left to fight
        enemiesAvailable--;
        isEnemyChosen = true;
    }

    function characterWon() {
        // alerting user that they won
        alert("You win! Choose another enemy to fight.");
        // emptying fight & text sections
        $("#fightsection").empty();
        $("#text").empty();
        $("#moretext").empty();
        isEnemyChosen = false;
    }

    function enemyWon() {
        // alerting user that they won
        alert("You have been defeated! Press restart to begin a new game.");
        // revealing the restart button
        $("#restart").show();
    }

    function winGame() {
        // if chosen character wins whole game
        alert("There are no more enemies to fight. You won the game! Click restart to play again.");
        $("#restart").show();
    }

});
