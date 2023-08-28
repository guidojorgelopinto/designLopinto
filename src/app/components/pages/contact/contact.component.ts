import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {

  contactform!: FormGroup;

  isSubmit = false; // Corregido a "false" para que no muestre el mensaje antes de enviar.
  submitMessage = "";

  constructor(
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private firestore: Firestore,
  ) { }

  ngOnInit() {
    // Establece el color de la letra del header en este componente.//
    this.headerService.setColorLetra('black');

    // Datos del formulario//
    this.contactform = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  submitData() {
    const collectionInstance = collection(this.firestore, 'contactform');
    const formData = this.contactform.value; // Obtén los valores del formulario
  
    addDoc(collectionInstance, formData)
      .then(() => {
        console.log('Data Saved Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  
    this.isSubmit = true;
    this.submitMessage = 'Submitted Successfully';
    setTimeout(() => {
      this.isSubmit = false;
      this.submitMessage = '';
    }, 8000);
  }  
}

