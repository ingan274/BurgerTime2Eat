

$(document).on("click", ".eatButton", function () {
    event.preventDefault();
    var id = $(this).data("id");
    // var buttonID = "tryBurger"+id;
    var customerID = "#consumer_name_"+id;
    var newCustomerName = $(customerID).val().trim();
    if (newCustomerName) {
        var burgerId = $(this).data("id");
        var eaten = $(this).data("eaten");
        console.log(eaten)

        var newEaten = {
            devoured: eaten,
            customer_name: newCustomerName
        };

        $.ajax("/api/burgers/" + burgerId, {
            method: "PUT",
            data: newEaten
        }).then(function () {
            location.reload();
        })
    } else {
        $("#errorCus").text("Please enter your name.");
    }
})


//Adding Buttons from Search Bar
$(document).on("click", "#order-button", function (event) {
    event.preventDefault();
    var newBurgerName = $("#burger_name").val().trim();

    if (newBurgerName) {
        var newBurger = {
            burger_name: newBurgerName
        }

        $.post("/api/burgers", newBurger, function () {
            location.reload();
        })
    } else {
        $("#error").text("Please enter a burger name.");
    }
})

