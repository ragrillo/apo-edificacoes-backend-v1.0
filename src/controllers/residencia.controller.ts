import { IResidenciaService } from '../services/residencia.service';
import { ResidenciaDTO, ResidenciaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IResidenciaController extends IBaseController<ResidenciaModel, ResidenciaDTO> {}

class ResidenciaController implements IResidenciaController {
  constructor(private readonly service: IResidenciaService) {}

  async create(request: IHttpRequest<ResidenciaDTO>): Promise<IHttpResponse<ResidenciaModel>> {
    const payload = request.body;

    if (!payload) {
      const httpResponse: IHttpResponse<ResidenciaModel> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.create(payload);

    const httpResponse: IHttpResponse<ResidenciaModel> = {
      statusCode: HttpStatusCode.CREATED,
    };

    return httpResponse;
  }

  async findAll(): Promise<IHttpResponse<ResidenciaModel[]>> {
    const residencias: ResidenciaModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<ResidenciaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: residencias,
    };

    return httpResponse;
  }
}

export { IResidenciaController, ResidenciaController };