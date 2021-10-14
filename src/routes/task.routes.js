import express from 'express'

const routes = express.Router()

routes.get("/posts", (req, res)=>{
    res.send("Bienvenido")
})

export default routes

