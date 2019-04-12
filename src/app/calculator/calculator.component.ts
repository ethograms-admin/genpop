import { Component, OnInit } from '@angular/core';
import { CalculationsService } from '../calculations.service';
import { validateConfig } from '@angular/router/src/config';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(public calculationsService: CalculationsService) { }

  population: any[] = [];
  totalPopulation: any = 0;

  dominantHomozygous: any = '';
  dominantHeterozygous: any = '';
  recessiveHomozygous: any = '';

  calculated: boolean = false;
  calculateButtonEnabled: boolean = true;

  chart: Chart;
  geneFrequencyChart: Chart;
  chartConfig:any;
  geneFrequencyChartConfig:any;
  genotypeFrequencyChartConfig:any;


  ngOnInit() {

    this.chartConfig =  {
      type: 'pie',
      data: {
        labels: '',
        datasets: [{
            label: '',
            data: ''
        }],

      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: ''
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        
        rotation: -Math.PI

    }}

    this.genotypeFrequencyChartConfig = this.chartConfig;
    this.geneFrequencyChartConfig = this.chartConfig;

    
    this.dominantHomozygous = {
      alleleA: '',
      alleleB: '',
      phenotype: '',
      genotypeCount: 0,
      genotypeFrequency: 0
    }
    this.dominantHeterozygous = {
      alleleA: '',
      alleleB: '',
      phenotype: '',
      genotypeCount: 0,
      genotypeFrequency: 0
    }
    this.recessiveHomozygous = {
      alleleA: '',
      alleleB: '',
      phenotype: '',
      genotypeCount: 0,
      genotypeFrequency: 0
    }
  }

  calculateGeneFrequency() {
    if (!this.validate()) 
      return;

    this.calculationsService.calculateGeneFrequencyFor(+this.dominantHomozygous.genotypeFrequency, 
                                                       +this.dominantHeterozygous.genotypeFrequency, 
                                                       +this.recessiveHomozygous.genotypeFrequency);

                                                       
    this.calculateButtonEnabled = false;
    let that = this;
    setTimeout(function(){
      that.calculateButtonEnabled = true;
    }, 2000);

    this.geneFrequencyChartConfig.data = {
      labels: [
        'pA',
        'qa'
      ],
      datasets: [{
            label: '',
            data: [
              this.calculationsService.pA,
              this.calculationsService.qa
            ],
            backgroundColor: ['#999999', '#333333'],
            borderWidth: 1
        }],
    }
    this.chartConfig.options.title.text = 'Frekwencja genów';

    this.prepare(this.geneFrequencyChart, this.geneFrequencyChartConfig, 'gene-frequency-chart');

    this.calculationsService.expectedPopulation.dominantHomozygous = (this.calculationsService.pA * this.calculationsService.pA) * this.totalPopulation;
    this.calculationsService.expectedPopulation.dominantHeterozygous = (2 * this.calculationsService.pA * this.calculationsService.qa) * this.totalPopulation;
    this.calculationsService.expectedPopulation.recessiveHomozygous = (this.calculationsService.qa * this.calculationsService.qa) * this.totalPopulation;

    this.calculationsService.calculatePopulationGeneticBalance();
  }

  reset() {
    this.calculationsService.reset();
  }

  calculateGenotypeFrequency() {
    if (!this.validate()) 
        return;

    this.totalPopulation = +this.dominantHomozygous.genotypeCount +
                           +this.dominantHeterozygous.genotypeCount + 
                           +this.recessiveHomozygous.genotypeCount;

    this.calculationsService.currentPopulation.dominantHomozygous = this.dominantHomozygous.genotypeCount;
    this.calculationsService.currentPopulation.dominantHeterozygous = this.dominantHeterozygous.genotypeCount;
    this.calculationsService.currentPopulation.recessiveHomozygous = this.recessiveHomozygous.genotypeCount;

    this.dominantHomozygous.genotypeFrequency = this.calculationsService.calculateFrequencyFor(
      this.dominantHomozygous.genotypeCount, 
      this.totalPopulation
    );

    this.dominantHeterozygous.genotypeFrequency = this.calculationsService.calculateFrequencyFor(
      this.dominantHeterozygous.genotypeCount, 
      this.totalPopulation
    );

    this.recessiveHomozygous.genotypeFrequency = this.calculationsService.calculateFrequencyFor(
      this.recessiveHomozygous.genotypeCount, 
      this.totalPopulation
    );
    
    this.calculateButtonEnabled = false;
    let that = this;
    setTimeout(function(){
      that.calculateButtonEnabled = true;
    }, 2000);

    this.genotypeFrequencyChartConfig.data = {
      labels: [
        this.dominantHomozygous.alleleA + this.dominantHomozygous.alleleB,
        this.dominantHeterozygous.alleleA + this.dominantHeterozygous.alleleB,
        this.recessiveHomozygous.alleleA + this.recessiveHomozygous.alleleB,
      ],
      datasets: [{
            label: '',
            data: [
              this.dominantHomozygous.genotypeFrequency,
              this.dominantHeterozygous.genotypeFrequency,
              this.recessiveHomozygous.genotypeFrequency,
            ],
            backgroundColor: ['#999999', '#777777', '#555555', '#333333', '#111111'],
            borderWidth: 1
        }],
    }
    this.chartConfig.options.title.text = 'Frekwencja genotypów';

    this.prepare(this.chart, this.genotypeFrequencyChartConfig, 'genotype-frequency-chart');

    this.calculated = true;
  }

  checkNumber(gene, aOrB) {

    if (aOrB == 'A') {
      if (!isNaN(gene.alleleA)) {
        gene.alleleA = '';
      }
    }
    else if (aOrB == 'B') {
      if (!isNaN(gene.alleleB)) {
        gene.alleleB = '';
      }
    }
  }

  toUpper(gene, aOrB) {
    if (aOrB == 'A') {
        gene.alleleA = gene.alleleA.toUpperCase();
    }
    else if (aOrB == 'B') {
        gene.alleleB = gene.alleleB.toUpperCase();
      }
  }

  toLower(gene, aOrB) {
    if (aOrB == 'A') {
        gene.alleleA = gene.alleleA.toLowerCase();
    }
    else if (aOrB == 'B') {
        gene.alleleB = gene.alleleB.toLowerCase();
      }
  }


  validateGenotypeFor(organism) {
    if (organism.alleleA == undefined || organism.alleleA == '' ||
        organism.alleleB == undefined || organism.alleleB == '')
      return false;

    if (organism.alleleA.length > 1 ||
        organism.alleleB.length > 1)
      return false;

    return true;
  }

  validatePhenotypeFor(organism) {
    if (organism.phenotype == undefined || organism.phenotype == '')
      return false;
    return true;
  }

  validateGenotypeCountFor(organism) {
    if (organism.genotypeCount < 0)
      return false;

    if(isNaN(organism.genotypeCount))
      return false;

    if (organism.genotypeCount == undefined || organism.genotypeCount == 0)
      return false;

    return true;
  }

  validate() {

    if (!this.calculateButtonEnabled)
      return false;

    if (this.validateGenotypeFor(this.dominantHomozygous) && 
        this.validateGenotypeFor(this.dominantHeterozygous)  &&
        this.validateGenotypeFor(this.recessiveHomozygous)) {
          if (this.validatePhenotypeFor(this.dominantHomozygous) &&
              this.validatePhenotypeFor(this.dominantHeterozygous) &&
              this.validatePhenotypeFor(this.recessiveHomozygous)) {
                if (this.validateGenotypeCountFor(this.dominantHomozygous) &&
                    this.validateGenotypeCountFor(this.dominantHeterozygous) &&
                    this.validateGenotypeCountFor(this.recessiveHomozygous)) {
             return true;
           }
        }
      }

    return false;
  }

  prepare(chart, config, htmlID) {

    console.log(config);

    if(chart!=null){
        chart.destroy();
    }

    if (chart != undefined)
        chart.clear();

    var canvas : any = <HTMLCanvasElement>document.getElementById(htmlID) as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");

    var backgroundColor = '#ffffff';
    Chart.plugins.register({
        beforeDraw: function(c) {
            var ctx = c.chart.ctx;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, c.chart.width, c.chart.height);
        }
    });

    
    chart = new Chart(ctx, config);
  }
}
