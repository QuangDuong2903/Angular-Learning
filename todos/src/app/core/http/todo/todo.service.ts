import { Injectable } from '@angular/core';
import ITodo from '../../../shared/models/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ITodo[] = []
  todos$: BehaviorSubject<ITodo[]>

  constructor() { 
    this.todos = [
      // {
      //   id: '1',
      //   name: 'task 1',
      //   done: true
      // },
      // {
      //   id: '2',
      //   name: 'task 2',
      //   done: false
      // }
    ]
    this.todos$ = new BehaviorSubject(this.todos)
  }

  addTodo(todo: ITodo) {
    this.todos.push({
      id: this.todos.length > 0 ? (parseInt(this.todos[this.todos.length - 1].id) + 1).toString() : '1',
      name: todo.name,
      done: todo.done
    })
    this.todos$.next(this.todos)
  }

  updateTodo(todo: ITodo) {
    const ele = this.todos.find(t => t.id === todo.id)
    if (!ele)
      return
    ele.name = todo.name
    ele.done = todo.done
    this.todos$.next(this.todos)
  }

}
