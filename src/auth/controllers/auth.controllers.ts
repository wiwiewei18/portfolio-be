import { Request, Response } from "express";
import { OutgoingMessage } from "http";

import { AuthServices } from "../services/auth.services";
import { APIResponse } from "../../helpers/apiResponse.helper";

export class AuthControllers extends AuthServices {
    async registerController(req: Request, res: Response): Promise<OutgoingMessage> {
        try {
            const serviceResponse: APIResponse = await super.registerService(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (error: any) {
            return res.status(error.stat_code).json(error)
        }
    }
}