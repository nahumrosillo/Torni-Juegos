/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserManagerComponent } from './user-manager.component';
import { User } from '../../shared/user/user';


describe('UserManagerComponent', () => {
  let component: UserManagerComponent;
  let component2: UserManagerComponent;
  let fixture: ComponentFixture<UserManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagerComponent);
    component = fixture.componentInstance;
    component2 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('componente creado', () => {
    expect(component).toBeTruthy();
    expect(component2).toBeTruthy();
  });

  it('conectada a la Base de Datos', () => {
    expect(component.isAvailableBD).toBeTruthy();

  });

  it('añadido usuarios a la BD', () => {
    let u: User = new User('Nahum');
    let u2: User = new User('Francisco');
    
    component.addUser(u);
    component2.addUser(u2);

    expect(component.getUser(new User('Nahum'))).toEqual(u);
    expect(component2.getUser(new User('Nahum'))).toEqual(u);
    expect(component.getUser(new User('Francisco'))).toEqual(u2);
    expect(component2.getUser(new User('Francisco'))).toEqual(u2);

    
  });
});
