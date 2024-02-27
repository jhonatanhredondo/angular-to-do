import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskService } from '../../services/add-task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  task: string = ""
  constructor(private addTaskService: AddTaskService){}
  addNewTask() {
    if(this.task) {
      this.addTaskService.add(this.task)
      this.task = ""
    }
  }
}
