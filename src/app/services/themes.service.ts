import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor() { }

  ativeLightMode() {
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    localStorage.setItem('lightMode', 'active');
  }

  disableLightMode(){
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode');
    localStorage.setItem('lightMode', 'null');
  }

  getLightMode():string | null {
    return localStorage.getItem('lightMode');
  }
}
