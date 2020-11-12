import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../models/usuario.interface';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    nombre: '',
    cedula: '',
    eps: '',
    usuario: '',
    contrasena: ''
  };

  constructor(private modalCtrl: ModalController, private nav: NavController,
    private usuarioService: UsuarioService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController, private cookieService: CookieService) { }

  ngOnInit() {
  }

  async saveUsuario(){
    if(this.usuario.nombre=='' || this.usuario.cedula=='' || this.usuario.eps=='' || this.usuario.usuario=='' || this.usuario.contrasena==''){
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
      this.usuarioService.addUsuario(this.usuario).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/login');
      });
    }
  }

}
