import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gest-form-component',
  templateUrl: './gest-form-component.component.html',
  styleUrls: ['./gest-form-component.component.css']
})
export class GestFormComponentComponent implements OnInit {

  randomNumber: number = Math.floor((Math.random() * (-2000)) + 1000);
  //Génère un nombre aléatoire entre -1000 et 1000

  typeGest: string = 'Geste';
  typeForm: string = 'Forme';
  typeGestForm: string = 'Gestform';

  constructor() { }

  ngOnInit(): void {
  }

  /* ------------------------ On determine tout d'abord un nombre ----------------------------- */
  /* ---------------------------- aléatoire entre -1000 et 1000 ------------------------------- */

  getNumber() {
    return this.randomNumber;
    //renvoie le nombre aléatoire compris entre -1000 et 1000
  }


  // ---------------------- 1ere reflexion ------------------------- 


  isDivisibleBy3() {
    /* détermine si le nombre aléatoire est divisible par 3
    c-a-d si la somme des chiffres qui le composent est divisible par 3
    (soit égale à 3, 6 ou 9) */

    return this.typeGest;
    // Renvoie Geste si le nombre est divisible par 3
  }

  isDivisibleBy5() {
    /* détermine si le nombre aléatoire est divisible par 5
    c-a-d si la somme des chiffres qui le composent est divisible par 3
    (soit égale à 0 ou 5) */

    return this.typeForm;
    // Renvoie Forme si le nombre est divisible par 5
  }

  isDivisibleBy3And5() {
    /*détermine si le nombre aléatoire est divisible par 3 et 5
     c-a-d si la somme des chiffres qui le composent est divisible par 3 et 5
     (soit égale à 15?) */

    return this.typeGestForm;
    // Renvoie GestForm si le nombre est divisible par 3 et 5
  }

  /* ---------------------- 2eme reflexion ------------------------- */



  n = this.randomNumber;

  isDivisibleBy() {

    if (this.randomNumber % 3 == 0 && this.randomNumber % 5 == 0) {
      //détermine si le nombre aléatoire est divisible par 3 et 5 

      return this.typeGestForm;
      // Renvoie Geste si le nombre est divisible par 3 et 5
    } else if (this.randomNumber % 5 == 0) {
      //détermine si le nombre aléatoire est divisible par 5

      return this.typeForm;
      // Renvoie Forme si le nombre est divisible par 5
    } else if (this.randomNumber % 3 == 0) {
      //détermine si le nombre aléatoire est divisible par 3

      return this.typeGest;
      // Renvoie GestForm si le nombre est divisible par 3
    } else {

      return 'n';
      // renvoie n s'il n'est divisible par aucun des choix précédents...
    }

    /* ------------------------- FONCTIONNE ---------------------------*/
  }



  /* On tente une boucle pour afficher une liste de nombres */





}

