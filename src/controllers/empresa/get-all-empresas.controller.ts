import { Request, Response } from 'express';
import { EmpresaModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class GetAllEmpresas {
  public async handle(_request: Request, response: Response) {
    const empresas = await EmpresaModel.find();
    return response.json(HttpResponse.create(HttpStatus.OK, empresas));
  }
}

export default GetAllEmpresas;