import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.todoService.sendToDo(form.value).subscribe(data => {
        console.log(data);
        form.resetForm();
      });
    }
    this.router.navigate(['/todo']); // redirection vers la list des todo une fois le todo enregistré dans la BD
  }
}
