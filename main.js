
var input1 = document.getElementById("email-el");
document.getElementById("getStarted").addEventListener("click", function(){
    console.log("button clicked")
    validateEmail()
})
function validateEmail() {
    if (!input1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById("redNotice").textContent = "Please check your email!"
        console.log("Wrong!")
        input1.style.border = "1px solid red"
    }else {
        document.getElementById("redNotice").textContent = ""
        console.log("Correct!")
        input1.style.border = ""
    }
}



var input2 = document.getElementById("email-el2")
document.getElementById("forFree").addEventListener("click", function(){
    console.log("button clicked")
    validateEmail2()
})
function validateEmail2() {
    if (!input2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById("redNotice2").textContent = "Please check your email!"
        console.log("Wrong!")
        input2.style.border = "1px solid red"
    }else {
        document.getElementById("redNotice2").textContent = ""
        console.log("Correct!")
        input2.style.border = ""
    }
}
