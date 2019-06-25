import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-genetic-matrix',
  templateUrl: './genetic-matrix.component.html',
  styleUrls: ['./genetic-matrix.component.css']
})
export class GeneticMatrixComponent implements OnInit {

  A: any = { name: 'A', mother: 'nz', father: 'nz' };
  B: any = { name: 'B', mother: 'nz', father: 'nz' };
  C: any = { name: 'C', mother: 'nz', father: 'nz' };
  D: any = { name: 'D', mother: 'nz', father: 'nz' };
  E: any = { name: 'E', mother: 'nz', father: 'nz' };
  F: any = { name: 'F', mother: 'nz', father: 'nz' };

  AA: any = { name: 'AA', value: null, assigned: false }
  AB: any = { name: 'AB', value: null, assigned: false }
  AC: any = { name: 'AC', value: null, assigned: false }
  AD: any = { name: 'AD', value: null, assigned: false }
  AE: any = { name: 'AE', value: null, assigned: false }
  AF: any = { name: 'AF', value: null, assigned: false }

  BA: any = { name: 'BA', value: null, assigned: false }
  BB: any = { name: 'BB', value: null, assigned: false }
  BC: any = { name: 'BC', value: null, assigned: false }
  BD: any = { name: 'BD', value: null, assigned: false }
  BE: any = { name: 'BE', value: null, assigned: false }
  BF: any = { name: 'BF', value: null, assigned: false }

  CA: any = { name: 'CA', value: null, assigned: false }
  CB: any = { name: 'CB', value: null, assigned: false }
  CC: any = { name: 'CC', value: null, assigned: false }
  CD: any = { name: 'CD', value: null, assigned: false }
  CE: any = { name: 'CE', value: null, assigned: false }
  CF: any = { name: 'CF', value: null, assigned: false }

  DA: any = { name: 'DA', value: null, assigned: false }
  DB: any = { name: 'DB', value: null, assigned: false }
  DC: any = { name: 'DC', value: null, assigned: false }
  DD: any = { name: 'DD', value: null, assigned: false }
  DE: any = { name: 'DE', value: null, assigned: false }
  DF: any = { name: 'DF', value: null, assigned: false }

  EA: any = { name: 'EA', value: null, assigned: false }
  EB: any = { name: 'EB', value: null, assigned: false }
  EC: any = { name: 'EC', value: null, assigned: false }
  ED: any = { name: 'ED', value: null, assigned: false }
  EE: any = { name: 'EE', value: null, assigned: false }
  EF: any = { name: 'EF', value: null, assigned: false }

  FA: any = { name: 'FA', value: null, assigned: false }
  FB: any = { name: 'FB', value: null, assigned: false }
  FC: any = { name: 'FC', value: null, assigned: false }
  FD: any = { name: 'FD', value: null, assigned: false }
  FE: any = { name: 'FE', value: null, assigned: false }
  FF: any = { name: 'FF', value: null, assigned: false }

  combinations:any [] = [];

  constructor() { }

  ngOnInit() {
    this.combinations.push(this.AA);
    this.combinations.push(this.AB);
    this.combinations.push(this.AC);
    this.combinations.push(this.AD);
    this.combinations.push(this.AE);
    this.combinations.push(this.AF);

    this.combinations.push(this.BA);
    this.combinations.push(this.BB);
    this.combinations.push(this.BC);
    this.combinations.push(this.BD);
    this.combinations.push(this.BE);
    this.combinations.push(this.BF);

    this.combinations.push(this.CA);
    this.combinations.push(this.CB);
    this.combinations.push(this.CC);
    this.combinations.push(this.CD);
    this.combinations.push(this.CE);
    this.combinations.push(this.CF);
    
    this.combinations.push(this.DA);
    this.combinations.push(this.DB);
    this.combinations.push(this.DC);
    this.combinations.push(this.DD);
    this.combinations.push(this.DE);
    this.combinations.push(this.DF);

    this.combinations.push(this.EA);
    this.combinations.push(this.EB);
    this.combinations.push(this.EC);
    this.combinations.push(this.ED);
    this.combinations.push(this.EE);
    this.combinations.push(this.EF);

    this.combinations.push(this.FA);
    this.combinations.push(this.FB);
    this.combinations.push(this.FC);
    this.combinations.push(this.FD);
    this.combinations.push(this.FE);
    this.combinations.push(this.FF);
  }

