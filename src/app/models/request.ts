export interface Request {
    id?: number;
    timestamp: Date;
    courseName: string;
    courseCreditHours: number;
    courseTerm: string;
    message?: string;
}