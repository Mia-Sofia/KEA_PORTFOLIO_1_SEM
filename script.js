window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");

    document.querySelector("#frem1").addEventListener("click", goRight1);

    document.querySelector("#frem2").addEventListener("click", goRight2);
    document.querySelector("#tilbage2").addEventListener("click", goLeft2);

    document.querySelector("#tilbage3").addEventListener("click", goLeft3);

}


//slide 1
function goRight1() {
    console.log("Go to slide2");
    document.querySelector("#slide2").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");


}


//slide 2
function goRight2() {
    console.log("go to slide 3");
    document.querySelector("#slide3").classList.remove("hide");
    document.querySelector("#slide2").classList.add("hide");


}


function goLeft2() {
    console.log("go to slide 1");
    document.querySelector("#slide1").classList.remove("hide");
    document.querySelector("#slide2").classList.add("hide");


}


//slide3
function goLeft3() {
    console.log("go to slide 3");
    document.querySelector("#slide2").classList.remove("hide");
    document.querySelector("#slide3").classList.add("hide");


}
