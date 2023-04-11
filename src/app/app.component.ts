import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {delay} from "rxjs/operators";
import {Todo, TodosService} from "./todos.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    todos: Todo[] = [];

    todoTitle:string = '';
    loading: boolean = false;
    error: string = '';

    constructor(private todoService: TodosService) {
    }

    ngOnInit(): void {
        this.fetchTodos();
    }

    addTodo(): void {
        if (!this.todoTitle.trim()) {
            return;
        }
        this.todoService.addTodo({
            title: this.todoTitle,
            completed: false
        }).subscribe(todo => {
            this.todos.push(todo);
            this.todoTitle = '';
        })
    }

    fetchTodos(): void {
        this.loading = true;
        this.todoService.fetchTodos()
            .subscribe(todos => {
                // console.log('Response', todos);
                this.todos = todos;
                this.loading = false;
            }, error => {
                console.log(error.message);
                this.error = error.message;
            })
    }

    removeTodo(id: number): void {
        this.todoService.removeTodo(id)
            .subscribe(() => {
                this.todos = this.todos.filter(t => t.id !== id);
            })
    }

    completeTodo(id: number) {
        this.todoService.completeTodo(id)
            .subscribe(todo => {
                // todo = JSON.parse(todo);
                this.todos.find(t => t.id === todo.id).completed = true;
            })
    }
}

