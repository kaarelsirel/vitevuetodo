export interface Task {
    id: string;
    name: string;
    isCompleted: boolean;
}

export interface TaskSearchResult {
    task: Task;
    index: string;
}