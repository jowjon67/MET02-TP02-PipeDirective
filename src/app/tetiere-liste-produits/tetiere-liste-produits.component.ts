import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tetiere-liste-produits',
  templateUrl: './tetiere-liste-produits.component.html',
  styleUrls: ['./tetiere-liste-produits.component.scss']
})
export class TetiereListeProduitsComponent implements OnInit {

  constructor() { }
  cheminImage:any = "pictures/test.jpg";
  ngOnInit() {
  }

}
