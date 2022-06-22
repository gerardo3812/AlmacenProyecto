import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  banderabuscar: boolean= false;
  constructor() { }
  buscar(){
    if (this.banderabuscar == false){
      this.banderabuscar= true;
    }else{
      this.banderabuscar = false;
    }
  }
  ngOnInit(): void {
  }

}
