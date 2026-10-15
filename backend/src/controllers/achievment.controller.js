import achievment_service from "../services/achievment.service.js";

export const get_user_achievments = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.userId);
        const user_achievments = await achievment_service.get_user_achievments(userId);
        res.json({user_achievments});
    }
    catch(error){
        next(error);
    }
}