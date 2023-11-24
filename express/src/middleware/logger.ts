// logger middleware
import * as log4js from "log4js";
import path from "path";
import { Express, Request, Response, NextFunction } from "express";

const logDirectory = path.join(process.cwd(), "src/log");

// console.log(logDirectory);
// console.log(path.join(logDirectory, "setting.config.json"));

// logging処理を書く
const myLogger = (req: Request, res: Response, next: NextFunction) => {
    // logger
    log4js.configure(path.join(logDirectory, "setting.config.json"));
    const log = log4js.getLogger();
    log.level = "all";
    log.info("This is debug log");
    next();
}

export default myLogger;
