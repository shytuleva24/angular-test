import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})

export class AuthService {
    private isAuth: boolean = false

    login() {
        this.isAuth = true
    }

    logOut () {
        this.isAuth = false
    }
    isAithenticated(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            setTimeout(()=> {
                resolve(this.isAuth)
            }, 500)
        })
    }
}