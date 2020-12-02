const express = require('express')
const cors = require('cors')

const port = 80

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
	console.log("someone accesed your site")
	res.send("Hello world!")

})

app.listen(port, ()=>{
	console.log(`app is running on port ${port}`)
})


