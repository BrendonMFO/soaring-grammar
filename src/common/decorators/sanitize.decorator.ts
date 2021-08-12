import { validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';
import { sanitize } from '@neuralegion/class-sanitizer';
import { BindType, SANITIZE_BIND_KEY } from './bind.decorator';

export function Sanitize(): MethodDecorator {
  return (
    target,
    propertyKey,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: TypedPropertyDescriptor<any>,
  ): void => {
    const originalMethod: (...args: unknown[]) => unknown = descriptor.value;
    descriptor.value = function (...args: unknown[]): unknown {
      const binds: BindType[] = Reflect.getMetadata(
        SANITIZE_BIND_KEY,
        target,
        propertyKey,
      );
      args.forEach((arg, i) => {
        const bindType = binds.find(({ index }) => index === i);
        if (!bindType || !arg) return;
        const param = plainToClass(bindType.type, args[bindType.index]);
        sanitize(param);
        const errors = validateSync(param);
        if (errors.length) {
          throw new BadRequestException(errors);
        }
        args[bindType.index] = param;
      });
      return originalMethod.apply(this, args);
    };
  };
}
