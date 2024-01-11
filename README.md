## Usage
1. Install the required packages.
    ```sh
  npm install
    ```

2. Start the development server.
    ```sh
    npm start
    ```
## Structure
It's a great app for understanding how states work in react.
I've used TailwindCSS for styling.
It's a simple UI app containing a input tag and a Add Task button. Whatever we write in the input tag and click on Add Task button, it will be displayed below in the form of list.
I've made 1 component named "Task" which keeps track of the tasks added in the list and also has a delete and completed botton.
I've passed "id" as an arguement in "addTask" and "deleteTask" function , so that task with similar name won't get deleted when we click on delete button.
