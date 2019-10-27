import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetiereListeProduitsComponent } from './tetiere-liste-produits.component';

describe('TetiereListeProduitsComponent', () => {
  let component: TetiereListeProduitsComponent;
  let fixture: ComponentFixture<TetiereListeProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetiereListeProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetiereListeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
