import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  pA: number = 0;
  qa: number = 0;
  popGenBalance: number = 0;
  calculatedPopGenBalance: number = 0;

  currentPopulation = {
    dominantHomozygous: 0,
    dominantHeterozygous: 0,
    recessiveHomozygous: 0
  }

  expectedPopulation = {
    dominantHomozygous: 0,
    dominantHeterozygous: 0,
    recessiveHomozygous: 0
  }
  
  step: number = 0;


  constructor() { }

  public calculateFrequencyFor(genotype, total) {
    this.step = 1;
    return (genotype / total).toFixed(6);
  }

  public calculateGeneFrequencyFor(n2, n1, n0) {
    this.step = 2;
    this.pA = n2 + n1/2;
    this.qa = n0 + n1/2;
  }

  public calculatePopulationGeneticBalance() {
    this.step = 3;
    this.popGenBalance = (this.pA * this.pA) + (2 * this.pA * this.qa) + (this.qa * this.qa);

    this.calculatedPopGenBalance = 
        ((+this.currentPopulation.dominantHomozygous - +this.expectedPopulation.dominantHomozygous)
          *
        (+this.currentPopulation.dominantHomozygous - +this.expectedPopulation.dominantHomozygous)) / +this.expectedPopulation.dominantHomozygous
        +
        ((+this.currentPopulation.dominantHeterozygous - +this.expectedPopulation.dominantHeterozygous)
        *
        (+this.currentPopulation.dominantHeterozygous - +this.expectedPopulation.dominantHeterozygous)) / +this.expectedPopulation.dominantHeterozygous
        +
        ((+this.currentPopulation.recessiveHomozygous - +this.expectedPopulation.recessiveHomozygous)
        *
        (+this.currentPopulation.recessiveHomozygous - +this.expectedPopulation.recessiveHomozygous)) / +this.expectedPopulation.recessiveHomozygous
  }

  public reset() {
    this.step = 0;

    this.pA = 0;
    this.qa = 0;
    this.popGenBalance = 0;

    this.currentPopulation = {
      dominantHomozygous: 0,
      dominantHeterozygous: 0,
      recessiveHomozygous: 0
    }

    this.expectedPopulation = {
      dominantHomozygous: 0,
      dominantHeterozygous: 0,
      recessiveHomozygous: 0
    }
  }
}
