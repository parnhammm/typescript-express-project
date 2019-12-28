import "reflect-metadata";
import { Methods } from "./Enums/Methods";
import { MetadataKeys } from "./Enums/MetadataKeys";
import { RequestHandler } from "express";

//Ensures that anything using out @get/@post etc need to be request handlers!
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const del = routerBinder(Methods.del);
export const post = routerBinder(Methods.post);
