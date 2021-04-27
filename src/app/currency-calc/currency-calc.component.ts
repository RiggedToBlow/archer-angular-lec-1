import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.component.html',
  styleUrls: ['./currency-calc.component.scss']
})
export class CurrencyCalcComponent implements OnInit {

  currencies$ = this.getCurrencies()

  form = this.fb.group({
    currency: [''],
    syp: [''],
  })

  get currency() {
    return this.form.controls.currency
  }

  get syp() {
    return this.form.controls.syp
  }

  askbid$ = combineLatest([
    this.currency.valueChanges,
    this.syp.valueChanges,
    this.currencies$
  ]).pipe(
    map(([currency, sypAmount, currencies])=>{
      const selectedCurrency = currencies.find(cur=>cur.name===currency)
      return {ask:sypAmount * +selectedCurrency!.ask, bid:sypAmount * +selectedCurrency!.bid}
    })
  )

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  getCurrencies() {
    return this.http.get<Currency[]>(`https://sp-today.com/app_api/cur_damascus.json?1619429785724`)
  }

}


interface Currency {
  "name": string,
  "ask": string,
  "bid": string,
  "arrow": string,
  "ar_name": string,
  "icon": string,
  "change": string,
  "change_percentage": string,
}

