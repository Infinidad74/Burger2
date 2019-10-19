
$("#addBurger").on("click", () => {
    
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: {"burger_name":$("#newBurger").val().trim()}   
    }).then(location.reload());
})