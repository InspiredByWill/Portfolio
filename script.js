const open = document.getElementById("see")
const myWork = document.getElementById("mywork")
const close = document.getElementById("close")
myWork.style.display = "none"
// console.log(myWork)
// see.addEventListener("click", show);
// function show()
// {
//     if (myWork.style.display === "none"){
//         myWork.style.display = "block";
//     }
// }

// see.onclick = (e) => {
//     console.log("clicked")
// }
// see.addEventListener("click", function () {
//     myWork.id.toggle(style.display = block)
// })
// see.onclick = (e) => { 
//     if (myWork.style.display === "none") {
//             myWork.style.display = "block"
//         }
// }
// subForm.onmouseenter = () => {
//     subForm.classList.toggle("active-btn")
// }

// subForm.onmouseleave = () => {
//     subForm.classList.toggle("active-btn")
// }

open.addEventListener("click", showNav);

function showNav() {
    if (myWork.style.display === "none") {
        myWork.style.display = "block";
        // close.style.display = "inline-block";
        open.style.display = "none";
    } else {
        myWork.style.display = "none";
        open.style.display = "block";
    }
}
close.addEventListener("click", hideNav);
 
 function hideNav() {
     if (myWork.style.display === "block") {
        open.style.display = "block";
        // open.style.display = "block";
        myWork.style.display = "none";
     } else {
        open.style.display = "block";
        myWork.style.display = "none";
     }
}
