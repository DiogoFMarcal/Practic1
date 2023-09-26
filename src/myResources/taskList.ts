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
        let taskWithIdwasFound: boolean = false;

        this.tasks.forEach((task) => {
            if (task.id == id && !taskWithIdwasFound) {
                const index = this.tasks.indexOf(task);
                if (index != -1) {
                    taskWithIdwasFound = true;
                    this.tasks.splice(index, 1);
                }
            }
        });
    }

    //marca la tarea con el ID especificado como completa
    completeTask(id: number) {
        let taskWithIdwasFound: boolean = false;

        this.tasks.forEach((task) => {
            if (task.id == id && !taskWithIdwasFound) {
                taskWithIdwasFound = true;
                task.completed = true;
            }
        });
    }

    //imprime na consola a lista de tarefas, mostrando o seu ID, nome e se estão ou não concluídas.
    printTasks() {
        this.tasks.forEach((task) => {
            console.log(`Id: ${task.id} \nName: ${task.name} \nCompleted: ${task.completed}`);
        });
    }
}