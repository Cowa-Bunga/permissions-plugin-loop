// loop permission middleware
export default function loopPermit(permittedRole) {
  // return a middleware for express
  return (request, response, next) => {
    const { permissions } = request

    if (permissions.scopes.includes(permittedRole)) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      response.status(403).json({message: "Forbidden"}); // user is forbidden
    }
  }
}
