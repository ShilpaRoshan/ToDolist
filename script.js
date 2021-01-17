/// Selectors

const todoInput = document.querySelector('.todo-input');
const addbtn = document.querySelector('.add-items');
const todoList = document.querySelector('.todo-list');

/// event handlers

//item.addEventListener('click', e => console.log(e));
addbtn.addEventListener('click', addToDo);
todoList.addEventListener('click' , delcheck);




/// functions

function addToDo(e){

   //console.log('hi'); 
   if(todoInput.value !== ''){

      //1. create div

   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");

   //2.create li

   const newTodo =  document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("newTodo-list");
   todoDiv.appendChild(newTodo);


   //3. Create completed button

   const compltBtn = document.createElement('button');
   compltBtn.innerHTML = '<i class = "fas fa-check"></i>';
   compltBtn.classList.add("complt-btn");
   todoDiv.appendChild(compltBtn);


   //4.Create delete button

   const delBtn = document.createElement('button');
   delBtn.innerHTML = '<i class ="fas fa-trash"></i>';
   delBtn.classList.add("del-btn");
   todoDiv.appendChild(delBtn);

   
   //5.Append with the list

   todoList.appendChild(todoDiv);
   //alert('hi');

   //6.Clear Input Value

   todoInput.value = '';


   }
   
   

}

function delcheck(e){

    // delete button implementation
    const item = e.target;
   // console.log(item);
   if(item.classList[0] === 'del-btn'){
      const todo = item.parentElement;
      todo.remove();
   }
   else if(item.classList[0] === 'complt-btn'){
      const todo = item.parentElement;
      todo.classList.toggle('completed');
   }


}