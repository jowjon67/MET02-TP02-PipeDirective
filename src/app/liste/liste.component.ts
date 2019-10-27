import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs'; 
import { map,tap  } from 'rxjs/operators';

import {Service } from '../service.service'
import {Product} from '../models/product'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor(private apiService : Service) { }
  produits : Observable<Product[]>;

  private filteredProducts : Observable<Product[]>;
  public isEmpty : boolean = false;

  @Input() filterContent : String; 

  ngOnInit() {
    this.produits = this.apiService.getProduitBackend();
  }

  
  sendFiltreParNom(filter : string)
  {
    this.filterContent = filter;
    this.isEmpty = false;
    this.filteredProducts = null;
    if (this.filterContent === ""){
      this.filteredProducts = this.produits;
      return; 
    }
    
/*
    this.produits.forEach(obs => obs)
    {
        if (obs.product_name.toLowerCase().includes(this.filterContent.toLowerCase().trim()))
        {
          this.filteredProducts.push(this.produits[i]);
        }
    }
    if (this.filteredProducts.length == 0)
      this.isEmpty = true;
      */
  }

}
