# ToDoList App
CSY1018 Web Development
Class work: momentum-style todo list
This currently has issues: On page refresh, the list seems to get cleared.. Enter works.. (ish..)

Current Errors:\
page load/refresh:\
Uncaught TypeError: Cannot read property 'forEach' of null\
    at displayList (todo.js:81)\
    at window.onload (todo.js:96)\
after item submitted:\
Uncaught TypeError: Cannot read property 'push' of null\
    at HTMLButtonElement.addTodoItem (todo.js:51)\
after submit via the enter key:\
Uncaught TypeError: Cannot read property 'push' of null\
    at addTodoItem (todo.js:51)\
    at HTMLInputElement.keyDown (todo.js:110)

