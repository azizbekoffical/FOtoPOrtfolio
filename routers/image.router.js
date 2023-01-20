import { Router } from "express";
import image from '../controllers/image.controller.js'

const router = Router()

router.get('/pic', image.ImagePage);

export default router;