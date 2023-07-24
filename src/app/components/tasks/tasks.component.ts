import { Component } from '@angular/core';
import { Task } from '../../Tasks';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
