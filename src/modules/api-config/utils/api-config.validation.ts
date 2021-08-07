import { object, number } from 'joi';

export const validationSchema = object({
  API_PORT: number().required(),
});
