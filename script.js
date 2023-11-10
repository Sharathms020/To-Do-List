// variable Sections

const todo = document.querySelector('.todo');

const btn =  document.querySelector('.submit');

const todos =  document.querySelector('.todos');

const fname = document.querySelector('.fname');

const editTodo =  document.querySelector('.edit');

// eventListner
btn.addEventListener('click',addtodos);
//select the parent element of delete
todos.addEventListener('click',deleteElement)
// search input adding eventListner

fname.addEventListener('keyup',searchTodo);
// edit the todos 
todos.addEventListener('click',editTodofn);


// functions

function  addtodos(e){
     e.preventDefault();
     var newToDo = todo.value;
     
     // creating a new li item
     const li = document.createElement('li');
      // adding className of the same li
     li.className = "listElements" ;
      // inputing elements inside the li list
     li.innerText = newToDo;
     
     // creating a new delete button
     
     const deleteButton = document.createElement('button');
      // adding className of the same delete button
      // so there is no need to write css class again to this delete button
     deleteButton.className = "btn-danger-delete delete" ;
      // inputing text inside delete button
     deleteButton.innerText = 'delete';
      // creating a new edit button
      const editButton = document.createElement('button');
      editButton.className = "edit-button edit" ;
      editButton.innerText = 'edit';

     todos.appendChild(li);

     li.appendChild(editButton);
     li.appendChild(deleteButton);
     

     todo.value ='';
}
// event deligations takes place select the parent element
function deleteElement(e){
  const deleteLiItem = e.target.classList.contains('delete');
  if(deleteLiItem){
    let res = confirm("Are you Sure ?");

    if(res) {
        let li = e.target.parentElement;
        console.log(li);
        todos.removeChild(li);
    }
  }
}

function searchTodo(e){
     const searchValue = e.target.value.toLowerCase();

     let allListedItem = document.getElementsByTagName('li');
      
     Array.from(allListedItem).forEach(function(item){

      let ToDoNames = item.firstChild.textContent.toLowerCase();
      
      if(ToDoNames.indexOf(searchValue)!=-1){
        item.style.display = 'block';
      }else{
        item.style.display = 'none';
      }

     })
    //  console.log(allListedItem);
     
}

function editTodofn(e){
    const searchValue = e.target.parentElement.firstChild;
    console.log(searchValue);
}


