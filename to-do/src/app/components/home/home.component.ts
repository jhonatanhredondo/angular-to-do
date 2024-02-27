import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { Task } from '../../interfaces/Task';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ShowTasksComponent } from '../show-tasks/show-tasks.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, AddTaskComponent, ShowTasksComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks: Task[] = []

  constructor() {
  }

}
