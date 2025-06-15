import  { Request, Response} from "express";
import Kelolaproduk from "../models/Kelolaproduk";

const KelolaProdukController = {
    index: async (req: Request, res: Response) => {
        try {
            const userId = req.query.userId
            const kelolaproduk = await Kelolaproduk

            return res.status(200).json({
                status: 200,
                message: "Kelolaproduk sent successfully.", 
                kelolaproduk: kelolaproduk
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching kelolaproduk: ${error.message}`
            })
        }
    },

    show: async (req: Request, res: Response) => {
        try {
            const kelolaprodukId = req.params.id
            const kelolaproduk = await Kelolaproduk.findByPk(kelolaprodukId)

            if (kelolaproduk == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Kelolaproduk not found"
                })
            }

            return res.status(200).json({
                status: 200,
                message: "Kelolaproduk sent successfully.",
                kelolaproduk: kelolaproduk
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching kelolaproduk: ${error.message}`
            })
        }
    },

    store: async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({
                    status: 400,
                    message: "Image file is required."
                })
            }

            const baseUrl = `${req.protocol}://${req.get("host")}`;
            const imageUrl = `${baseUrl}/public/images/${req.file.filename}`;

            const kelolaproduk = await Kelolaproduk.create({
                ...req.body,
                imageUrl: imageUrl,
            })

            return res.status(200).json({
                status: 201,
                message: "Kelolaproduk created successfully",
                kelolaproduk: kelolaproduk
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching kelolaproduk: ${error.message}`
            })
        }
    },

    update: async (req: Request, res: Response) => {
        try {
            const kelolaprodukId = req.params.id
            const kelolaproduk = await Kelolaproduk.findByPk(kelolaprodukId);

            if (kelolaproduk == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Kelolaproduk not found"
                })
            }

            if (req.file) {
                 const baseUrl = `${req.protocol}://${req.get("host")}`;
                 const imageUrl = `${baseUrl}/public/images/${req.file.filename}`;
                 req.body.imageUrl = imageUrl;
            }

            await kelolaproduk.update(req.body)

            return res.status(200).json({
                status: 200,
                message: "Kelolaproduk updated successfully.",
                kelolaproduk: kelolaproduk
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching kelolaproduk: ${error.message}`
            })
        }
    },

    destroy: async (req: Request, res: Response) => {
        try {
            const kelolaprodukId = req.params.id
            const kelolaproduk = await Kelolaproduk.findByPk(kelolaprodukId)

             if (kelolaproduk == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Kelolaproduk not found"
                })
            }

            await kelolaproduk.destroy();
            return res.status(200).json({
                status: 200,
                message: "Kelolaproduk deleted successfully.",
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching kelolaproduk: ${error.message}`
            })
        }
    }
}

export default KelolaProdukController;