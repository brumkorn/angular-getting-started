import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star/star.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    StarComponent
  ],
  declarations: [StarComponent],
  providers: [],
})
export class SharedModule {
}
