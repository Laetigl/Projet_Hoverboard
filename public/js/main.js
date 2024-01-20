//Styling the title
let titleIcecream = document.querySelector("#iceCream")
titleIcecream.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
titleIcecream.style.fontWeight="bold"
titleIcecream.style.textShadow="#E96F92 10px 0 10px"
titleIcecream.style.color="white"

//Liste of defined colors
let colors = ["#FF5733","#FFFF33","#88883C","#4DBAE2","#4D62E2",'#68E24D',"#16401C","#FA6D96"]

//Random colors
function mixcolor() {
    let randomColors = Math.floor(Math.random()* colors.length) //getting the index but not the value
    return colors[randomColors] //getting only the value
}

//Creation of all the little bubbles/squares initially
let sectionBoard = document.querySelector("section") //targeting the section
let exemplarDiv //var for the creation of the div

for (let index = 0; index < 598; index++) { //creation of a fixed amount of div (defined with the value)
    exemplarDiv = document.createElement("div") //create an element "div"
    sectionBoard.appendChild(exemplarDiv) //putting the div in the section linked by the parent-child
}

exemplarDiv = document.querySelectorAll("div") //take all the div created before

exemplarDiv.forEach(element => { //giving the properties for all the div created (styling)
    element.style.width="21px"
    element.style.height="21px"
    element.style.backgroundColor="rgb(74, 67, 67)"
    element.style.borderRadius="20px"
    element.style.display="flex"
    element.style.justifyContent="space-between"
    element.style.border="none"
});

//Animation effect with the mouse : for each div we'll target the element included with an listener of the event with the two events (1-Mouseover, 2-Mouseout)
exemplarDiv.forEach(element => {
    element.addEventListener('mouseover', () =>{
        element.style.transition= " " //with an empty string for the transition, the transition after the mouseout will be more smooth
        element.style.backgroundColor= mixcolor()
    })  
    element.addEventListener('mouseout', () =>{
        element.style.transition= "all 2s ease"
        element.style.backgroundColor= "rgb(74, 67, 67)" //reset to the initial color for the background
    })  
})