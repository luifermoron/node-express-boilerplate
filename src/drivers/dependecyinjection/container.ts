import { asClass, InjectionMode, createContainer } from 'awilix';
import TeamRepository from '../../domain/respositories/TeamRepository';
import TeamUseCases from '../../useCases/TeamUseCases';

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    teamsRepository: asClass(TeamRepository)
    .singleton(),
    teamUseCases: asClass(TeamUseCases).singleton(),
});

export default container;