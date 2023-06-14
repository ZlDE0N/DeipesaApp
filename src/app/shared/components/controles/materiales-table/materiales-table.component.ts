import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from 'src/app/shared/models/Material';
import { MatDialog } from '@angular/material/dialog';
import { MaterialEditDialogComponent } from './material-edit-dialog/material-edit-dialog.component';
import {
  BaseEditDialogData,
  BaseEditDialogResult,
} from '../../base-edit-dialog/base-edit-dialog.component';

@Component({
  selector: 'app-materiales-table',
  templateUrl: './materiales-table.component.html',
  styleUrls: ['./materiales-table.component.css'],
})
export class MaterialesTableComponent implements OnInit {
  dataSource: Material[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'measurementUnit',
    'description',
    'brand',
    'pvu',
    'actions',
  ];

  constructor(
    private materialService: MaterialService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials(): void {
    this.materialService.getAll().subscribe({
      next: (result) => {
        this.dataSource = [...result];
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onCreateMaterial(): void {
    const dialogRef = this.dialog.open<
      MaterialEditDialogComponent,
      BaseEditDialogData<string>,
      BaseEditDialogResult<Material>
    >(MaterialEditDialogComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        this.getMaterials();
      },
      error: (error) => console.error(error),
    });
  }

  onEdit(id: string): void {
    const dialogRef = this.dialog.open<
      MaterialEditDialogComponent,
      BaseEditDialogData<string>,
      BaseEditDialogResult<Material>
    >(MaterialEditDialogComponent, {
      data: { id },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        this.getMaterials();
        console.log(result);
      },
      error: (error) => console.error(error),
    });
  }

  onDelete(id: string): void {
    console.log('deleting');
    this.materialService.delete(id).subscribe({
      next: () => this.getMaterials(),
      error: (error) => console.error(error),
    });
  }
}
