const todoList = document.querySelector('.todo-list');
const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add-todo');
let todos;


const savedData = localStorage.getItem('todos');
if(savedData == null){
    todos = []
}
else {
    todos = JSON.parse(savedData);
    show();
}


    addBtn.addEventListener('click', function(e){
        if(userInput.value !==""){
            todos.push(userInput.value)   
            userInput.value = ""; 
            localStorage.setItem('todos',JSON.stringify(todos));
            show()
        }
    })


    function show(){
        todoList.innerHTML='';
        for(let i=0;i<todos.length;i++){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(todos[i]));
            todoList.appendChild(li);   
            
            let trashBtn = document.createElement('button' );
            trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            li.appendChild(trashBtn);
            trashBtn.addEventListener('click',function(){
                todos.splice(i,1);
                localStorage.setItem('todos',JSON.stringify(todos));
                show();
            });
        };
    }

    // function deleteItem() {
    //     todos.splice(i,1);
    //     show();
    // }
            
     
    // const completedBtn = document.createElement('button');
            // completedBtn.innerHTML = '<i class="fas fa-check"></i>';
            // li.prepend(completedBtn);
            
            // completedBtn.addEventListener('click', function() {
            //     li.classList.toggle('completed');
            // })
            // trashBtn.addEventListener('click',function(){
            //     todos.shift();
            //     console.log(todos)
            // });   

    // addBtn.addEventListener('click',function(){
        
    // })
            

            // const trashBtn = document.createElement('button');
            // trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            // todoList.appendChild(trashBtn);
        
            // completedBtn.addEventListener('click', function() {
            //     li.classList.toggle('completed');
            // })
        
        // function show(){
        //     todoList.innerHTML='';
            
        //     for(let i = 0; i<todos.length; i++){
        //         const li = document.createElement('li');
        //         li.appendChild(document.createTextNode(todos[i]));
        //         todoList.appendChild(li);
        //     }
        //     }
    
        



    // userInput.addEventListener('keydown', function(e) {
    //     if (e.key == "Enter" && userInput.value !=="") {
    //         addToDo();
    //     }
    // })



    // function addToDo(){
    
    //         const itemDiv = document.createElement('div');
    //         itemDiv.classList.add('todo-item');
    //         todoList.appendChild(itemDiv);
        
    //         const completedBtn = document.createElement('button');
    //         completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    //         itemDiv.appendChild(completedBtn);
            
    //         const todoItem = document.createElement('li');
    //         todoItem.textContent = userInput.value;
    //         itemDiv.appendChild(todoItem);

    //         const todosVal = userInput.value;
    //         todos.push(todosVal);
        
    //         const trashBtn = document.createElement('button');
    //         trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    //         itemDiv.appendChild(trashBtn);
        
    //         userInput.value = "";
        
    //         trashBtn.addEventListener('click', function() {
    //             itemDiv.remove();
    //         });
        
    //         completedBtn.addEventListener('click', function() {
    //             itemDiv.classList.toggle('completed');
    //         })
    //     }

       