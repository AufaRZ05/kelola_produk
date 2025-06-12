// @ts-nocheck
import Express from "express";
import KelolaProdukController from "../controller/kelolaProduk_controller";
import upload from "../middleware/upload";

const router = Express.Router();

router.get("/kelolaproduks", KelolaProdukController.index);
router.get("/kelolaproduk/:id", KelolaProdukController.show);
router.post("/kelolaproduk", upload.single("image"), KelolaProdukController.store);
router.put("/kelolaproduk/:id", upload.single("image"), KelolaProdukController.update);
router.delete("/kelolaproduk/:id", KelolaProdukController.destroy);

export default router;