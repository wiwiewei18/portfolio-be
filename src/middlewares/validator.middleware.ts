import { Request, Response, NextFunction } from 'express'
import { StatusCodes as status } from 'http-status-codes'

import { apiResponse } from "../helpers/apiResponse.helper"

export const validator = (dto: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = dto.validate({ ...req.body, ...req.params, ...req.query }, { abortEarly: false })

        if (error) {
            const errorMessages = error.details.map((error: any) => apiResponse(status.BAD_REQUEST, error.message))
            if (errorMessages.length) return res.status(status.BAD_REQUEST).json({ errors: errorMessages })
        }

        return next()
    }
}