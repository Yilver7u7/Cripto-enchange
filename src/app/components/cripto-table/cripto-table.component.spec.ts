import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoTableComponent } from './cripto-table.component';

describe('CriptoTableComponent', () => {
  let component: CriptoTableComponent;
  let fixture: ComponentFixture<CriptoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriptoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriptoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
