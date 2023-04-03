import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesAllComponent } from './stagiaires-all.component';

describe('StagiairesAllComponent', () => {
  let component: StagiairesAllComponent;
  let fixture: ComponentFixture<StagiairesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiairesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagiairesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
