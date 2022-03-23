$(() => {
    $(".container").css("background-image", "url(https://pix10.agoda.net/hotelImages/246770/-1/221358e3adad66ebaf6fffadc7af73fa.jpg?ca=25&ce=0&s=1024x768)")
    let count = 0;
    $(".count").click(() => {
        count++;
        $(".result").val(count)
        if (count > 0 && count < 34) {
            $(".count").html("Subhanolloh")
            $(".container").css("background-image", "url(https://pix10.agoda.net/hotelImages/246770/-1/221358e3adad66ebaf6fffadc7af73fa.jpg?ca=25&ce=0&s=1024x768)")
        } else if (count > 33 && count < 67) {
            $(".count").html("Alhamdulillah")
            $(".container").css("background-image", "url(https://haqislam.org//wp-content/uploads/2013/09/Makkah.jpg)")
        } else if (count > 66 && count < 99) {
            $(".count").html("Allohu akbar")
            $(".container").css("background-image", "url(https://i.pinimg.com/736x/93/46/ba/9346ba1bf3760dd24794612b0e6d32fe.jpg)")
        } else if (count > 98) {
            count = 0;
        }
    })

    

    $(".reset").click(() => {
        count = 0;
        $(".result").val(count)
        $(".count").html("Subhanolloh")
    })
})
