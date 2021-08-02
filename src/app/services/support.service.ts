import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SupportService {

  constructor() { }
  arrayShuffle<T>(array: T[]): T[]{
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
    // tslint:disable-next-line: align
    [ array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}
