import { Task } from './task'

export class TaskList {

    public tasks: Task[] = [];

    //################################################################################################

    //agrega una tarea al arreglo de tareas
    addTask(task: Task) {
        this.tasks.push(task);
    }

    //elimina la tarea con el ID especificado del arreglo de tareas
    removeTask(id: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks.splice(i, 1);
                //rompe el ciclo porque ya se ha encontrado la task con el id pasado por parámetro
                break;
            }
        }
    }

    //marca la tarea con el ID especificado como completa
    completeTask(id: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].completed = true;
                //rompe el ciclo porque ya se ha encontrado la task con el id pasado por parámetro
                break;
            }
        }
    }

    //imprime na consola a lista de tarefas, mostrando o seu ID, nome e se estão ou não concluídas.
    printTasks() {
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(`Id: ${this.tasks[i].id} \nName: ${this.tasks[i].name} \nCompleted: ${this.tasks[i].completed}`);
        }
    }
}