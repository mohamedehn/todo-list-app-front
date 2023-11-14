export class TODO {
    id: number;
    name: string;
    description: string;
    show: boolean;
    editingDescription: boolean;

    constructor(id: number, name: string, description: string, show: boolean, editingDescription: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.show = show;
        this.editingDescription = editingDescription;
    }
}

