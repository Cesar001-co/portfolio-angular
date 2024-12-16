import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor() { }

  ativeLightMode() {
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');

    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('lightMode', 'active');
  }

  disableLightMode(){
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode');

    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem('lightMode', 'null');
  }

  getLightMode():string | null {
    return localStorage.getItem('lightMode');
  }
}
