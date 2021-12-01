import {
  ContextId,
  InstanceWrapper,
} from '@nestjs/core/injector/instance-wrapper';
import { Injector } from '@nestjs/core/injector/injector';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export abstract class ServiceInjector<
  M extends Map<string, InstanceWrapper> = Map<string, InstanceWrapper>,
> {
  protected readonly serviceMap: M;

  private readonly injector = new Injector();

  getService(type: string, contextId: ContextId): Promise<unknown> {
    const dumpServiceWrapper = this.serviceMap.get(type);

    if (!dumpServiceWrapper) {
      throw new BadRequestException(this.serviceNotFoundMessage(type));
    }

    return this.injector.loadPerContext(
      dumpServiceWrapper.instance,
      dumpServiceWrapper.host,
      dumpServiceWrapper.host.providers,
      contextId,
    );
  }

  protected serviceNotFoundMessage(type: string): string {
    return `Service ${type} is not available`;
  }
}
