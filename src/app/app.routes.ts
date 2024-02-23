import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostPageComponent } from './views/post-page/post-page.component';
import { TextEditorPageComponent } from './views/text-editor-page/text-editor-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "text-editor-page", component: TextEditorPageComponent },
    { path: "post", component: PostPageComponent },
    { path: "publicacao/:id", component: PostPageComponent },
    { path: "**", redirectTo: "" }
];
