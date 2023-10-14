const expres = require("express")
const cors = require("cors")

const app = expres()
app.use(cors())

app.get("/", (req,res) =>{
    res.json({data: "Hola atodos un GET"})
})

app.listen(5000)