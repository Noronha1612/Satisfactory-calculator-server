import { Request, Response } from 'express';
import Ores from '../database/models/ores';
import Fluids from '../database/models/fluids';
import Components from '../database/models/components';

export default class componentsController {
    async index(request: Request, response: Response) {
        try {
            const data = await Ores.find();

            return response.status(200).json({ error: false, data })
        } catch (err) {
            console.log(err);

            return response.status(500).json({ error: true, message: 'Internal Server Error' });
        }
    }

    async create(request: Request, response: Response) {
        try {
            const { oreId, oreName, tier } = request.body as { oreId: string, oreName: string, tier: number };

            const data = {
                id: oreId,
                name: oreName,
                tier
            }

            await Ores.create(data);

            return response.status(200).json({ error: false, data: [data] });
        } catch (err) {
            console.log(err);

            return response.status(500).json({ error: true, message: 'Internal Server Error' });
        }
    }
}