import './style.css';
import { of, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

export class RXJSPractise {
  pokerman$: Observable<string>;

  constructor() {
    this.pokerman$ = of('water', 'beer');
    this.init();
  }

  private init(): void {
    this.pokerman$
      .pipe(
        filter(type => type === 'water'),
        map(add => 'got poker ' + add),
        tap(log => console.log('poker log ', log))
      )
      .subscribe(finalData => {
        console.log('save data to poker db session ', finalData);
      });
  }
}
