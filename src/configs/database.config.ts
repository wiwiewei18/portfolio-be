import 'dotenv/config'
import mongoose from 'mongoose'

export class Database {
    private username: string | undefined
    private password: string | undefined
    private databaseName: string | undefined
    private connectionString: string

    constructor() {
        this.username = process.env.DB_USER
        this.password = process.env.DB_PASSWORD
        this.databaseName = process.env.DB_NAME

        this.connectionString = `mongodb+srv://${this.username}:${this.password}@cluster0.zcz2l4z.mongodb.net/${this.databaseName}?retryWrites=true&w=majority`
    }

    public async connect() {
        return mongoose.connect(this.connectionString)
            .then(res => {
                if (res) {
                    console.log(`Database connection succeffully to ${this.databaseName}`)
                }

            }).catch(err => {
                console.log(err)
            })
    }
}