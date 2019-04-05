import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public textob: string;
  public elementos: any;
  public pintados: any;
  contador: number;
  nombre: string = "";
  usuario: string = "";
  avatar: string = "";
  descripcion: string = "";
  url: string = "";
  creacion: string = "";

  dataSend: DatosX = {
    nombre: "X",
    usuario: "X",
    avatar: "C",
    descripcion: "C",
    url: "c",
    creacion: "C"
  }

  constructor(
      private fire: AngularFirestore,
      public http: HttpClient,
      public modalController: ModalController
    ){

    }
//private http: HttpClient
      //private http: HttpClient){
        //this.fire.collection<DatosX>("/"+texto+"/")
        //    .valueChanges()
        //     .subscribe((data)=>{
        //        this.nombre = data[0].nombre;
        //      this.edad = data[0].edad;
        //    });

  //save(){
  //  let idDoc = this.fire.createId();
  //  dataSend: DatosX = {
  //    nombre: "Prueba",
  //    usuario: "X",
  //    avatar: "C",
  //    descripcion: "C",
  //    url: "c",
  //    creacion: "C"
  //  }
  //  this.fire.doc("/textob/" + idDoc)
  //  .set(this.dataSend);
  //}

  //consulta(){
  //  this.http.
  //  get("https://jsonplaceholder.typicode.com/users")
  //  .subscribe((data)=>{
  //    console.log("Users: ", data);
  //  });
  //}
  async abrir_modal( index: number ){
    //alert("Hola");
    //alert(this.elementos[index].owner.login);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { elementounico: this.elementos[index] }
    });
    await modal.present();
    //const modal = await this.modalController.create({
    //  component: ModalPage,
    //  componentProps: { index: index }
    //});
    //await modal.present();
  }

  generaconsulta() {
      //alert("https://api.github.com/search/repositories?q="+this.textob);
      this.http.
      get("https://api.github.com/search/repositories?q="+this.textob)
      .subscribe((data: any)=>{
        this.elementos = [];
        //this.pintados = [];
        this.elementos = data.items;
        //this.contador = data.total_count
        //alert(data.items[0].id);
        //elementos = data.items;
        //console.log("Resultado: ", data.items);
        //if ( this.contador > 15 ) {
        //    this.contador = 15;
        //}
        this.elementos.splice(15);
      });
  }

}

interface DatosX {
  nombre?: string;
  usuario?: string;
  avatar?: string;
  descripcion?: string;
  url?: string;
  creacion?: string;
}
