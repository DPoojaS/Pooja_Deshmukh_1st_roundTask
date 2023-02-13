import { Component, OnInit } from '@angular/core';
import { Itodo } from './shared/model/todo';
import { TodosService } from './shared/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'interviewOne';
  todosArray : Itodo[] = []
  constructor(private todosService : TodosService){

  }
  ngOnInit(): void {
   
    this.todosService.getAllData().subscribe(res =>{
      console.log(res)

    })
  }
}
