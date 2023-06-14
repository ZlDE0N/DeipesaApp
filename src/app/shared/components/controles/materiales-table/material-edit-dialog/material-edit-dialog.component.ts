import { Component, Inject } from '@angular/core';
import {
  BaseEditDialogComponent,
  BaseEditDialogData,
  BaseEditDialogResult,
} from '../../../base-edit-dialog/base-edit-dialog.component';
import { Material } from 'src/app/shared/models/Material';
import { MaterialService } from 'src/app/services/material.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-edit-dialog',
  templateUrl: './material-edit-dialog.component.html',
  styleUrls: ['./material-edit-dialog.component.css'],
})
export class MaterialEditDialogComponent extends BaseEditDialogComponent<
  Material,
  string
> {
  constructor(
    private materialService: MaterialService,
    @Inject(MAT_DIALOG_DATA) data: BaseEditDialogData<string>,
    dialogRef: MatDialogRef<
      MaterialEditDialogComponent,
      BaseEditDialogResult<Material>
    >
  ) {
    super(data, dialogRef);

    this.title = 'Nuevo material';
    this.service = this.materialService;

    this.form = new FormGroup({
      idMaterial: new FormControl('', [Validators.required]),
      nombreMaterial: new FormControl('', [Validators.required]),
      unidadDeMedida: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      pvu: new FormControl('', [Validators.required]),
    });
  }

  override getFormData(): Material {
    const material = <Material>{};

    material.idMaterial = this.form.get('idMaterial')?.value;
    material.nombreMaterial = this.form.get('nombreMaterial')?.value;
    material.unidadDeMedida = this.form.get('unidadDeMedida')?.value;
    material.descripcion = this.form.get('descripcion')?.value;
    material.marca = this.form.get('marca')?.value;
    material.pvu = this.form.get('pvu')?.value;

    return material;
  }

  override getId(model: Material): string {
    return model.idMaterial;
  }

  override updateTitle(data: Material): void {
    this.title = `Editar material ${data.nombreMaterial}`;
  }
}
