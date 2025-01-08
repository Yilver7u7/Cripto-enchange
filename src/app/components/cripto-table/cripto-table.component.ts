import { Component, OnInit } from '@angular/core';
import { Cripto } from '../../interface/Cripto';
import { CriptoService } from '../../services/cripto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cripto-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cripto-table.component.html',
  styleUrls: ['./cripto-table.component.css']
})
export class CriptoTableComponent {

  criptos: Cripto[] = [];

  constructor(private criptoService:CriptoService) { }

  // ngOnInit(): void {
  //   this.criptoService.getCriptos().subscribe((data) => {
  //     this.criptos = data;
  //   })
  // }

}
