import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';
import { NumComponent } from './num/num.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PostComponent,
    NumComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}