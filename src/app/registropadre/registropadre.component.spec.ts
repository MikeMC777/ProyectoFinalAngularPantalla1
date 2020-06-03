import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropadreComponent } from './registropadre.component';

describe('RegistropadreComponent', () => {
  let component: RegistropadreComponent;
  let fixture: ComponentFixture<RegistropadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
