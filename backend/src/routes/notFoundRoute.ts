import { Router } from "express";
import {getNotFound, postNotFound,patchNotFound,putNotFound,deleteNotFound} from "../controllers/notFoundController";

const router = Router();

router.get("*", getNotFound);
router.post("*", postNotFound);
router.patch("*", patchNotFound);
router.put("*", putNotFound);
router.delete("*", deleteNotFound);

export default router