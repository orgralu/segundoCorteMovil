import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Encargo } from '../../models/encargo.interface';
import { EncargoService } from '../../services/encargo.service';
import { CookieService } from 'ngx-cookie-service';
import { AddEncargoPage } from '../add-encargo/add-encargo.page';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  encargo: Encargo[];
  IdUsuario = '';
  temp: number;

  constructor(
    private encargoService: EncargoService,
    private modalCtrl: ModalController,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    console.log(this.cookieService.get('id'));
    this.IdUsuario = this.cookieService.get('id');
    this.encargoService.getEncargos().subscribe(res=>
      this.encargo = res
    );
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AddEncargoPage
    });
    await modal.present();
  }

  deleteCok(){
    this.cookieService.delete('id');
  }

}
