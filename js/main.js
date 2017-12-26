jQuery(document).ready(function() {
    $(".customers-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 6
            },
            height: "variable"
        },
        pagination: {
            container: ".customers-nav",
            anchorBuilder: false
        }
    });
    $(".feedbacks-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".feedbacks-container",
            anchorBuilder: false
        }
    });
    $(window).scroll(function() {
        let top = $(window).scrollTop();
        if (top >= 108) {
            $("header").addClass("header-bg");
        } else {
            if ($("header").hasClass("header-bg")) {
                $("header").removeClass("header-bg");
            }
        }
        if (top >= 800) {
            $(".arrow-one .arrow").css("display", "block");
        } else {
            if ($(".arrow-one .arrow").css("display") == "block") {
                $(".arrow-one .arrow").css("display", "none");
            }
        }
    });
    // waypoint js

    $(".animation").each(function() {
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                let animation = $(this.element).attr("data-animation");
                //console.log(animation);
                $(this.element).css("opacity", "1");
                $(this.element).addClass("animated " + animation);
            },
            offset: "75%"
        });

    });

    $('#menu').slicknav({
        label: '',
    });
});