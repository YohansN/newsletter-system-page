import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSubscribeDialogComponent } from './success-subscribe-dialog.component';

describe('SuccessSubscribeDialogComponent', () => {
  let component: SuccessSubscribeDialogComponent;
  let fixture: ComponentFixture<SuccessSubscribeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessSubscribeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessSubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
