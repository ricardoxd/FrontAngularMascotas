import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../providers/api.service';
import { first } from 'rxjs/operators';
import { IPersona } from '../../interfaces/IPersona';
import { MatDialog } from '@angular/material/dialog';
import { ShowMascotasComponent } from '../../components/show-mascotas/show-mascotas.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
	displayedColumns: string[] = ['idPersona', 'nombre', 'apellido', 'acciones'];
  public personas: IPersona[];
	constructor(
		private apiService: ApiService,
    	private dialog: MatDialog
    ) { 
  		this.getPersonas();
	}
  ngOnInit(): void {
  	
  }
  /**
   * Get personas
   * @return {void}
   */
  private getPersonas(): void {
    this.apiService.getPersonaList()
    .pipe(first())
    .subscribe(
        personas => {
          this.personas = personas;
        },
        error => {
        });
  }
  /**
   * Detail mascotas
   * @return {void}
   */
  public detailMascotas(persona: IPersona): void {
    const dialogRef = this.dialog.open(ShowMascotasComponent);
    dialogRef.componentInstance.persona = persona;
  }
}
