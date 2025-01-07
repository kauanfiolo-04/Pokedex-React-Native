import pokeRoute from './pokeRoute.js';
import getFavoriteRoute from './getFavoriteRoute.js';
import userRoute from './userRoute.js'

const router = app => {
  app.use(pokeRoute);
  app.use(getFavoriteRoute);
  app.use(userRoute);
};

export default router;