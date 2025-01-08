import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cripto } from '../interface/Cripto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

  constructor(private http: HttpClient ) { }

  getCriptos():Observable<Cripto[]> {
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '100',
      page: '1',
    };
    return this.http.get<Cripto[]>(this.apiUrl, { params });
  }

}
