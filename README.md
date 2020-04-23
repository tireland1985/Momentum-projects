# ToDoList App
CSY1018 Web Development
Class work: momentum-style todo list
This currently has issues: On page refresh, the list seems to get cleared.. Enter works.. (ish..)

Errors:<br />
page load/refresh:<br />
Uncaught TypeError: Cannot read property 'forEach' of null<br />
    at displayList (todo.js:81)<br />
    at window.onload (todo.js:96)<br /> <br />
after item submitted:
Uncaught TypeError: Cannot read property 'push' of null<br />
    at HTMLButtonElement.addTodoItem (todo.js:51)<br /><br />
after submit via the enter key:<br />
Uncaught TypeError: Cannot read property 'push' of null<br />
    at addTodoItem (todo.js:51)<br />
    at HTMLInputElement.keyDown (todo.js:110)
<br />
<br />
Solution to the above: write an if statement to check if localStorage contained data. If it does then call displayList()