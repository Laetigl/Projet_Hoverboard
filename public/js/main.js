// let colors = [rgba(245, 40, 145, 0.8),rgba(135, 239, 108, 0.8),rgba(255, 19, 6, 0.8),rgba(255, 19, 255, 0.8),rgba(255, 220, 18, 0.8),rgba(110, 207, 255, 0.8)] //list of colors

//Creation of the square
let sectionBoard = document.querySelector("section")
let exemplarDiv //creation of the div

for (let index = 0; index < 300; index++) { //creation of an amount of div
    exemplarDiv = document.createElement("div")
    sectionBoard.appendChild(exemplarDiv)
}
exemplarDiv = document.querySelectorAll("div") //take all the div created before
Array.from(exemplarDiv).forEach(element => {
    element.style.width="20px"
    element.style.height="20px"
    element.style.backgroundColor="rgb(74, 67, 67)"
    element.style.display="flex"
    element.style.justifyContent="space-between"
    // element.style.margin="3px"
    element.style.border="none"
});

