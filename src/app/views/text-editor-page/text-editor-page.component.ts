import {Component, inject} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {MatCardModule} from '@angular/material/card';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PublishPost} from '../../interfaces/PublishPost';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialog, MatDialogTitle} from '@angular/material/dialog';
import {SucessDialogComponent} from '../../components/sucess-dialog/sucess-dialog.component';
import {LoadingDialogComponent} from '../../components/loading-dialog/loading-dialog.component';
import {ConfirmPublishDialogComponent} from '../../components/confirm-publish-dialog/confirm-publish-dialog.component';
import {PublishConfirmationService} from '../../services/publish-confirmation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-text-editor-page',
  standalone: true,
  imports: [TextEditorPageComponent, MatFormFieldModule, MatInputModule, MatButtonModule, 
    FormsModule, ReactiveFormsModule, MatCardModule, CKEditorModule, MatSnackBarModule,
    MatButtonModule, SucessDialogComponent, MatDialogTitle, LoadingDialogComponent, ConfirmPublishDialogComponent],
  templateUrl: './text-editor-page.component.html',
  styleUrl: './text-editor-page.component.scss'
})
export class TextEditorPageComponent {

  constructor(private _snackBar: MatSnackBar, public sucessDialog: MatDialog, public loadingDialog: MatDialog, public confirmPublish: MatDialog) {}

  public Editor = ClassicEditor;

  applyForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.maxLength(256)]),
    synopsis: new FormControl("", Validators.maxLength(256)),
    author: new FormControl("", [Validators.required, Validators.maxLength(256)]),
    content: new FormControl("", [Validators.required])
  });

  //Retorna os valores dos campos do formulario
  get title(){ return this.applyForm.get("title")!; }
  get author(){ return this.applyForm.get("author")!; }
  get content(){ return this.applyForm.get("content")!; }
  
  postService = inject(PostService);
  publishConfirmationService = inject(PublishConfirmationService);

  //Recebe a notificação do evento de click de confirmação do modal/dialog PublishConfirmationService. 
  private subscription: Subscription = new Subscription();
  ngOnInit(){
    this.subscription = this.publishConfirmationService.publishConfirmed$.subscribe(() => {
      this.submitPostForm();
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  confirmSubmitPostForm(){
    if(this.applyForm.invalid){
      this.title.markAllAsTouched();
      this.author.markAllAsTouched();
      this.content.markAllAsTouched();
      return;
    }

      
    this.confirmPublish.open(ConfirmPublishDialogComponent);
  }

  private submitPostForm(){
    const postData: PublishPost = this.applyForm.value as PublishPost;
    this.onSubmit();
    this.postService.publishPost(postData).subscribe(data => {
      this.loadingDialog.closeAll();
      this.onSucess();
    }, error => {
      this.loadingDialog.closeAll();
      this.onError()
    });
  }

  private onSubmit(){
    this.loadingDialog.open(LoadingDialogComponent);
  }

  private onSucess(){
    this.sucessDialog.open(SucessDialogComponent);
    this.applyForm.reset();
  }

  private onError(){
    this._snackBar.open("Houve um erro ao tentar publicar.", '' , {duration: 5000})
  }

}
