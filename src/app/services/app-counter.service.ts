import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({ providedIn: 'root' })

export class AppCounterService {
    counter: number = 0
    constructor( private logServices: LogService) {
    }
    increase() {
        this.logServices.log('increase counter')
        this.counter++
    }

    decrease() {
        this.logServices.log('decrease counter')
        this.counter--
    }
}