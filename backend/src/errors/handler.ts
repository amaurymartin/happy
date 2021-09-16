import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, req, res) => {
  // eslint-disable-next-line no-console
  console.error(error);

  return res.status(500).json({
    errors: {
      message: 'Internal server error',
    },
  });
};

export default errorHandler;
