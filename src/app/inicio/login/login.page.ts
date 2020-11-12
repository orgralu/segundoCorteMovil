import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../models/usuario.interface';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario[];
  usuArray: Usuario = {
    nombre: '',
    cedula: '',
    eps: '',
    usuario: '',
    contrasena: ''
  };
  bandera='false';
  id="";

  constructor(private modalCtrl: ModalController, private nav: NavController,
    private usuarioService: UsuarioService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController, private cookieService: CookieService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res=>
      this.usuario = res
    );
  }

  async logear(){
    if(this.usuArray.usuario=='' || this.usuArray.contrasena==''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000,
        color: "danger"
      });
      (await toast).present();
    }else{
      this.usuario.forEach(ans => {
        if(this.usuArray.usuario==ans.usuario && this.usuArray.contrasena==ans.contrasena){
          this.cookieService.set('id', ans.id);
          this.bandera='true';
        }
      });
      if(this.bandera=='false'){
        const toast = this.toastCrl.create({
          message: 'Datos incorrectos',
          duration: 3000,
          color: "danger"
        });
        (await toast).present();
      }else{
        const loading = await this.loadingController.create({
          message: 'Iniciando......'
        });
        await loading.present();
        this.nav.navigateForward('/usuario');
        loading.dismiss();
      }
    }
  }
}
