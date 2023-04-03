import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesOneComponent } from './stagiaires-one.component';

describe('StagiairesOneComponent', () => {
  let component: StagiairesOneComponent;
  let fixture: ComponentFixture<StagiairesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiairesOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagiairesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
