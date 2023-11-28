import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsDemoComponent } from './jenkins-demo.component';

describe('JenkinsDemoComponent', () => {
  let component: JenkinsDemoComponent;
  let fixture: ComponentFixture<JenkinsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenkinsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JenkinsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
