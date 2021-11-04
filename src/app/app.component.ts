import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [

    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'cafe-outline',
      name: 'Visual',
      redirecTo: '/visual'
    },

    
    {
      icon: 'paw-outline',
      name: 'Mapa',
      redirecTo: '/mapa'
    },

    {
      icon: 'paw-outline',
      name: 'news',
      redirecTo: '/news'
    },
    


  ];

}
