import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // méthode relié au backend

  // on récupère la liste des todos
  getToTodoList(): Observable<any> {
    return this.http.get(`${this.url}/todos`);
  }

  //on récupère un seul todo
  getTodoById(id: number): Observable<any> {
    return this.http.get(`${this.url}/todo/${id}`);
  }

  //création d'une todo
  sendToDo(todo: Object): Observable<Object> {
    return this.http.post(`${this.url}/todo/add`, todo);
  }

  //suppression d'une todo
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.url}/todo/${id}`);
  }

  //modification d'une todo
  updateTodo(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/todo/update/${id}`, value);
  }
}
