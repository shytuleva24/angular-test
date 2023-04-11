import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Output() onRemove = new EventEmitter<number>()
  @Input() task: Task
  constructor() { }

  removeTask() {
    this.onRemove.emit(this.task.id)
  }
}
