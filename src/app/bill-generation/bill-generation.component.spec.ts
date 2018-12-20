import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGenerationComponent } from './bill-generation.component';

describe('BillGenerationComponent', () => {
  let component: BillGenerationComponent;
  let fixture: ComponentFixture<BillGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
