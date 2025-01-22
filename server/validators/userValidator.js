export const joiUserValidator = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = parsedBody;
    next();
  } catch (error) {
    const err = error.details.map((detail) => detail.message).join(", ");
    next(err);
  }
};
