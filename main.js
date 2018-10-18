
$(document).ready(function () {
    // Declare variables.
    var turn = 0;
    var player;
    var player1;
    var player2;
    // Assigns the "td" into variables to use it for checkForWinner function.
    var cellOne = $("#1");
    var cellTwo = $("#2");
    var cellThree = $("#3");
    var cellFour = $("#4");
    var cellFive = $("#5");
    var cellSix = $("#6");
    var cellSeven = $("#7");
    var celleight = $("#8");
    var cellNine = $("#9");
    // var cells = $(".cell");

    // Make the images clickable to choose the character.
    //  If the user choose one of these images all the images will be unclickable.
    $(".X").click(function x() {
        player = 0;
        $("#startSong").get(0).play();
        $("img").off("click");
    });
    $(".O").click(function o() {
        player = 1;
        $("#startSong").get(0).play();

        $("img").off("click");
    });

    // 
    $(".cell").on("click", function (event) {

        $(this).unbind("mouseout");

        if (player % 2 === 0) {
            $(this).addClass("Phoebe");

            $(this).off("click");
            player++;
            turn++;

        }
        else if (player % 2 !== 0) {
            $(this).addClass("joey");

            $(this).off("click");
            player++;
            turn++;
        }
        window.setTimeout(function () {
            checkForWinner();
        }, 100);
    });

    // This function will check all the possiablitty of winning.
    // The function will shows an alert if there is a winner.
    function checkForWinner() {

        if (cellOne.hasClass("joey") && cellTwo.hasClass("joey") && cellThree.hasClass("joey")
            || cellFour.hasClass("joey") && cellFive.hasClass("joey") && cellSix.hasClass("joey")
            || cellSeven.hasClass("joey") && celleight.hasClass("joey") && cellNine.hasClass("joey")
            || cellOne.hasClass("joey") && cellFour.hasClass("joey") && cellSeven.hasClass("joey") || cellTwo.hasClass("joey") && cellFive.hasClass("joey") && celleight.hasClass("joey")
            || cellThree.hasClass("joey") && cellSix.hasClass("joey") && cellNine.hasClass("joey")
            || cellOne.hasClass("joey") && cellFive.hasClass("joey") && cellNine.hasClass("joey")
            || cellThree.hasClass("joey") && cellFive.hasClass("joey") && cellSeven.hasClass("joey")) {
            $("#How").get(0).play();
            swal({
                title: "How you doin?",
                icon: "image/howyoudoin.jpg",

            });
            window.setTimeout(function () {
                location.reload();
            }, 2500);


        }
        else if (cellOne.hasClass("Phoebe") && cellTwo.hasClass("Phoebe") && cellThree.hasClass("Phoebe")
            || cellFour.hasClass("Phoebe") && cellFive.hasClass("Phoebe") && cellSix.hasClass("Phoebe")
            || cellSeven.hasClass("Phoebe") && celleight.hasClass("Phoebe") && cellNine.hasClass("Phoebe")
            || cellOne.hasClass("Phoebe") && cellFour.hasClass("Phoebe") && cellSeven.hasClass("Phoebe") || cellTwo.hasClass("Phoebe") && cellFive.hasClass("Phoebe") && celleight.hasClass("Phoebe")
            || cellThree.hasClass("Phoebe") && cellSix.hasClass("Phoebe") && cellNine.hasClass("Phoebe")
            || cellOne.hasClass("Phoebe") && cellFive.hasClass("Phoebe") && cellNine.hasClass("Phoebe")
            || cellThree.hasClass("Phoebe") && cellFive.hasClass("Phoebe") && cellSeven.hasClass("Phoebe")) {
            swal({
                title: "I am the winner!",
                icon: "image/happy.phep.jpg",

            });


            window.setTimeout(function () {
                location.reload();
            }, 2500);
        }
        // This function will shows an alert if we have a tie game.
        else if (turn === 9) {

            swal({
                title: "No body wins!",
                icon: "image/sad.jpg",
            });
            turns = 0;
        }



    }
    // reload the page.

    $(".button1").click(function () {

        location.reload();
    });
});