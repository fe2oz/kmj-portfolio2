$(document).ready(function(){
    const navLinks = document.querySelectorAll("nav a");
            const navTextCopy = document.getElementById("nav_big_text");

            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].addEventListener("mouseover", function () {
                    let navLinkText = this.textContent;
                    navTextCopy.textContent = navLinkText;
                    navTextCopy.classList.add("big_text_active");
                });

                navLinks[i].addEventListener("mouseout", function () {
                    let navLinkText = this.textContent;
                    navTextCopy.textContent = navLinkText;
                    navTextCopy.classList.remove("big_text_active");
                })
            }

    /////////////

    const iframeOne = document.getElementById("iframe_one");
    const iframeTwo = document.getElementById("iframe_two");
    const iframeThree = document.getElementById("iframe_three");
    const iframeFour = document.getElementById("iframe_four");
    const iframeFive = document.getElementById("iframe_five");
    const iframeSix = document.getElementById("iframe_six");
    const iframeSeven = document.getElementById("iframe_seven");
    const iframeEight = document.getElementById("iframe_eight");
    const iframeList = document.getElementById("pp_site");
    const iframeClose = document.getElementById("close_iframe");

    iframeClose.addEventListener("click", function(){
        Close();
    });

    function Close(){
        iframeList.style.display = "none";
        $(".menu li a").css("color", "white");
    };
    function changeIframeOne(){
        iframeList.style.display = "block";
        iframeList.src = "works==page1.html";
    };
    function changeIframeTwo(){
        iframeList.style.display = "block";
        iframeList.src = "works==page2.html";
    };
    function changeIframeThree(){
        iframeList.style.display = "block";
        iframeList.src = "works==page3.html";
    };
    function changeIframeFour(){
        iframeList.style.display = "block";
        iframeList.src = "works==page4.html";
    };
    function changeIframeFive(){
        iframeList.style.display = "block";
        iframeList.src = "works==page5.html";
    };
    function changeIframeSix(){
        iframeList.style.display = "block";
        iframeList.src = "works==page6.html";
    };
    function changeIframeSeven(){
        iframeList.style.display = "block";
        iframeList.src = "works==page7.html";
    };
    function changeIframeEight(){
        iframeList.style.display = "block";
        iframeList.src = "works==page8.html";
    };

    iframeOne.addEventListener("click", function(){
        changeIframeOne();
        $(".menu li a").css("color", "black");
    });
    iframeTwo.addEventListener("click", function(){
        changeIframeTwo();
        $(".menu li a").css("color", "black");
    });
    iframeThree.addEventListener("click", function(){
        changeIframeThree();
        $(".menu li a").css("color", "black");
    });
    iframeFour.addEventListener("click", function(){
        changeIframeFour();
        $(".menu li a").css("color", "black");
    });
    iframeFive.addEventListener("click", function(){
        changeIframeFive();
        $(".menu li a").css("color", "black");
    });
    iframeSix.addEventListener("click", function(){
        changeIframeSix();
        $(".menu li a").css("color", "black");
    });
    iframeSeven.addEventListener("click", function(){
        changeIframeSeven();
        $(".menu li a").css("color", "black");
    });
    iframeEight.addEventListener("click", function(){
        changeIframeEight();
        $(".menu li a").css("color", "black");
    });
})

$(function(){
    $("#works_list li").click(function(){
        $("#works_list li").removeClass("active");
        $(this).addClass("active")
    });

    $("#test1 a").click(function(){
        $(".slider__inner").css({"transform":"translateX(0%)"});
        $("input:radio[class='dot1']").is(":checked");
    });
    $("#test2 a").click(function(){
        $(".slider__inner").css({"transform":"translateX(-25%)"});
        $("input:radio[class='dot2']").is(":checked");
    });
    $("#test3 a").click(function(){
        $(".slider__inner").css({"transform":"translateX(-50%)"});
        $("input:radio[class='dot3']").is(":checked");
    });
    $("#test4 a").click(function(){
        $(".slider__inner").css({"transform":"translateX(-75%)"});
        $("input:radio[class='dot4']").is(":checked");
    });
});