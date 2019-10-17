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

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    CompteComponent,
    RecapitulatifComponent,
    PhoneNumberPipe,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
