
$(document).ready(function(){
    const changeSectionOne = document.getElementById("change-section1");
    const changeSectionTwo = document.getElementById("change-section2");
    const changeSectionThree = document.getElementById("change-section3");
    const changeSectionFour = document.getElementById("change-section4");
    const changeSectionFive = document.getElementById("change-section5");
    const changeSectionSix = document.getElementById("change-section6");

    changeSectionOne.addEventListener("click", function(){
        document.getElementById("slider-change-section-1").style.display = "block";
    })
});