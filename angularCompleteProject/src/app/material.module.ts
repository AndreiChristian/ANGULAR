import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
