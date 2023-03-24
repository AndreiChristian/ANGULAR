import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule ({
  imports: [
    MatSlideToggleModule,
    MatCommonModule,
    MatButtonModule
  ],
  exports:[
    MatSlideToggleModule,
    MatCommonModule,
    MatButtonModule
  ]
})
export class MaterialModule {}