import exercise_service from "../services/exercise.service.js";

export const get_exercises = async (req, res, next) => {
    try{
        const type = req.params.type;
        const exercises = await exercise_service.get_exercises(type);
        res.json({exercises});
    }
    catch(error){
        next(error);
    }
}

export const get_all_exercises = async (req, res, next) => {
    try{
        const exercises = await exercise_service.get_all_exercises();
        res.json({exercises});
    }
    catch(error){
        next(error);
    }
}

export const get_exercise = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const exercise = await exercise_service.get_exercise(id);
        res.json({exercise});
    }
    catch(error){
        next(error);
    }
}

export const add_exercise = async (req, res, next) => {
    try{
        const data = req.body;
        const exercise = await exercise_service.add_exercise(data);
        res.json({exercise, success: true});
    }
    catch(error){
        next(error);
    }
}

export const edit_exercise = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const data = req.body;
        const exercise = await exercise_service.edit_exercise(data, id);
        res.json({exercise, success: true});
    }
    catch(error){
        next(error);
    }
}

export const delete_exercise = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        await exercise_service.delete_exercise(id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}
    