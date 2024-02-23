import { Component, inject } from '@angular/core';
import { TextEditorComponent } from '../../components/text-editor/text-editor.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostService } from '../../services/post.service';
import {MatCardModule} from '@angular/material/card';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PublishPost } from '../../interfaces/PublishPost';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-text-editor-page',
  standalone: true,
  imports: [TextEditorComponent, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatCardModule, CKEditorModule, MatSnackBarModule],
  templateUrl: './text-editor-page.component.html',
  styleUrl: './text-editor-page.component.scss'
})
export class TextEditorPageComponent {

  constructor(private _snackBar: MatSnackBar) {}

  public Editor = ClassicEditor;

  applyForm = new FormGroup({
    title: new FormControl(""),
    synopsis: new FormControl(""),
    author: new FormControl(""),
    content: new FormControl("")
  });
  
  postService = inject(PostService);

  submitPostForm(){
    const postData: PublishPost = this.applyForm.value as PublishPost;
    this.postService.publishPost(postData).subscribe(data => console.log(data), error => this.onError());
  }

  private onError(){
    this._snackBar.open("Houve um erro ao tentar publicar.", '' , {duration: 5000})
  }

}
