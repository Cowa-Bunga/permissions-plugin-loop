// middleware for doing role-based permissions
import jwt from 'jsonwebtoken';

const JWT_SECRETE: any = process.env.JWT_SECRETE;

export default function loopPermit(permittedRole) {
  // return a middleware
  return (request, response, next) => {

    const authHeader = request.header('Authorization');
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer') {
      response.status(401).json({
        message:
          'User does not have proper authorization. Please provide a Bearer token authorization'
      });
    }
    const decoded: any = jwt.verify(token, JWT_SECRETE);

    const permissions = decoded.permissions;

    if (permissions.scopes.includes(permittedRole)) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      response.status(403).json({ message: `user does not have the required permission to access this resource: ${permittedRole}` });
    }
  };
}
