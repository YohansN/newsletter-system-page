import { Component, inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogActions } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PublishConfirmationService } from '../../services/publish-confirmation.service';

@Component({
  selector: 'app-confirm-publish-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogTitle, MatDialogContent, MatButtonModule, MatDialogClose],
  templateUrl: './confirm-publish-dialog.component.html',
  styleUrl: './confirm-publish-dialog.component.scss'
})
export class ConfirmPublishDialogComponent {
  
  private publishConfirmationService = inject(PublishConfirmationService);

  confirmPublish(){
    this.publishConfirmationService.confirmPublish();
  }
}
