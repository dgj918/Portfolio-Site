import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarTitleService {
  private currentTitle = new BehaviorSubject<string>('Home')
  currentTitle$ = this.currentTitle.asObservable()

  constructor() { }

  changeTitle(newTitle: string){
    this.currentTitle.next(newTitle)
  }
}
