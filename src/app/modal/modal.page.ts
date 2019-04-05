import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public datos:any;
  public consulta: number;
  @Input() elementounico: any;

  constructor( private fire: AngularFirestore,
    public http: HttpClient ) { }

  guardando(){
    this.consulta = 0;
      this.fire.collection<any>("/puteria/")
          .valueChanges()
           .subscribe((datos:any)=>{
             for(let i=0;i<this.datos.length;i++){
               if ( datos.id = this.elementounico.id )
                 this.consulta = 1;
             }
      });
    if ( this.consulta < 1 )
    {
      let idDoc = this.fire.createId();
      this.fire.doc("/puteria/" + idDoc)
      .set(this.elementounico);
    }
  }

  ngOnInit() {
    //this.storage.get('elementoobtenido').then((val) => {
    //alert("Entre");
      //alert(this.elementounico);
    //});
  }

}
