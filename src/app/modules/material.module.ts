import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';




const MATERIALMODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MATERIALMODULES
  ],
  exports: [
    ...MATERIALMODULES
  ]
})
export class MaterialModule { }
