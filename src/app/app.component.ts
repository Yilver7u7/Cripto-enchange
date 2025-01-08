import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriptoTableComponent } from "./components/cripto-table/cripto-table.component";
import { PruebaComponent } from "./components/prueba/prueba.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CriptoTableComponent, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cripto';
}
