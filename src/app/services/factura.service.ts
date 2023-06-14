import { Injectable } from '@angular/core';
import { Factura } from '../shared/models/Factura';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BaseCrudService } from '../shared/services/BaseCrudService';

@Injectable({
  providedIn: 'root',
})
export class FacturaService extends BaseCrudService<Factura, string> {
  constructor(http: HttpClient) {
    const resourceUrl = `${environment.apiBaseUrl}${environment.facturasEndpoint}`;
    super(resourceUrl, http);
  }
}
