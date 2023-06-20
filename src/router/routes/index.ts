import { loginRoutes } from './login';
import { homeRoutes } from './home';

// all routes
export const routes = [...loginRoutes, ...homeRoutes];
