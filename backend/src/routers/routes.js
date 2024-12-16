import pokeRoute from './pokeRoute.js';
import getFavoriteRoute from './getFavoriteRoute.js';

const router = app => {
  app.use(pokeRoute);
  app.use(getFavoriteRoute);
};

export default router;