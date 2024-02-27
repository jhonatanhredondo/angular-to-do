import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/Task';
import { AddTaskService } from '../../services/add-task.service';

@Component({
  selector: 'app-show-tasks',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.scss'
})
export class ShowTasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private addTaskService: AddTaskService) {
  }

  ngOnInit(): void {
    this.attTasksArray()
  }

  attTasksArray(): void {
    this.tasks = this.addTaskService.get()
  }

  completeTask(task: Task) {
    this.addTaskService.complete(task)
    this.attTasksArray()
  }

  undoTask(task: Task) {
    this.addTaskService.undo(task)
    this.attTasksArray()
  }

  removeTask(task: Task) {
    const removed = this.addTaskService.remove(task)
    if(!removed) alert("You need to finish the task first")
    this.attTasksArray()
  }
}
