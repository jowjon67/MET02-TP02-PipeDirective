import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgControl, NgForm } from '@angular/forms';
import { Donnees }    from '../models/donnees';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit 
{
  ngOnInit() {

  }

      civilite = ['M','Mlle', 'Mme'];
      
    model = new Donnees(18, null, "EHRHARD", "Jonathan", "", "", "Mr-Jooo", "", "", "10 rue de la cité", null, "67114" );

    submitted = false;

    getValidationTelFixe() : boolean {
      return (/^[0-9]{9,9}$/.test (this.model.telFixe));    
    }
    getValidationTelPort() : boolean {
      return (/^[0-9]{9,9}$/.test (this.model.telPort));    
    }
    getValidationNom() : boolean {
      return (/^[A-Za-z]+$/.test (this.model.nom));  
    }
    getValidationPrenom() : boolean {
      return (/^[A-Za-z]+$/.test (this.model.prenom));  
    }
    getValidationMdp()
    {
      if(this.model.motPasse1 == this.model.motPasse2 && this.model.motPasse1!="")
      {
        return true;
      }  
      return false;
    }
    getValidationCP() : boolean {
      return (/^[0-9]{5,5}$/.test (this.model.cp));  
    }

    onSubmit() { this.submitted = true; }


}
