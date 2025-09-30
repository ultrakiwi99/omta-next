type TrainingSystem = {
    id: string;
    name: string;
    exercises: {
        id: string;
        name: string;
        sets: number;
        reps: number;
        weight: number;
    }[]
}

type TrainingSession = {
    id: string;
    date: string;
    isFinished: boolean;
    system: TrainingSystem;
    finishedExercises: {
        exerciseId: string;
        isCompleted: boolean;
    }[]
}

type Exercise = {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
}