import program_service from "../services/program.service.js";

export const get_programs = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.user_id);
        const programs = await program_service.get_programs(user_id);
        res.json({programs});
    }
    catch(error){
        next(error);
    }
}

export const get_program = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const program = await program_service.get_program(id);
        res.json({program});
    }
    catch(error){
        next(error);
    }
}

export const get_user_programs = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.user_id);
        const status = req.params.status;
        const programs = await program_service.get_user_programs(status, user_id);
        res.json({programs});
    }
    catch(error){
        next(error);
    }
}

export const add_program = async (req, res, next) => {
    try{
        const data = req.body;
        const program = await program_service.add_program(data);
        res.json({program, success: true});
    }
    catch(error){
        next(error);
    }
}

export const edit_program = async (req, res, next) => {
    try{
        const data = req.body;
        const program_id = parseInt(req.params.id);
        const program = await program_service.edit_program(data, program_id);
        res.json({program, success: true});
    }
    catch(error){
        next(error);
    }
}

export const delete_program = async (req, res, next) => {
    try{
        const program_id = parseInt(req.params.id);
        await program_service.delete_program(program_id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}