import Home from './Home';
import AboutUs from './AboutUs';
import ServiceEcommerce from './ServiceEcommerce';
import ServiceLanding from './ServiceLanding';
import ServiceWeb from './ServiceWeb';
import Contact from './Contact';

const routes = [ 

  { path: '/', component: <Home />},
  { path: '/about', component: <AboutUs />}, 
  { path: '/service-ecommerce', component: <ServiceEcommerce />},
  { path: '/service-landing', component: <ServiceLanding />},
  { path: '/service-web', component: <ServiceWeb />},
  { path: '/contact', component: <Contact />},
]

export default routes;