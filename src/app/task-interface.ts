export class Task {
    taskId: number;
    name: string;
    dueDate: Date;
    category: string;

    constructor(id: number, name: string, dueDate: Date, category: string) {
        this.taskId = id;
        this.name = name;
        this.dueDate = dueDate;
        this.category = category;
    }
}