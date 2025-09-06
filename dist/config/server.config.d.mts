import type { Application } from 'express';
import multer from 'multer';
declare function jsonConfig(app: Application): void;
declare function urlEncodedConfig(app: Application): void;
declare function multerConfig(): multer.Multer;
declare function staticFileConfig(app: Application): void;
export { jsonConfig, urlEncodedConfig, multerConfig, staticFileConfig };
