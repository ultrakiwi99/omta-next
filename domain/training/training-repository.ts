import { Training, TrainingRepository } from "./types";

export class MemoryTrainingRepository implements TrainingRepository {
    private trainings: Training[] = [];

    constructor() {
        this.trainings = [];
    }

    async create(): Promise<Training> {
        const newTraining: Training = {
            id: (Math.random() * 1000000).toFixed(0),
            name: "New Training",
            duration: 0,
            exercises: [
                {
                    id: (Math.random() * 1000000).toFixed(0),
                    name: "New Exercise",
                    description: "Some test Exercise",
                    sets: 0,
                    weight: 0,
                    reps: 0,
                    isDone: false,
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.trainings.push(newTraining);
        return { ...newTraining };
    }

    async getOne(id: string): Promise<Training | null> {
        const training = this.trainings.find((t) => t.id === id);
        return training ? { ...training } : null;
    }
}
