import { makeAutoObservable } from "mobx";

export type Task = {
  id: number;
  name: string;
  check: boolean;
};

class TaskStore {
  taskList: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(taskTitle: string) {
    this.taskList.push({ id: Date.now(), name: taskTitle, check: false });
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  checkTask(taskId: number) {
    console.log("checktask", taskId);
    let task = this.taskList.find((task) => task.id === taskId);
    if (task) task.check = !task.check;
  }

  deleteAllDoneTask() {
    this.taskList = this.taskList.filter((task) => !task.check);
  }
}

export default new TaskStore();
