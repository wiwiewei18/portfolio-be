import { Request } from "express";
import { StatusCodes as status } from "http-status-codes";

import { apiResponse } from "../../helpers/apiResponse.helper";

export class AuthServices {
    async registerService(req: Request): Promise<any> {
        return Promise.resolve(apiResponse(status.OK, "Registered successfully"))
    }
}