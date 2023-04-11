import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
    @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>();
    myTask: string = '';
    dataUpdated = new EventEmitter<string>();

    addTask() {
        if (this.myTask.trim()) {
            const newTask: Task = {
                title: this.myTask,
                isDone: false,
                id: Math.random()
            }
            // console.log(newTask);
            this.onAdd.emit(newTask);
            this.myTask = '';
        }
    }
}
