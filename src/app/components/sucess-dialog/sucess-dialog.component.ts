import { Component } from '@angular/core';
import { MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sucess-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './sucess-dialog.component.html',
  styleUrl: './sucess-dialog.component.scss'
})
export class SucessDialogComponent {

}
