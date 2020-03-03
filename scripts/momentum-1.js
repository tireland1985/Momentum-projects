/* ToDoList
*/
window.onload = function () {
        // declare variables
        let form = document.getElementById("form");
        let input = document.getElementById("input");
        let btn = document.getElementById("btn");
        let list = document.getElementById("list");
        let btnClear = document.getElementById("btnClear");
        let id = 1;

        //listItem = {item: "todo item", checked: close}
        let liItem = "";
        let toDoList = [];

        // add event listeners for the form buttons
        btn.addEventListener("click", addTodoItem);
        list.addEventListener("click", boxChecked);
        btnClear.addEventListener("click", clearList);

}