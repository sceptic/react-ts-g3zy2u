import { PostModels } from '../domain/PostModels';
import { PostRepository } from '../infra/PostRepository';

export const PostQry = async (id: number): Promise<PostModels.model> => {
  const result = await new PostRepository().fetch(id);
  return new Runner().execute<PostModels.model>(result)
};
 
class Runner {
  static logger: (...data: any[]) => void = console.log;

  static build() {
    this.logger = console.log
  }

  async execute<T>(data:T){
    Runner.logger(data);
    return data;
  }
}
