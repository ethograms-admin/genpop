import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculationsService } from './calculations.service';
import { GeneticMatrixComponent } from './genetic-matrix/genetic-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    GeneticMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [CalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