  select(individual, progenitor, sex) {

    if (individual == 'A' && sex == 'mother')
      this.A.mother = progenitor
    if (individual == 'A' && sex == 'father')
      this.A.father = progenitor
    if (individual == 'B' && sex == 'mother')
      this.B.mother = progenitor
    if (individual == 'B' && sex == 'father')
      this.B.father = progenitor
    if (individual == 'C' && sex == 'mother')
      this.C.mother = progenitor
    if (individual == 'C' && sex == 'father')
      this.C.father = progenitor
    if (individual == 'D' && sex == 'mother')
      this.D.mother = progenitor
    if (individual == 'D' && sex == 'father')
      this.D.father = progenitor
    if (individual == 'E' && sex == 'mother')
      this.E.mother = progenitor
    if (individual == 'E' && sex == 'father')
      this.E.father = progenitor
    if (individual == 'F' && sex == 'mother')
      this.F.mother = progenitor
    if (individual == 'F' && sex == 'father')
      this.F.father = progenitor

    if (this.A.mother == this.A.father) {
      this.A.mother = 'nz';
      this.A.father = 'nz';
      var Amother = <HTMLInputElement>document.getElementById('Amother');
      Amother.value = 'nz';
      var Afather = <HTMLInputElement>document.getElementById('Afather');
      Afather.value = 'nz';
    }
    if (this.B.mother == this.B.father) {
      this.B.mother = 'nz';
      this.B.father = 'nz';
      var Bmother = <HTMLInputElement>document.getElementById('Bmother');
      Bmother.value = 'nz';
      var Bfather = <HTMLInputElement>document.getElementById('Bfather');
      Bfather.value = 'nz';
    } if (this.C.mother == this.C.father) {
      this.C.mother = 'nz';
      this.C.father = 'nz';
      var Cmother = <HTMLInputElement>document.getElementById('Cmother');
      Cmother.value = 'nz';
      var Cfather = <HTMLInputElement>document.getElementById('Cfather');
      Cfather.value = 'nz';
    } if (this.D.mother == this.D.father) {
      this.D.mother = 'nz';
      this.D.father = 'nz';
      var Dmother = <HTMLInputElement>document.getElementById('Dmother');
      Dmother.value = 'nz';
      var Dfather = <HTMLInputElement>document.getElementById('Dfather');
      Dfather.value = 'nz';
    } if (this.E.mother == this.E.father) {
      this.E.mother = 'nz';
      this.E.father = 'nz';
      var Emother = <HTMLInputElement>document.getElementById('Emother');
      Emother.value = 'nz';
      var Efather = <HTMLInputElement>document.getElementById('Efather');
      Efather.value = 'nz';
    } if (this.F.mother == this.F.father) {
      this.F.mother = 'nz';
      this.F.father = 'nz';
      var Fmother = <HTMLInputElement>document.getElementById('Fmother');
      Fmother.value = 'nz';
      var Ffather = <HTMLInputElement>document.getElementById('Ffather');
      Ffather.value = 'nz';
    }

  }

  validate() {
    return true;
  }

  resetAllValues() {
    this.combinations.forEach(combination => {
      combination.value = 0;
      combination.assigned = false;
    });
  }

