import 'dotenv/config'
import express, { Express, Response, Request } from 'express'
import { StatusCodes as status } from 'http-status-codes'

import { apiResponse } from './helpers/apiResponse.helper'
import { Database } from './configs/database.config'
import authRoutes from './auth/routes/auth.routes'

export class App {
    private app: Express
    private port: number
    private version: string

    constructor() {
        this.app = express()
        this.port = Number(process.env.PORT)
        this.version = '/api/v1'
    }

    private async connection(): Promise<void> {
        return new Database().connect()
    }

    private middleware(): void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private route(): void {
        this.app.use(`${this.version}/auth`, authRoutes)
    }

    private globalRoute(): void {
        this.app.all(['/', this.version], (_req: Request, res: Response) => res.status(status.OK).json(apiResponse(status.OK, 'Server Ping !')))
    }

    private run(): void {
        const serverInfo: string = `Server is running on port: ${this.port}`
        const connection = this.connection();

        connection.then(() => {
            this.app.listen(this.port, () => console.info(serverInfo))
        })
    }

    public async main(): Promise<void> {
        this.middleware()
        this.route()
        this.globalRoute()
        this.run()
    }
}

new App().main()