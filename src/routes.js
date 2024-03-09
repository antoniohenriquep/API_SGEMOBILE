import { Router } from "express";
import { RootController } from "./controllers/root/RootController";

const router = Router()

router.get('/', new RootController().handle)

export {router}