import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPublishDialogComponent } from './confirm-publish-dialog.component';

describe('ConfirmPublishDialogComponent', () => {
  let component: ConfirmPublishDialogComponent;
  let fixture: ComponentFixture<ConfirmPublishDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPublishDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmPublishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
