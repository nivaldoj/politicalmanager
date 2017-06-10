import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalacaoComponent } from './escalacao.component';

describe('EscalacaoComponent', () => {
  let component: EscalacaoComponent;
  let fixture: ComponentFixture<EscalacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
