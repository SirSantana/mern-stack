import express from 'express'

const routes = express.Router()

routes.get("/posts", (req, res)=>{
    res.send("Aqui encontraras diferentes posts, se el primero!")
})

export default routes

