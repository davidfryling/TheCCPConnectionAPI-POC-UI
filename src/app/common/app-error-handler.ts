import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler { // global error handler
    handleError(error: Response) {
        alert('An unexpected error has occurred');
        console.log(error);
    }
}