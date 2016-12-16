import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SettingsComponent ],
  exports: [ SettingsComponent ],
  providers: [ SettingsService ]
}) export class SettingsModule {}
