//selectors
const toDoInput = document.querySelector(".toDoIO");//gets input
const todoButton = document.querySelector(".toDoButton");// gets submit 
const toDoList = document.querySelector(".toDoList");// gets to Do ul 
const filterOption = document.querySelector(".filterToDo");

// event listeners

todoButton.addEventListener("click", addToDo);// waits for click on submit
toDoList.addEventListener("click", deleteCheck);// listens for click on ul then runs deleteCheck
filterOption.addEventListener("click", filterToDo);

//functions


function addToDo(event) {
    event.preventDefault();// makes page not reload 
    const toDoDiv = document.createElement("div");// creates div 
    toDoDiv.classList.add("toDo");//adds toDo class to div 


    const newToDo = document.createElement("li");// create li 
    newToDo.innerText = toDoInput.value;// adds inner text to li aka the to do input value 
    newToDo.classList.add("toDoItem"); // styles li 
    toDoDiv.appendChild(newToDo);// adds li as child to div 
    const completedButton = document.createElement("button"); // creates complete button
    completedButton.innerHTML = '<i class="faComplete">c</i>';// adds checkmark to button using innerhtml
    completedButton.classList.add("completeBtn");// adds class name to compled button 
    toDoDiv.appendChild(completedButton);// adds completed button to div 

    const trashButton = document.createElement("button"); // creates trash button
    trashButton.innerHTML = '<i class="faTrash">g</i>';// adds checkmark to button using innerhtml
    trashButton.classList.add("trashBtn");// adds class name to trash button 
    toDoDiv.appendChild(trashButton);// adds trash button to div 
    toDoList.appendChild(toDoDiv);// adds toDoDiv(li + trash btn + complete btn) to toDoList(ul)
    toDoInput.value = "";// clears input value after div is added to screen
}

function deleteCheck(e) {
    console.log(e.target);// prints element that gets clicked on(event listner in ul ) hears children
    const item = e.target;// makes item container for anything that gets clicked on 
    if (item.classList[0] === 'trashBtn') { // checks to see if where click === to class of trashBTN
        const toDo = item.parentElement;//sets to do parent to the parent element of item(where click)
        toDo.classList.add("fall");// adds animation
        toDo.addEventListener("transitionend", function () {
            toDo.remove();// remoces parent of trashBtn
        })
       
    }
        if (item.classList[0] === "completeBtn") {//checks to see if item(where click) class === compleBtn
            const toDo = item.parentElement;// puts the parent item of item into toDo
            toDo.classList.toggle("complete");// makes item parent class = complete 
           
    }

}

// function filterToDo(e) {
//     const todos = toDoList.childNodes;
//     todos.forEach(function (toDo) {
//         switch (e.target.value) {
//             case "all":
//                 break;
//             case "complete"
//                 if (toDo.classList.contains("complete")
//                 toDo.style.display = "flex");
//             case "incomplete"
//         }
//     });
// }