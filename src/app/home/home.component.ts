import { Component, inject, OnDestroy } from '@angular/core';
import { DemoObservableService } from '../common/demo-observable.service';
import { Observable, Subscription, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  demoObsService = inject(DemoObservableService);
  myObservable: Observable<number> | undefined;
  errorMessage: string | undefined;
  private subs: Subscription[] = [];

  onClick() {
    const subscription = this.demoObsService.getObservable()
      .pipe(
        map((x) => x * 10), // Transformation du résultat
        take(2), // Traiter seulement les 2 premières réponses
        catchError((error) => {
          this.errorMessage = 'Une erreur est survenue';
          return of(99999); // Retourner un nombre plus grand en cas d'erreur
        })
      )
      .subscribe((result: number) => {
        console.log("result = ", result);
      });

    this.subs.push(subscription);
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
