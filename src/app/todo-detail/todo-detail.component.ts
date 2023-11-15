import { Component, OnInit } from '@angular/core';
import { TODO } from '../models/todo';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit{

  todo!: TODO;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {  
  const todoId: string | null = this.route.snapshot.paramMap.get('id'); // on récupère l'id dans l'url

  if(todoId){ //si un todo id existe on récupère le Todo en question
    this.todoService.getTodoById(+todoId).subscribe(data => {
      this.todo = data;
    });
  }
}

 //création d'une fonction pour supprimer une todo
 deleteTodoList(id: number) {
  this.todoService.deleteTodo(id).subscribe(data => {
    console.log(data);
    this.router.navigate(['/todo']);
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
    this.router.navigate(['/todo']);
    todo.editingDescription = false;
  });
}

}
