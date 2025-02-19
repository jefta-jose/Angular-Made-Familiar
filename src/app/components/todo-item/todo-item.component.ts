import { Component, Input, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompleteTodoDirective } from '../../directives/highlight-complete-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompleteTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;

  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo);
  }
}

