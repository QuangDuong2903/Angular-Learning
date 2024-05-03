import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/http/todo/todo.service';
import ITodo from '../../../../shared/models/todo.model';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css',
})
export class ManageComponent implements OnInit, OnDestroy {
  todos?: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {}

  name = new FormControl('', {
    validators: [Validators.required, Validators.minLength(5)],
    nonNullable: true,
  });

  createTaskForm = new FormGroup({
    name: this.name,
  });

  ngOnInit(): void {
    this.todos = this.todoService.todos$;
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  addTodo() {
    this.todoService.addTodo({
      id: '',
      name: this.name.value,
      done: false,
    });
  }

  updateTodo(todo: ITodo) {
    this.todoService.updateTodo({
      id: todo.id,
      name: todo.name,
      done: !todo.done
    })
  }
}
