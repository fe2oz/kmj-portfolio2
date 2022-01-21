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
    
    const aboutCircle = document.getElementById("about-circle");
    const aboutShow = document.getElementById("about-show");
    const worksCircle = document.getElementById("works-circle");
    const worksShow = document.getElementById("works-show");

    aboutCircle.addEventListener("mouseover", function(){
        aboutShow.style.opacity = "1"
    });
    aboutCircle.addEventListener("mouseout", function(){
        aboutShow.style.opacity = "0"
    });
    worksCircle.addEventListener("mouseover", function(){
        worksShow.style.opacity = "1"
    });
    worksCircle.addEventListener("mouseout", function(){
        worksShow.style.opacity = "0"
    });
})