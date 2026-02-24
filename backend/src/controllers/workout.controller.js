import workout_service from "../services/workout.service.js";

export const get_workouts = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.userId);
        const workouts = await workout_service.get_workouts(user_id);
        res.json({workouts});
    }
    catch(error){
        next(error);
    }
}

export const get_workout = async (req, res, next) => {
    try{
        const workout_id = parseInt(req.params.id);
        const workout = await workout_service.get_workout(workout_id);
        res.json({workout});
    }
    catch(error){
        next(error);
    }
}

export const get_user_workouts = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.userId);
        const status = req.params.status;
        const workouts = await workout_service.get_user_workouts(user_id, status);
        res.json({workouts});
    }
    catch(error){
        next(error);
    }
}

export const add_workout = async (req, res, next) => {
    try{
        const data = req.body;
        const workout = await workout_service.add_workout(data);
        res.json({workout, success: true});
    }
    catch(error){
        next(error);
    }
}

export const edit_workout = async (req, res, next) => {
    try{
        const data = req.body;
        const workout_id = parseInt(req.params.workoutId);
        const workout = await workout_service.edit_workout(workout_id, data);
        res.json({workout, success: true});
    }
    catch(error){
        next(error);
    }
}

export const delete_workout = async (req, res, next) => {
    try{
        const workout_id = parseInt(req.params.workoutId);
        await workout_service.delete_workout(workout_id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}

export const finish_workout = async (req, res, next) => {
    try{
        const data = req.body;
        const log = await workout_service.finish_workout(data);
        res.json({log, success: true});
    }
    catch(error){
        next(error);
    }
}

export const done_workout = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.userId);
        const workout_id = parseInt(req.params.workoutId);
        const workout = await workout_service.done_workout(user_id, workout_id);
        if(workout){
            res.json({workout, success: true});
        }
        else{
            res.json({success: false});
        }
    }
    catch(error){
        next(error);
    }
}