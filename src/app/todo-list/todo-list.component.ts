import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TODO } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todos!: TODO[];
  show: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList(); 
  }

  //création d'une fonction qui récupère la liste des todos
  getTodoList() {
     this.todoService.getToTodoList().subscribe((data : TODO[]) => {
       this.todos = data;
   });
  }

  //création d'une fonction qui affiche la description au clique sur le name
  showDescription(todo: TODO) {
    todo.show = !todo.show;
  }

  //création d'une fonction pour supprimer une todo
  deleteTodoList(id: number) {
    this.todoService.deleteTodo(id).subscribe(data => {
      console.log(data);
      this.getTodoList();
      window.location.reload();
    });
  }

  //modifier une todo en ouvrant un formulaire d'édition
  editDescription(todo: TODO) {
    todo.editingDescription = true;
  }

  //enregistre la description modifiée
  updateToDo(todo: TODO) {
    this.todoService.updateTodo(todo.id, todo).subscribe(data => {
      console.log(data);
      this.getTodoList();
      todo.editingDescription = false;
    });
  }
}
