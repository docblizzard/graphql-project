import { TrackAPI } from "./datasources/TrackAPI.js";

export type DataSourceContext = {
    dataSources: {
      trackAPI: TrackAPI;
    };
  };