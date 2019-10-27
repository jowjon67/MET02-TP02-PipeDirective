
import { Injectable } from '@angular/core';
import { Observable,of,from,interval } from 'rxjs'; 
import { map,tap  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http : HttpClient) { }
  
  public getProduitBackend() : Observable<any> {
    return this.http.get (environment.backendProduit);
  }
}
