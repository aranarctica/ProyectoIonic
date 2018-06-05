import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';
import { TabsPage } from '../pages/tabs/tabs';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DetallePage } from '../pages/detalle/detalle';
import { MapaPage } from '../pages/mapa/mapa';
import { CamaraPage } from '../pages/camara/camara';
import { NotasServicio } from '../servicios/notas.servicio';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage,
    MapaPage,
    TabsPage,
    CamaraPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgAcwHzcCQvtpId66uzW6Wih3Ce-F_ARI'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage,
    MapaPage,
    TabsPage,
    CamaraPage

  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotasServicio,
    Geolocation

  ]
})
export class AppModule {}
