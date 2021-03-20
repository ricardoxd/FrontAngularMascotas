import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IPersona } from '../../interfaces/IPersona';
import { IMascota } from '../../interfaces/IMascota';
import { ApiService } from '../../providers/api.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.scss']
})
export class CreatePersonaComponent implements OnInit {
  mascotasForm: FormGroup;
  public selected = new FormControl('1', [
    Validators.required,
    Validators.pattern('1'),
  ]);
  constructor(private apiService: ApiService, private fb:FormBuilder) {
    this.mascotasForm = this.fb.group({
      mascotas: this.fb.array([]) ,
    });
    this.addMascotas();
  }
  /**
   * Formulario de mascotas
   * @return {FormArray}
   */
  public get mascotas() : FormArray {
    return this.mascotasForm.get("mascotas") as FormArray
  }
  /**
   * Nueva mascota
   * @return {FormGroup}
   */
  newMascota(): FormGroup {
     return this.fb.group({
       nombre: new FormControl('', [
        Validators.required
      ]),
       idTipoMascota: new FormControl('', [
        Validators.required
      ]),
     })
  }
  /**
   * Nueva mascota a lista
   * @return {void}
   */
  addMascotas(): void {
     this.mascotas.push(this.newMascota());
  }
  /**
   * Nueva mascota a lista
   * @param {number} i Quita mascota
   * @return {void}
   */
  removeMascota(i:number) {
    if (this.mascotas.length > 1) {
      this.mascotas.removeAt(i);
    }
  }
  ngOnInit(): void {
  }
  public nombreFormControl = new FormControl('', [
    Validators.required
  ]);
  public apellidoFormControl = new FormControl('', [
    Validators.required
  ]);
  /**
   * Register personas
   * @return {void}
   */
  public registerPersona(): void {
    if (
      !this.nombreFormControl.hasError('required')&&
      !this.apellidoFormControl.hasError('required')&&
      !this.mascotasForm.invalid
      ) {
      const persona: IPersona = {
        idPersona: undefined,
        nombre: this.nombreFormControl.value,
        apellido: this.apellidoFormControl.value,
        mascotas: this.mascotasForm.value.mascotas
      };
      this.apiService.createPersonaWithMascotas(persona)
      .pipe(first())
      .subscribe(
          persona => {
            this.nombreFormControl.reset();
            this.apellidoFormControl.reset();
            this.mascotasForm.reset();
            alert('Creado con exito');
          },
          error => {
          });
    } else {
      alert('Tiene campos vacios');
    }
  }
}
