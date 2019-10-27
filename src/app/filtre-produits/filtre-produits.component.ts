import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filtre-produits',
  templateUrl: './filtre-produits.component.html',
  styleUrls: ['./filtre-produits.component.scss']
})
export class FiltreProduitsComponent implements OnInit {

  @Output() filter : EventEmitter<String> = new EventEmitter<String>();
  filtreNom : String = "";

  constructor() { }

  ngOnInit() {
  }

  sendFiltreParNom(){
    this.filter.emit(this.filtreNom);
  }

}
