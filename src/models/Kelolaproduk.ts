import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize"
import database from "../database/database";
import { error } from "console";

class Kelolaproduk extends Model {
    public id!:number;
    public userId!: string;
    public brandName!: string;
    public price!: number;
    public stock!: number;
    public category!: string;
    public imageUrl!: string;
}

Kelolaproduk.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: database,
    tableName: "KelolaProduk"
}
).sync()
.then(() => console.log("Kelolaproduk model synced successfully."))
.catch((error: any) => console.error(`Error syncing Kelolaproduk model: ${error.message}`));

export default Kelolaproduk;