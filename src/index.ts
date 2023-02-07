// loop permission middleware
export default function loopPermit(permittedRole) {
  return (request, response, next) => {
    const { permissions } = request

    if (permissions.scopes.includes(permittedRole)) {
      next(); // we will allow it, go forth!
    } else {
      response.status(403).json({message: `user does not have the required permission to access this resource: ${permittedRole}`});
    }
  }
}
