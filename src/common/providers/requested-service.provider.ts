import { Request } from 'express';
import { ContextIdFactory, REQUEST } from '@nestjs/core';
import { ServiceInjector } from '../helpers/service.injector';
import { FactoryProvider, Scope, Type } from '@nestjs/common';

export const requestedServiceProvider = (
  provide: symbol | string,
  serviceInjector: Type<ServiceInjector>,
  queryProp: string,
): FactoryProvider => ({
  provide,
  scope: Scope.REQUEST,
  inject: [REQUEST, serviceInjector],
  useFactory: (request: Request, serviceInjector: ServiceInjector): unknown => {
    const type = request.query[queryProp] as string;
    return serviceInjector.getService(
      type,
      ContextIdFactory.getByRequest(request),
    );
  },
});
