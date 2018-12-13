import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

    // injector documento domp
  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor( tema: string, link: any) {

    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );

  }

    aplicarCheck( link: any) {

      let selectores: any = document.getElementsByClassName('selector');
      
      for ( let ref of selectores ) {
        ref.classList.remove('working');
      }
      link.classList.add('working');

    }

    colocarCheck() {
      document.getElementsByClassName(`${this._ajustes.ajustes.tema}-theme`)
     .item(0)
     .classList.add('working');

        }
    }