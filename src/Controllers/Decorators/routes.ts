import "reflect-metadata";
import {Methods} from "./Enums/Methods";
import {MetadataKeys} from "./Enums/MetadataKeys"

function routerBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const del = routerBinder(Methods.del);
export const post = routerBinder(Methods.post);
