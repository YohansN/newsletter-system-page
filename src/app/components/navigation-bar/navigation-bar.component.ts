import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, MatTooltipModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  pageUrl: string = '';
  constructor(private clipBoard: Clipboard, private snackBar: MatSnackBar){ }
  
  ngOnInit(){
    this.pageUrl = window.location.href;
  }

  copyUrlToClibBoard(){
    this.clipBoard.copy(this.pageUrl);
    this.openSnackBar();
  }

  private openSnackBar() {
    this.snackBar.open("Link da página copiado!", 'Fechar' ,{duration: 4000});
  }
}
