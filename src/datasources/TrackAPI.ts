import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'; 
   
    getTracksForHome() {
        return this.get<TrackModel[]>('tracks')
    }
      
    getTracks() {
      return this.get('tracks')
    }
   
    getAuthor(authorId: string) {
        return this.get(`author/${authorId}`)
    }
}

