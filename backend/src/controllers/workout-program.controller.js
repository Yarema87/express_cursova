import workout_program_service from "../services/workout-program.service.js";

export const add_workout_to_program = async (req, res, next) => {
    try{
        const data = req.body;
        const model = await workout_program_service.add_workout_to_program(data);
        res.json({model, success: true});
    }
    catch(error){
        next(error);
    }
}

export const get_program_workouts = async (req, res, next) => {
    try{
        const program_id = parseInt(req.params.programId);
        const workouts = await workout_program_service.get_program_workouts(program_id);
        res.json({workouts});
    }
    catch(error){
        next(error);
    }
}

export const get_program_workout = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const model = await workout_program_service.get_program_workout(id);
        res.json({model});
    }
    catch(error){
        next(error);
    }
}

export const get_workout_program_links = async (req, res, next) => {
    try{
        const links = await workout_program_service.get_workout_program_links();
        res.json({links});
    }
    catch(error){
        next(error);
    }
}

export const edit_program_workout = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const data = req.body;
        const model = await workout_program_service.edit_program_workout(id, data);
        res.json({model, success: true});
    }
    catch(error){
        next(error);
    }
}

export const delete_program_workout = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        await workout_program_service.delete_program_workout(id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}