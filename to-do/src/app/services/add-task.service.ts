import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
  tasks: Task[] = []
  constructor() { }

  get(): Task[] {
    return this.tasks
  }

  add(task: string):void {
    let randomId: number
    do {
      randomId = Math.floor(Math.random() * 100);
    } while (this.tasks.some(task => task.id === randomId))
    this.tasks.push({id: randomId, task: task, completed: false})
  }

  complete(task: Task): void {
    const currentTask = this.tasks.find((t) => t.id === task.id)
    if(currentTask) {
      currentTask.completed = true
      const index = this.tasks.indexOf(currentTask);
      this.tasks.splice(index, 1, currentTask);
    }
  }

  undo(task: Task): void {
    const currentTask = this.tasks.find((t) => t.id === task.id)
    if(currentTask) {
      currentTask.completed = false
      const index = this.tasks.indexOf(currentTask);
      this.tasks.splice(index, 1, currentTask);
    }
  }

  remove(task: Task): boolean {
    if(task.completed) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
      return true
    } 
    return false
  }
}
