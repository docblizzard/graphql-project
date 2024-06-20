import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          Track: './models/models#TrackModel',
          Author: './models/models#AuthorModel',
          Film: './models/models#FilmModel',
          People: './models/models#PeopleModel',
        }
      }
    }
  }
}
 
export default config