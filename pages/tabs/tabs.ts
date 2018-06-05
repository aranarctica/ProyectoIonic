import { Component } from '@angular/core';

import { CamaraPage } from '../camara/camara';

import { MapaPage } from '../mapa/mapa';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapaPage;
  tab3Root = CamaraPage;

  constructor() {

  }
}
