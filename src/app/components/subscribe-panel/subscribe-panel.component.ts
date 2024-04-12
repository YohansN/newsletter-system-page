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
  
  constructor (private errorSnackBar: MatSnackBar, public dialog: MatDialog){  }
  
  subscribeForm = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.maxLength(256)]),
    email: new FormControl("",[Validators.email, Validators.required]),
  })

  get name(){ return this.subscribeForm.get("name")!; }
  get email(){ return this.subscribeForm.get("email")!; }

  submitNewSubscription(){
    if(!this.formIsValid()){
      return;
    }

    const userData: UserSubscriber = this.subscribeForm.value as UserSubscriber;
    this.subscriberService.newSubscriber(userData).subscribe({
      next: (data) => {
        this.dialog.open(SuccessSubscribeDialogComponent);
        this.subscribeForm.reset();
        console.log(data);
      },
      error: (err) => {
        this.onError(err.error.message);
      }
    });
  }

  private formIsValid(): Boolean{
    if(this.subscribeForm.invalid){
      this.subscribeForm.markAllAsTouched();
      return false;
    }
    return true;
  }

  private onError(errorMessage: String ){
    this.errorSnackBar.open("Erro ao cadastrar: "+ errorMessage, "Fechar", {duration: 10000});
  }
}