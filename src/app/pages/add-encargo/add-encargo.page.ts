import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Encargo } from '../../models/encargo.interface';
import { EncargoService } from '../../services/encargo.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-encargo',
  templateUrl: './add-encargo.page.html',
  styleUrls: ['./add-encargo.page.scss'],
})
export class AddEncargoPage implements OnInit {
  IdUsuario = this.cookieService.get('id');

  encargo: Encargo = {
    idUsuario: this.IdUsuario,
    descripcion: '',
    direccion: ''
  };


  constructor(private modalCtrl: ModalController, private nav: NavController,
    private encargoService: EncargoService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController, private cookieService: CookieService) { }

  ngOnInit() {
    console.log(this.cookieService.get('id'));
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  async saveEncargo(){
    if(this.encargo.direccion=='' || this.encargo.descripcion==''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000,
        color: "danger"
      });
      (await toast).present();
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando......'
      });
      await loading.present();
      this.encargoService.addEncargo(this.encargo).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/usuario');
      });
      this.dismissModal();
    }
  }

}
