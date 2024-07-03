
import { CorsOptions, CorsOptionsDelegate } from 'cors';

const NODE_ENV = process.env.NODE_ENV || 'development';

function originChecker(origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void): void {
  
  if (NODE_ENV === 'development') {
    callback(null, true);  // Allow all origins in development
  } else {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');

    if (!allowedOrigins) {
      callback(new Error('No CORS configured'));
    } else if (allowedOrigins.indexOf(origin || '') !== -1 || !origin) { //allow only some origins, or mobile and curl requests
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

const CORS_OPTIONS: CorsOptions | CorsOptionsDelegate = {
  origin: originChecker,
  optionsSuccessStatus: 200
};

export default CORS_OPTIONS;
