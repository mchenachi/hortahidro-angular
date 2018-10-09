import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHortaComponent } from './cadastro-horta.component';

describe('CadastroHortaComponent', () => {
  let component: CadastroHortaComponent;
  let fixture: ComponentFixture<CadastroHortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
