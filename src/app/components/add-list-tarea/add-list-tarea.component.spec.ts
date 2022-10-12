import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListTareaComponent } from './add-list-tarea.component';

describe('AddListTareaComponent', () => {
  let component: AddListTareaComponent;
  let fixture: ComponentFixture<AddListTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
