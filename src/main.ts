import './style.css'
import { Task } from './myResources/task';
import { TaskList } from './myResources/taskList';

//Crear una instancia de ‘TaskList’
const myTaskList: TaskList = new TaskList();

//Agregar algunas tareas
const task1: Task = {
  id: 1,
  name: 'Go to the dentist.',
  completed: false
}

const task2: Task = {
  id: 2,
  name: 'Buy salt.',
  completed: false
}

const task3: Task = {
  id: 3,
  name: 'Go to the mechanic.',
  completed: false
}

const task4: Task = {
  id: 4,
  name: 'Doctor appointment.',
  completed: false
}

const task5: Task = {
  id: 5,
  name: 'Wash the car.',
  completed: false
}

myTaskList.addTask(task1);
myTaskList.addTask(task2);
myTaskList.addTask(task3);
myTaskList.addTask(task4);
myTaskList.addTask(task5);

//Imprime la lista de tareas
myTaskList.printTasks();

//marcar una tarea como completada
myTaskList.completeTask(1);

//eliminar otra tarea
myTaskList.removeTask(2);

//imprimir la lista de tareas actualizada.
console.log("--------------------------");
myTaskList.printTasks();