import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Todo } from './shared/todo';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable'


@Injectable()
export class TodoService {
  todos: Observable<Todo[]>
  private _todos: BehaviorSubject<Todo[]>;
  private baseUrl: string;
  private dataStore: {
    todos: Todo[]
  };

  constructor(private http: Http) {
  /*  this.baseUrl = 'http://56e05c3213da80110013eba3.mockapi.io/api';*/
    this.baseUrl = 'http://582ef0a1d6ed5e1200998117.mockapi.io/iiss' 
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<Todo[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/users`)
    .map(response => response.json())
    .subscribe(data => {
      this.dataStore.todos = data;
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/users/${id}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.todos.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.todos[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.todos.push(data);
      }

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }

  create(todo: Todo) {
    this.http.post(`${this.baseUrl}/users`, JSON.stringify(todo))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.todos.push(data);
        this._todos.next(Object.assign({}, this.dataStore).todos);
      }, error => console.log('Could not create todo.'));
  }

  update(todo: Todo) {
    this.http.put(`${this.baseUrl}/users/${todo.id}`, JSON.stringify(todo))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.todos.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.todos[i] = data; }
        });

        this._todos.next(Object.assign({}, this.dataStore).todos);
      }, error => console.log('Could not update todo.'));
  }

  remove(todoId: number) {
    this.http.delete(`${this.baseUrl}/users/${todoId}`).subscribe(response => {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not delete todo.'));
  }
}