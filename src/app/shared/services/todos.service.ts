import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl : string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http : HttpClient) { }

  getAllData():Observable<Itodo[]>{
    return this.http.get<Itodo[]>(this.baseUrl).pipe(   
      map((res : Itodo[]) =>{
        let arr: Itodo[] = [];
        let count: any = { };

        res.map((todos : Itodo) =>{
          if(todos.userId in count){
            count[todos.userId] += 1
          }else{
            count[todos.userId] = 1
          }
        })
       
        return count
      })
    )
  }



}
