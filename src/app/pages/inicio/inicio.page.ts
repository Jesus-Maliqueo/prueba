import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private menuController: MenuController ,private alertController: AlertController,private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController) { this.plt.ready().then(()=>{
      this.loadDatos();
    });}

  ngOnInit() {
  }
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

   //create
   addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Datos Agregados');
      this.loadDatos();
    });
  }

  //update
  updateDatos(dato: Datos ){
    dato.lugar = `UPDATED: ${dato.lugar}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }


  mostrarMenu(){
    this.menuController.open('first');
  }
  /**
  onSubmit(){
    console.log('submit');
    console.log(this.ingreso);
  }
  **/
  async registro(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregadó',
      message: 'ganaste un cupo para starbucks',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  Logout(){
    localStorage.removeItem('ingresado')
  }

}



