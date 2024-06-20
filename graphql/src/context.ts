import { TrackAPI } from "./datasources/TrackAPI.js";
import { GhibliAPI } from "./datasources/GhibliAPI.js";
import { AuthenticatedUser } from "./modules/auth.js";
import { PrismaClient } from "@prisma/client";

export type DataSourceContext = {
    dataSources: {
      db: PrismaClient,
      trackAPI: TrackAPI,
      ghibliApi: GhibliAPI,
    };
    user: AuthenticatedUser | null
  };