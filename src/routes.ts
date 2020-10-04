import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import oresController from './controllers/oresController';

const OreController = new oresController();

const routes = Router();

routes.get('/ores', OreController.index);

routes.post('/ores', celebrate({
    body: Joi.object({
        oreId: Joi.string().required(),
        oreName: Joi.string().required(),
        tier: Joi.number().required()
    })
}), OreController.create);

export default routes;