import { DiscoveryService } from '@nestjs/core';
import { Inject, Injectable, OnModuleInit, Type } from '@nestjs/common';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';

@Injectable()
export abstract class AbstractModuleExplorer<
  T extends Map<string, InstanceWrapper>,
> implements OnModuleInit
{
  protected abstract readonly serviceMap: T;

  @Inject()
  private readonly discoveryService: DiscoveryService;

  abstract getType(type: Type): string;

  abstract isTarget(type: Type): boolean;

  onModuleInit(): void {
    this.explorer();
  }

  private explorer(): void {
    this.discoveryService
      .getProviders()
      .filter((instanceWrapper) =>
        this.isTarget(this.getInstanceMetatype(instanceWrapper)),
      )
      .forEach((instanceWrapper) => {
        this.registerService(instanceWrapper);
      });
  }

  private getInstanceMetatype(instanceWrapper: InstanceWrapper): Type {
    return !instanceWrapper.metatype || instanceWrapper.inject
      ? instanceWrapper.instance?.constructor
      : instanceWrapper.metatype;
  }

  private registerService(instanceWrapper: InstanceWrapper): void {
    const dumpType = this.getType(this.getInstanceMetatype(instanceWrapper));
    this.serviceMap.set(dumpType, instanceWrapper);
  }
}
