import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo : 'Prinicipal',
      icono: 'mdi mdi-gauge',
      submenu: [
        /* Desde aqui podremos copiar e iplementar mas opciones en la barra lateral */
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }
      ]
    }

  ];

  constructor() { }
}
