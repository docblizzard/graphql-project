import { RESTDataSource } from "@apollo/datasource-rest";
export class GhibliAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://ghibliapi.dev/";
    }
    getFilms() {
        return this.get('films');
    }
    getPeople() {
        return this.get('people');
    }
    getPeopleByUrls(urls) {
        return urls
            .filter(url => url !== `${this.baseURL}people/`)
            .map(url => this.get(url));
    }
    getFilmsByUrls(urls) {
        return urls.map(url => this.get(url));
    }
}
