export class Request {
    public id: number;
    public timestamp: string;
    public courseName: string;
    public courseCreditHours: number;
    public courseTerm: string;
    public message: string;

    constructor(id: number, timestamp: string, courseName: string, courseCreditHours: number, courseTerm: string, message: string ) {
        this.id = id;
        this.timestamp = timestamp;
        this.courseName = courseName;
        this.courseCreditHours = courseCreditHours;
        this.courseTerm = courseTerm;
        this.message = message;
    }
}