$(document).ready(function () {

// for 1 to 6
    let c = "";
        c +=    '<div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">' +
                '<div class="carousel-inner">' +
// for 1 to n or name
                    '<div class="carousel-item active">' +
                    '<img src="images-i/i-j.png" class="d-block w-100" alt="Heat Map 1"/>' +
                    '</div>' +
                
                '</div>'+
    //     <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="sr-only">Previous</span>
    //     </a>
    //     <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
    //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span class="sr-only">Next</span>
    //     </a>
    '</div>'


    $(".frame").on("mouseover", function () {
        $(this).css("cursor", "pointer");
        $(this).css("background-color", "transparent");
        // $(this).css({ "transform": "translate(-60rem,0)" });
        // $(this).hide();

    });

    $(".frame").on("mouseout", function () {
        $(this).css("background-color", "lightblue");
        // $(this).text("Web Design");
        // $("#wd").css({ "transform": "translate(60rem,0)" });

    });

    // for (let i = 0; i < 6; i++) {
    //     // document.getElementById("greeting").append("Helo world "+i)
    //     $("#greeting").append("<p>Helo world " + i + "</p><br>");
    // }
});




// '<div class="carousel-item">' +
// '<img src="images/fcc2.png" class="d-block w-100" alt="Heat Map 2"/>' +
// '</div>' +
// '<div class="carousel-item">' +
// '<img src="images/fcc3.png" class="d-block w-100" alt="Heat Map 2"/>' +
// '</div>' +
// '<div class="carousel-item">' +
// '<img src="images/fcc4.png" class="d-block w-100" alt="Heat Map 2"/>' +
// '</div>' +
// '<div class="carousel-item">' +
// '<img src="images/fcc5.png" class="d-block w-100" alt="Heat Map 2"/>' +
// '</div>' +


