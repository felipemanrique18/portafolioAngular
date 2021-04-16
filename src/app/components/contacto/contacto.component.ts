import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formcontacto:FormGroup;
  enviado:boolean;
  loading:boolean;
  constructor(private fb:FormBuilder,
              private mensaje:MessageService) { 
    this.crearFormularioContacto();
    
  }

  ngOnInit(): void {
  }

  crearFormularioContacto(){
    this.formcontacto=this.fb.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mensaje:['',[]]
    })
  }
  
  cargarDataFormulario(){
    this.formcontacto.reset({
      nombre:'',
      mensaje:'',
      email:'',
    })
  }

  isValid(campo:string){
    return this.formcontacto.get(campo).invalid && this.formcontacto.get(campo).touched;
  }

  enviarFormContacto(){
    this.enviado=false;
    if(this.formcontacto.invalid){
      return Object.values(this.formcontacto.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }

    this.loading=true; 
    this.mensaje.sendMessage(this.formcontacto.value).subscribe(resp=>{
      this.loading=false;
      this.enviado=true;
    });
    this.cargarDataFormulario();
    
    
  }

}
