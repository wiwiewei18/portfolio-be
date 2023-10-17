export interface APIResponse {
    stat_code: number
    stat_message: string
    data?: any
    pagination?: Record<string, any>
}

export const apiResponse = (code: number, message: string, data?: any, pagination?: Record<string, any>): APIResponse => {
    if (!data) {
        return {
            stat_code: code,
            stat_message: message
        }
    } else {
        return {
            stat_code: code,
            stat_message: message,
            data: data,
            pagination: pagination
        }
    }
}
