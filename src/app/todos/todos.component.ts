import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../model/todo.type';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';


@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal("");

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodosFromApi().subscribe({
      next: (data) => {
        this.todoItems.set(data); // Update signal state
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      }
    });
  }

  UpdateTodoItem(todoItem : Todo){
    this.todoItems.update((todos)=> {
      return todos.map(todo => {
        if(todo.id ==  todoItem.id){
          return{
            ...todo,
            completed:!todo.completed
          }
        } return todo;
      })
    })
  }

}
