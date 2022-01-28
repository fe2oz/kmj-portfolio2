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
    });
    iframeTwo.addEventListener("click", function(){
        changeIframeTwo();
    });
    iframeThree.addEventListener("click", function(){
        changeIframeThree();
    });
    iframeFour.addEventListener("click", function(){
        changeIframeFour();
    });
    iframeFive.addEventListener("click", function(){
        changeIframeFive();
    });
    iframeSix.addEventListener("click", function(){
        changeIframeSix();
    });
    iframeSeven.addEventListener("click", function(){
        changeIframeSeven();
    });
    iframeEight.addEventListener("click", function(){
        changeIframeEight();
    });
})