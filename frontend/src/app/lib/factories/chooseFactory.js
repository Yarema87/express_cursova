import { ExerciseFactory } from "./exerciseFactory";
import { TrainingFactory } from "./trainingFactory";
import { ComplexFactory } from "./complexFactory";

export const getFactory = (type) => {
    if (type === 'exercise'){
        return new ExerciseFactory();
    }
    else if (type === 'training'){
        return new TrainingFactory();
    }
    else if (type === 'complex'){
        return new ComplexFactory();
    }
    else{
        throw new Error('Unknown type of entity');
    }
}