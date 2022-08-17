const express=require("express")
const app=express()
const port=8080
app.use(express.json()) 

// const mqtt=require("mqtt")
// const topik="justcoba177"
// const client=mqtt.connect("mqtt://test.mosquitto.org",{clientId:topik})

app.post("/",(req,res)=>{
    if(req.body.message=="1"){
        res.send("Ligh On")   
    }else if(req.body.message=="0"){
        res.send("Ligh Off") 
    }else{
        res.send("Wrong Message") 
    }
    // client.publish(req.body.topic,req.body.message)
})


// client.on('connect', function() {
//   publish(topik,"0")
// });

// const publish=(topic,message)=>{
   
//     if(client.connected){
//         console.log(`publish to ${topic} : `,message)    
//         client.publish(topic,message)
//     }
// }

app.listen(port,()=>{
    console.log(`app started on ${port}`)
})