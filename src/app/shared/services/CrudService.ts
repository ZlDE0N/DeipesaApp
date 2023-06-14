import { Observable } from 'rxjs';

export interface CrudService<
  Model,
  IdType = string,
  CreateDto = Partial<Model>,
  UpdateDto = Partial<Model>
> {
  getAll(): Observable<Model[]>;
  getById(id: IdType): Observable<Model>;
  delete(id: IdType): Observable<any>;
  update(model: UpdateDto, id: IdType): Observable<any>;
  create(model: CreateDto): Observable<any>;
}
