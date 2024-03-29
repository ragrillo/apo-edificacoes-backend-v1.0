import IBaseService from './base.service';
import { IEscolaRepository } from '../repositories/escola.repository';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';

interface IEscolaService extends IBaseService<EscolaModel, EscolaDTO> {
  findByProprietarioId(id: string): Promise<EscolaModel[]>;
}

class EscolaService implements IEscolaService {
  constructor(private readonly repository: IEscolaRepository) {}

  async create(data: EscolaDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await this.repository.findAll();

    return escolas;
  }

  async findById(id: string): Promise<EscolaModel> {
    const escola: EscolaModel = await this.repository.findById(id);

    return escola;
  }

  async findByProprietarioId(id: string): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await this.repository.findByProprietarioId(id);

    return escolas;
  }

  async update(id: string, data: EscolaDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IEscolaService, EscolaService };
