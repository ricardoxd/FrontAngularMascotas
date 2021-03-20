import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMascotasComponent } from './show-mascotas.component';

describe('ShowMascotasComponent', () => {
  let component: ShowMascotasComponent;
  let fixture: ComponentFixture<ShowMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
