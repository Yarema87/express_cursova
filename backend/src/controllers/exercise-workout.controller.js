import exercise_workout_service from "../services/exercise-workout.service.js";

export const add_exercise_to_workout = async (req, res, next) => {
    try{
        const data = req.body;
        const model = await exercise_workout_service.add_exercise_to_workout(data);
        res.json({model, success: true});
    }
    catch(error){
        next(error);
    }
}

export const get_workout_exercises = async (req, res, next) => {
    try{
        const workout_id = parseInt(req.params.id);
        const exercises = await exercise_workout_service.get_workout_exercises(workout_id);
        res.json({exercises});
    }
    catch(error){
        next(error);
    }
}

export const get_workout_exercise = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const model = await exercise_workout_service.get_workout_exercise(id);
        res.json({model});
    }
    catch(error){
        next(error);
    }
}

export const get_exercise_workout_links = async (req, res, next) => {
    try{
        const links = await exercise_workout_service.get_exercise_workout_links();
        res.json({links});
    }
    catch(error){
        next(error);
    }
}

export const edit_exercise_in_workout = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const data = req.body;
        const model = await exercise_workout_service.edit_exercise_in_workout(id, data);
        res.json({model, success: true});
    }
    catch(error){
        next(error);
    }
}

export const delete_exercise_in_workout = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        await exercise_workout_service.delete_exercise_in_workout(id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}