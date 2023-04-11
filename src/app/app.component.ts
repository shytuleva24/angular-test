import {Component} from '@angular/core';

export interface Task {
    title: string,
    isDone: boolean,
    id: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    tasks: Task[] = [
        {
            title: 'Самостоятельно сделать тудулист',
            isDone: false,
            id: Math.random()
        },
        {
            title: 'Сьесть вкусные блинчики заиньки',
            isDone: true,
            id: Math.random()
        }
    ];
    filterState: boolean = null;
    get filteredItems(): Task[] {
        if (this.filterState === null) {
            return this.tasks;
        }
        return this.tasks.filter(task => this.filterState === task.isDone);
    }
    addTask(task: Task): void {
        this.tasks.unshift(task);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    filterTask(state: boolean): void {
        this.filterState = state;
        // this.filteredTasks = this.tasks.filter(task => task.isDone == b);
    }

}

