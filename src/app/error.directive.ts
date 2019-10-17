import { Directive, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  @Input() appError : Boolean = false ;

  constructor(private _element: ElementRef  ) {}
    
    ngOnChanges()  {
        if (!this.appError) 
          this._element.nativeElement.style.borderLeft  = '5px solid #a94442';
        else 
          this._element.nativeElement.style.borderLeft  = '5px solid #42A948';
    }


}