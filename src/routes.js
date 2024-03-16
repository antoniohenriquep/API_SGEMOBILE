import { Router } from "express";
import { RootController } from "./controllers/root/RootController";

const router = Router()

router.get('/equipamentos?status=backup')
router.get('/equipamentos/:patrimonio')

router.put('/conjunto/:id')

export {router}