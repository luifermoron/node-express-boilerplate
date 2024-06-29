import { Request, Response, NextFunction } from "express";

export default function versionMiddleware(version: number) {
  return function(req: Request, res: Response, next: NextFunction) {
   
    if (!req.headers.version) return next(new Error("Version Header param was not provided"));
    let requestVersion = parseInt((req.headers.version as string).substring(1)); 

    if (typeof requestVersion !== 'number') {
      return next(new Error("Invalid API version requested. This must be a number"));
    } else if (requestVersion >= version) {
      return next();
    }

    return next("route");
  };
}