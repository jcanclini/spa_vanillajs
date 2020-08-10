const resolveRoutes = (route) => {
  if(route === '/'){
    return route;
  }

  if( route.length <= 3 && !isNaN(parseInt(route))){
    return '/:id';
  }

  return `/${route}`;

}

export default resolveRoutes;
