export default interface IRepository<Model> {
    getAll(): Promise<Model[]>;
    getByRegion(region: string): Promise<Model[]>;
}