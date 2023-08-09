import { loginRoutes } from './login';
import { homeRoutes } from './home';
import { welcomeRoutes } from './welcome';

// all routes
export const routes = [...loginRoutes, ...homeRoutes, ...welcomeRoutes];
