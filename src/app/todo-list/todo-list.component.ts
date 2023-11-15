import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TODO } from '../models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todos!: TODO[];
  show: boolean = false;
  todo!: TODO;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodoList(); 
  }

  //création d'une fonction qui récupère la liste des todos
  getTodoList() {
     this.todoService.getToTodoList().subscribe((data : TODO[]) => {
       this.todos = data;
   });
  }

  //permet d'allez vers la page d'un todo
  goToTodo(todo: TODO){
    this.router.navigate(['/todo', todo.id])
  }
}
