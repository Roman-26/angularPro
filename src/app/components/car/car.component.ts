import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 234;
    this.model = 'RS 8';
    this.colors = {
      car: 'Білий',
      salon: 'Чорний',
      wheels: 'Сірий'
    };
    this.options = ["ABC","AutoPilot","Паркинг"];
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  addOpt(option){
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for(let i=0;i<this.options.length;i++){
      if(this.options[i]==option){
        this.options.splice(i,1);
        break;
      }
    }
  }

 carSelect(carName){
    if(carName=='bmv'){
      this.name = 'BMV';
      this.speed = 300;
      this.model = 'M5';
      this.colors = {
        car:'Зелений',
        salon:'Білий',
        wheels:'Чорний'
      };
      this.options = ["ABC","Круїз контроль","Паркинг",'Кондиціонер'];
    }else if (carName=='audi'){
      this.name = 'Audi';
      this.speed = 234;
      this.model = 'RS 8';
      this.colors = {
        car:'Білий',
        salon:'Чорний',
        wheels:'Сірий'
      };
      this.options = ["ABC","AutoPilot","Паркинг"];
    }else {
      this.name = 'Мерседес';
      this.speed = 180;
      this.model = 'Е230';
      this.colors = {
        car:'Білий',
        salon:'Білий',
        wheels:'Сірий'
      };
      this.options = ["Система трека","AutoPilot","Паркинг",'ABC','Клімат контроль'];
    }
 }
}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
