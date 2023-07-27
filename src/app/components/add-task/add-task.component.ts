import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Task } from 'src/app/Tasks';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    } else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      // @todo - emit event
      this.onAddTask.emit(newTask);

      // this.text = '';
      // this.day = '';
      // this.reminder = false;
    }
  }
}
