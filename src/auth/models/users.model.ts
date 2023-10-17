import { Schema, model } from 'mongoose'

import { IUsers } from '../interfaces/user.interface'

const userSchema = new Schema<IUsers>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    updated_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    deleted_at: {
        type: Date,
    },
})

export const UsersModel = model<IUsers>('User', userSchema)
