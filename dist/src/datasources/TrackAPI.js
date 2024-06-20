import { RESTDataSource } from "@apollo/datasource-rest";
export class TrackAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }
    getTracksForHome() {
        return this.get('tracks');
    }
    getTracks() {
        return this.get('tracks');
    }
    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
    incrementLikes(id) {
        return this.patch(`track/${id}/numberOfLikes`);
    }
}
