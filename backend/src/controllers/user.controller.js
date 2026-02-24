import user_service from "../services/user.service.js";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SECRET);

export const login = async (req, res, next) => {
    try{
        const data = req.body;
        const {user, token, remember} = await user_service.login(data);

        res.cookie('userToken', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: remember ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 12,
        })

        res.json({user, success: true});
    }
    catch (error){
        next(error);
    }
}

export const sign_up = async (req, res, next) => {
    try{
        const data = req.body;
        const {user, token} = await user_service.sign_up(data);

        res.cookie('userToken', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 60 * 60 * 12,
        })

        res.json({user, success: true})
    }
    catch (error) {
        next(error);
    }
}

export const get_user_data = async (req, res, next) => {
    try{
        const token = req.cookies.userToken;
        if (!token){
            return res.status(401).json('User not authorized');
        }
        const {payload} = await jwtVerify(token, secret);
        if (!payload.id){
            return res.status(401).json('User not authenticated');
        }
        const user = await user_service.get_user_data(payload.id);
        res.json({user, success: true});
    }
    catch(error){
        next(error);
    }
}

export const edit_user_data = async (req, res, next) => {
    try{
        const token = req.cookies.userToken;
        if(!token){
            return res.status(401).json('User not autorized');
        }
        const {payload} = await jwtVerify(token, secret);
        if(!payload.id){
            return res.status(401).json('User not authenticated');
        }
        const data = req.body;
        const user = await user_service.edit_user_data(payload.id, data);
        res.json({user, success: true});
    }
    catch(error){
        next(error);
    }
}

export const log_out = async (req, res, next) => {
    try{
        res.clearCookie('userToken', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        });
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}

export const get_user_stats = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.id);
        const user_stats = await user_service.get_user_stats(user_id);
        res.json({user_stats});
    }
    catch(error){
        next(error);
    }
}

export const add_user_program = async (req, res, next) => {
    try{
        const data = req.body;
        const model = await user_service.add_user_program(data);
        res.json({model, success: true});
    }
    catch(error){
        next(error);
    }
}

export const get_user_programs = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.id);
        const programs = await user_service.get_user_programs(user_id);
        res.json({programs});
    }
    catch(error){
        next(error);
    }
}

export const delete_user_program = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        await user_service.delete_user_program(id);
        res.json({success: true});
    }
    catch(error){
        next(error);
    }
}