import { Injectable } from '@angular/core';

@Injectable(
    // { providedIn: 'root' }
)
export class LocalCounterService {
  counter: number = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
