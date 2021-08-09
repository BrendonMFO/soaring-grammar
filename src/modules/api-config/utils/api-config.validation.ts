import { object, number, string } from 'joi';

export const validationSchema = object({
  API_PORT: number().required(),
  RAPID_API_GOOGLE_TRANSLATE_URL: string().required(),
  RAPID_API_GOOGLE_TRANSLATE_KEY: string().required(),
  RAPID_API_GOOGLE_TRANSLATE_HOST: string().required(),
});
