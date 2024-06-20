const config = {
    schema: './src/schema.ts',
    generates: {
        './src/types.ts': {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: './context#DataSourceContext',
                mappers: {
                    Track: './models#TrackModel',
                    Author: './models#AuthorModel',
                    Film: './models#FilmModel',
                    People: './models#PeopleModel',
                }
            }
        }
    }
};
export default config;
