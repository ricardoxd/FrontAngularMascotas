import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../providers/api.service';
import { first } from 'rxjs/operators';
import { IPersona } from '../../interfaces/IPersona';
import { IMascota } from '../../interfaces/IMascota';

@Component({
  selector: 'app-show-mascotas',
  templateUrl: './show-mascotas.component.html',
  styleUrls: ['./show-mascotas.component.scss']
})
export class ShowMascotasComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  public persona: IPersona;
  public mascotas: IMascota[];
  ngOnInit(): void {
  	this.getMascotas();
  }
  /**
   * Get mascotas
   * @return {void}
   */
  private getMascotas(): void {
    this.apiService.getMascotasbyPersona(this.persona.idPersona)
    .pipe(first())
    .subscribe(
        mascotas => {
          this.mascotas = mascotas;
        },
        error => {
        });
  }

}
