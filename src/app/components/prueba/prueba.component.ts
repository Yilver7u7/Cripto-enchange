import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coin } from '../../interface/Coin';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'component-prueba',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent implements OnInit{

  constructor(private http:HttpClient ){}

  searchText: string = '';

  titles:string[] = [
    '#',
   'Coin',
   'Price',
   'Price Change 24h',
   '24 volume',]

  Coins: Coin[] =[];

  //Al iniciar hace una request
  ngOnInit(): void {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').subscribe(
      (data) => {this.Coins = data;},
      (err) => {console.log(err);}
    )
  }

  searchCoin(){
    console.log('Buscando')
  }

}
