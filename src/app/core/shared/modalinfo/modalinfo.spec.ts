import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalinfo } from './modalinfo';

describe('Modalinfo', () => {
  let component: Modalinfo;
  let fixture: ComponentFixture<Modalinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modalinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
