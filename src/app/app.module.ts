import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { FormsModule} from '@angular/forms';
import { PhoneNumberPipe } from './phone-numbre.pipe';
import { ErrorDirective } from './error.directive';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { FiltreProduitsComponent } from './filtre-produits/filtre-produits.component';
import { TetiereListeProduitsComponent } from './tetiere-liste-produits/tetiere-liste-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    CompteComponent,
    RecapitulatifComponent,
    PhoneNumberPipe,
    ErrorDirective,
    ListeComponent,
    FiltreProduitsComponent,
    TetiereListeProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
