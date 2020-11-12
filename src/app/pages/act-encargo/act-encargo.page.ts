import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Encargo } from '../../models/encargo.interface';
import { EncargoService } from '../../services/encargo.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-act-encargo',
  templateUrl: './act-encargo.page.html',
  styleUrls: ['./act-encargo.page.scss'],
})
export class ActEncargoPage implements OnInit {
  IdUsuario = this.cookieService.get('id');
  encargo: Encargo = {
    idUsuario: this.IdUsuario,
    descripcion: '',
    direccion: ''
  };
  usuarioId = null;

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private encargoService: EncargoService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController,
    private cookieService: CookieService
    ) { }

    ngOnInit() {
      this.usuarioId = this.route.snapshot.params['id'];
      if (this.usuarioId){
        this.loadEncargo();
      }
    }

    async loadEncargo(){
      const loading = await this.loadingController.create({
        message: 'Loading......'
      });
      await loading.present();
      this.encargoService.getEncargo(this.usuarioId).subscribe(res => {
        loading.dismiss();
        this.encargo = res;
      });
    }

    async saveEncargo(){
      if(this.encargo.descripcion=='' || this.encargo.direccion==''){
        const toast = this.toastCrl.create({
          message: 'Digite los datos',
          duration: 3000,
          color: "danger"
        });
        (await toast).present();
      }else{
        const loading = await this.loadingController.create({
          message: 'Actualizando......'
        });
        await loading.present();
        this.encargoService.updateEncargo(this.encargo, this.usuarioId).then(()=>{
          loading.dismiss();
          this.nav.navigateForward('/usuario');
        });
      }
    }

    onRemove(idencargo:string){
      this.encargoService.removeEncargo(idencargo);
    }

}
