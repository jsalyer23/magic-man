import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitEventComponent } from './pitEvent.component';
import { PitEventService } from './pitEvent.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ PitEventComponent ],
  exports: [ PitEventComponent ],
  providers: [ PitEventService ]
}) export class PitEventModule {}
