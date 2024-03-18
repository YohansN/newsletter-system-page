import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { SubscriberService } from '../../services/subscriber.service';
import { UserSubscriber } from '../../interfaces/UserSubscriber';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SuccessSubscribeDialogComponent } from '../success-subscribe-dialog/success-subscribe-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-subscribe-panel',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe-panel.component.html',
  styleUrl: './subscribe-panel.component.scss'
})
export class SubscribePanelComponent {
  subscriberService = inject(SubscriberService);
  
  constructor (private errorSnackBar: MatSnackBar, public dialog: MatDialog){

  }
  subscribeForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
  })

  submitNewSubscription(){
    //this.openSuccessDialog(); //Para testes

    const userData: UserSubscriber = this.subscribeForm.value as UserSubscriber;
    this.subscriberService.newSubscriber(userData).subscribe({
      next: (data) => {
        this.openSuccessDialog();
        this.subscribeForm.reset();
      },
      error: (error) => {
        this.onError();
      }
    });
  }

  private onError(){
    this.errorSnackBar.open("Ocorreu um erro ao cadastrar. Por favor tente mais tarde.", "Fechar", {duration: 10000});
  }
  
  private openSuccessDialog() {
    this.dialog.open(SuccessSubscribeDialogComponent);
  }
}