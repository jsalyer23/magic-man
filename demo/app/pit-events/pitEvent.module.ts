import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitEventComponent } from './pitEvent.component';
import { PitEventService } from './pitEvent.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, SettingsModule ],
  declarations: [ PitEventComponent ],
  exports: [ PitEventComponent ],
  providers: [ PitEventService ]
}) export class PitEventModule {}
