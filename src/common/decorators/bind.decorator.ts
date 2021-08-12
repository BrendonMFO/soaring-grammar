import { Type } from '@nestjs/common';

export const SANITIZE_BIND_KEY = Symbol('__sanitize_bind_key__');

export interface BindType {
  index: number;
  type: Type;
}

export function Bind(type: Type): ParameterDecorator {
  return (target, propertyKey, index): void => {
    const binds: BindType[] =
      Reflect.getMetadata(SANITIZE_BIND_KEY, target) ?? [];

    binds.push({ index, type });

    Reflect.defineMetadata(SANITIZE_BIND_KEY, binds, target, propertyKey);
  };
}
