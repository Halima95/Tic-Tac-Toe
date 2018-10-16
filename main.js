// The user choose the char. , i will assign the img as X and O 
//  if the user choose joey img that will = X
//  if the user choose Phepee img that will = O
//  will start the game
//  it is always start with Phoebe.!
// filled cell!





$(document).ready(function () {

    var turn = 0;
    var player1;
    var player2;

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

    $(".X").click(function x() {
        player1 = 0;
        player2 = 1;
        console.log(player1);
        // turn++
        // debugger;

    });
    $(".O").click(function o() {
        player1 = 1;
        player2 = 0;

        console.log(player1);
        // console.log("O");
        // turn++
    });

    $(".cell").on("click", function (event) {
        $(this).unbind("mouseout");

        if (turn % 2 === 0) {
            $(this).addClass("Phoebe");

            $(this).addClass("disable")
            turn++

        } else if (turn % 2 !== 0) {
            $(this).addClass("joey");

            $(this).addClass("disable")
            turn++;

        }


        window.setTimeout(function () {
            checkForWinner();
        }, 100);
    });

    // $("td").click(function () {
    //     if (player1 === 1) {
    //         $(this).addClass("joey");
    //     }
    //     else {

    //         $(this).addClass("Phoebe");
    //     }
    //     window.setTimeout(function () {
    //         checkForWinner();
    //     }, 100);
    // });
    function checkForWinner() {

        if (cellOne.hasClass("joey") && cellTwo.hasClass("joey") && cellThree.hasClass("joey")
            || cellFour.hasClass("joey") && cellFive.hasClass("joey") && cellSix.hasClass("joey")
            || cellSeven.hasClass("joey") && celleight.hasClass("joey") && cellNine.hasClass("joey")
            || cellOne.hasClass("joey") && cellFour.hasClass("joey") && cellSeven.hasClass("joey") || cellTwo.hasClass("joey") && cellFive.hasClass("joey") && celleight.hasClass("joey")
            || cellThree.hasClass("joey") && cellSix.hasClass("joey") && cellNine.hasClass("joey")
            || cellOne.hasClass("joey") && cellFive.hasClass("joey") && cellNine.hasClass("joey")
            || cellThree.hasClass("joey") && cellFive.hasClass("joey") && cellSeven.hasClass("joey")) {

            swal({
                title: "Good job!",
                icon: "image/howyoudoin.jpg",
            });
            window.setTimeout(function () {
                location.reload();
            }, 2200);


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
            }, 2200);
        }
        else if (turn === 9) {

            swal({
                title: "No body wins!",
                icon: "image/sad.jpg",
            });
            turns = 0;
        }
    }


    $(".button1").click(function () {

        location.reload();
    });
});