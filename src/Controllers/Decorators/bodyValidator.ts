import "reflect-metadata";
import { MetadataKeys } from "./Enums/MetadataKeys";

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
}
