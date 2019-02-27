$(document).ready(function () {

    // array of characters
    var characters = [
        {id: "darthVader", name: "Darth Vader", healthPoints: "150", attack: "25", counterAttack: "15", img: "assets/images/darthvader.jpg"},
        {id: "lukeSkywalker", name: "Luke Skywalker", healthPoints: "120", attack: "10", counterAttack: "5", img: "assets/images/darthvader.jpg"}, 
        {id: "princessLeia", name: "Princess Leia", healthPoints: "100", attack: "8", counterAttack: "20", img: "assets/images/darthvader.jpg"}, 
        {id: "chewbacca", name: "Chewbacca", healthPoints: "100", attack: "20", counterAttack: "10", img: "assets/images/darthvader.jpg"}, 
    ];
 
    // creating all character cards and appending to character div
    for(i = 0; i < characters.length; i++) {
        html="<div class='col'>";
        html+="<div class='card character' id='"+characters[i].id+"'>";
        html+="<img class='card-img' src='"+characters[i].img+"' alt='Card image'>";
        html+="<div class='card-img-overlay'>";
        html+="<h5 class='card-title'>"+characters[i].name+"</h5>";
        html+="<p class='card-text healthpoints'>"+characters[i].healthPoints+"</p>";
        html+="</div>";
        html+="</div>";
        html+="</div>";
        $("#characters").append(html);
    }

    // $("#lukeSkywalker").click(function () {
    //     alert("hi");
    // });

    // when user selects their character
    $(".character").click(function () {
        $(this).appendTo(".yourcharacter");
        $("#characters").appendTo(".enemies");
    });

    // when user selects their enemy

});