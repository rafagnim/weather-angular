import { Component, OnInit } from "@angular/core";

import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from 'src/app/shared/state/app.reducer';
import { Units } from 'src/app/shared/models/units.enum';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';
import * as fromConfigActions from '../../../../shared/state/config/config.actions';

import * as fromHomeSelectors from '../../../home/state/home.selectors';
import * as fromHomeActions from '../../../home/state/home.actions'

import { CityWeather } from "src/app/shared/models/weather.model";

@Component({
  selector: 'jv-unit-selector',
  templateUrl: 'unit-selector.component.html',
  styleUrls: ['unit-selector.component.scss'],
})
export class UnitSelectorComponent implements OnInit {

  unit$: Observable<Units>;
  unit: Units;

  cityWeather$: Observable<CityWeather>;
  cityWeather: CityWeather;
  private componentDestroyed$ = new Subject();
  id: number;

  unitsEnum = Units;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    this.unit$
      .subscribe(unit => this.unit = unit);
  }

  updateUnit(unit: Units) {
    this.store.dispatch(fromConfigActions.updateUnit({ unit }));

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.cityWeather$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.cityWeather = value);

    if(this.cityWeather) {
      this.id = this.cityWeather.city.id;
      this.updateCity(this.cityWeather.city.name);
    }
  }

  updateCity(query: string) {
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }))
  }
}
