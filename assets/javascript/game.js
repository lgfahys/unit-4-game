$(document).ready(function () {
    // creating variables
    var isCharacterChosen = false;
    var isEnemyChosen = false;
    var chosenCharacter = "";
    var chosenEnemy = "";

    //hiding buttons
    $( "#attack" ).hide();
    $( "#restart" ).hide();

    // array of characters
    var characters = [
        { id: "darthVader", name: "Darth Vader", healthPoints: "150", attack: "25", counterAttack: "15", img: "assets/images/darthvader.jpg" },
        { id: "lukeSkywalker", name: "Luke Skywalker", healthPoints: "120", attack: "10", counterAttack: "5", img: "assets/images/darthvader.jpg" },
        { id: "princessLeia", name: "Princess Leia", healthPoints: "100", attack: "8", counterAttack: "20", img: "assets/images/darthvader.jpg" },
        { id: "chewbacca", name: "Chewbacca", healthPoints: "100", attack: "20", counterAttack: "10", img: "assets/images/darthvader.jpg" },
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

    // $("#lukeSkywalker").click(function () {
    //     alert(("lukeSkywalker".name));
    // });

    // when user selects their character

        $(".character").click(function () {
            if (isCharacterChosen == false) { 
                chosenCharacter = $(".character").index(this);
                $(this).appendTo("#yourcharacter").attr('data-name');
                $("#characters").appendTo("#enemies");
                isCharacterChosen = true;

    // when user selects their enemy

            } else {
                chosenEnemy = $(this).index();
                $(this).appendTo("#fightsection");
                $("#attack").show();
                isEnemyChosen = true;
            }

        });

    //when user selects the attack button

        $("#attack").click(function () {
            $("#text").text("You have attacked " + characters[chosenCharacter].name + " for " + characters[chosenCharacter].attack + " attack points.");
        });


});