  calculate() {

    this.resetAllValues();

    var results = [];

    var individuals = [];
    individuals.push(this.A);
    individuals.push(this.B);
    individuals.push(this.C);
    individuals.push(this.D);
    individuals.push(this.E);
    individuals.push(this.F);

    console.log('looping through matrix');
    for (let i = 0; i < individuals.length; i++) {
      const individualI = individuals[i];
      
      for (let j = 0; j < individuals.length; j++) {
        const individualJ = individuals[j];
        
        // console.log(individualI);
        // console.log(individualJ);

        var inbreedingCoefficient = 0;
        
        // console.log(individualI.name + individualJ.name);

        if (individualI.name == individualJ.name) { // DIAGONAL

          if (individualI.mother == 'nz' && individualI.father == 'nz') { // unknown parents in diagonal
            console.log('calculating unknown + unknown IN DIAGONAL: ' + individualI.name + individualJ.name);

            inbreedingCoefficient = 1;

            this.combinations.forEach(combination => {
              if (combination.name == individualI.name + individualJ.name) {
                // console.log(combination.name);
                combination.value = inbreedingCoefficient;
              }
            });

          }
          else { // known parents in diagonal

            console.log('calculating known + known IN DIAGONAL: ' + individualI.name + individualJ.name);
            //  1 + 1/2*aSiDi
            var value = 0;
            this.combinations.forEach(combination => {
              if (combination.name == individualI.mother + individualI.father) {
                value = combination.value;
              }
            });
            console.log(value);
            inbreedingCoefficient = 1 + 0.5 * value;


            this.combinations.forEach(combination => {
              if (combination.name == individualI.name + individualJ.name) {
                // console.log(combination.name);
                combination.value = inbreedingCoefficient;
              }
            });

          }

        }
        else {

          if ((individualI.mother == 'nz' && individualI.father == 'nz') && // unknown
              (individualJ.mother != 'nz' && individualJ.father != 'nz')) { // + known 
                console.log('calculating unknown + known: ' + individualI.name + individualJ.name);
                console.log('first value: ' + individualI.name + individualJ.mother);
                console.log('second value: ' + individualI.name + individualJ.father);

                // inbreedingCoefficient = 0.5 * (individualI. 1 + 0);
                var firstValue = 0;
                var secondValue = 0;

                this.combinations.forEach(combination => {
                  if (combination.name == individualI.name + individualJ.mother)
                    firstValue = combination.value;

                  if (combination.name == individualI.name + individualJ.father)
                    secondValue = combination.value;
                });

                inbreedingCoefficient = 0.5 * (firstValue + secondValue);
                console.log(inbreedingCoefficient);
                this.combinations.forEach(combination => {
                  if (combination.value != null && 
                      combination.name == individualI.name + individualJ.name || // A = B
                      combination.name == individualJ.name + individualI.name) { // B = A
                    combination.assigned = true;
                    combination.value = inbreedingCoefficient;
                  }
                });


          }
          
          if ((individualI.mother != 'nz' && individualI.father != 'nz') && // known
              (individualJ.mother != 'nz' && individualJ.father != 'nz')) { // known

                var ignore = false;

                this.combinations.forEach(combination => {
                  if (combination.name == individualI.name + individualJ.name) { // check if B = A hasn't been assigned a value yet

                    if (combination.assigned == true) {
                      ignore = true;
                      console.log('already assigned')
                    }

                  }
                });


            if (!ignore) {
                console.log('calculating known + known: ' + individualI.name + individualJ.name);
                console.log('first value: ' + individualI.name + individualJ.mother);
                console.log('second value: ' + individualI.name + individualJ.father);
                
                // inbreedingCoefficient = 0.5 * (individualI. 1 + 0);
                var firstValue = 0;
                var secondValue = 0;
    
                this.combinations.forEach(combination => {
                  if (combination.name == individualI.name + individualJ.mother)
                    firstValue = combination.value;
    
                  if (combination.name == individualI.name + individualJ.father)
                    secondValue = combination.value;
                });
                console.log(firstValue);
                console.log(secondValue);
                inbreedingCoefficient = 0.5 * (firstValue + secondValue);
                console.log('inbreeding Q: ' + inbreedingCoefficient);
                this.combinations.forEach(combination => {
                  if (combination.value != null && 
                      combination.name == individualI.name + individualJ.name || // A = B
                      combination.name == individualJ.name + individualI.name) { // B = A
                        combination.assigned = true;
                        combination.value = inbreedingCoefficient;
                  }
                });
            }
          }
        }

        results.push({
          name: individualI.name + individualJ.name
        });

      }

    }

  }

}
