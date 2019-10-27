import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreProduitsComponent } from './filtre-produits.component';

describe('FiltreProduitsComponent', () => {
  let component: FiltreProduitsComponent;
  let fixture: ComponentFixture<FiltreProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
