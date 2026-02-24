import statistic_service from "../services/statistic.service.js";

export const get_detailed_user_stats = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.id);
        const days = parseInt(req.params.days);
        const result = await statistic_service.get_detailed_user_stats(user_id, days);
        res.json({result});
    }
    catch(error){
        next(error);
    }
}

export const get_daily_streak = async (req, res, next) => {
    try{
        const user_id = parseInt(req.params.id);
        const streak = await statistic_service.get_daily_streak(user_id);
        res.json({streak, success: true});
    }
    catch(error){
        next(error);
    }
}
    