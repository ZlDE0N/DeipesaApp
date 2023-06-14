import { Observable } from 'rxjs';
import { CrudService } from './CrudService';
import { HttpClient } from '@angular/common/http';

export abstract class BaseCrudService<
  Model,
  IdType = number,
  CreateDto = Partial<Model>,
  UpdateDto = Partial<Model>
> implements CrudService<Model, IdType, CreateDto, UpdateDto>
{
  constructor(protected resourceUrl: string, protected http: HttpClient) {}

  getAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.resourceUrl);
  }

  getById(id: IdType): Observable<Model> {
    return this.http.get<Model>(`${this.resourceUrl}${id}`);
  }

  delete(id: IdType): Observable<any> {
    return this.http.delete(`${this.resourceUrl}${id}`);
  }

  update(model: UpdateDto, id: IdType): Observable<any> {
    return this.http.put(`${this.resourceUrl}${id}`, model);
  }

  create(model: CreateDto): Observable<any> {
    return this.http.post(this.resourceUrl, model);
  }
}
