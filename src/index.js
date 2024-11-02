const express = require('express');
const cors = require('cors');
const app = express();

const { PrismaClient, Problem } = require('@prisma/client')
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/info/root', async (req, res) => {
    try {
        const solution = await prisma.Info.findMany(
            {
                where: {
                    Problem: "Root"
                }
            }
        );
        return res.status(200).json({
            result: true,
            status: "success",
            data: solution
        })
    } catch (err) {
        return res.status(400).json({
            result: false,
            status: "fail",
            msg: "ไม่พบข้อมูล",
        })
    }
});

app.get('/info/linear', async (req, res) => {
    try {
        const solution = await prisma.Info.findMany(
            {
                where: {
                    Problem: "Linear"
                }
            }
        );
        return res.status(200).json({
            result: true,
            status: "success",
            data: solution
        })
    } catch (err) {
        return res.status(400).json({
            result: false,
            status: "fail",
            msg: "ไม่พบข้อมูล",
        })
    }
});

app.get('/info/Interpolation', async (req, res) => {
    try {
        const solution = await prisma.Inter.findMany(
            {
                where: {
                    Problem: "Interpolation"
                }
            }
        );
        return res.status(200).json({
            result: true,
            status: "success",
            data: solution
        })
    } catch (err) {
        return res.status(400).json({
            result: false,
            status: "fail",
            msg: "ไม่พบข้อมูล",
        })
    }
});

app.get(`/api`, async (req, res) => {
    try {
        const solution = await prisma.Simpson.findMany(
            {
                where: {
                    Problem: "Differentiation"
                }

            }
        )
        return res.status(200).json({
            result: true,
            status: "success",
            data: solution
        })
    } catch (error) {
        return res.status(400).json({
            result: false,
            status: "fail",
            msg: "ไม่พบข้อมูล",
        })
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});