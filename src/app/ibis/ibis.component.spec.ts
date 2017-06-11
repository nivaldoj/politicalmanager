import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbisComponent } from './ibis.component';

describe('IbisComponent', () => {
  let component: IbisComponent;
  let fixture: ComponentFixture<IbisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
