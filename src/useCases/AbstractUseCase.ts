import IRepository from "../domain/respositories/IRepository";

export default abstract class AbstractUseCases<
  Model,
  BaseRepository extends IRepository<Model>
> {
    repository: BaseRepository;

    constructor(_repository: BaseRepository) {
        this.repository = _repository;
    }
    
    async getAll(): Promise<Model[]> {
      return this.repository.getAll();
    }
}