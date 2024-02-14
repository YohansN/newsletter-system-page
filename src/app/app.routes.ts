import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "text-editor",
        component: TextEditorComponent 
    }
];
