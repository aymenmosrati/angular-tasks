import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private shoxAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggelAddTask(): void {
    this.shoxAddTask = !this.shoxAddTask;
    this.subject.next(this.shoxAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
