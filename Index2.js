const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res)=>{
    const log = `${Date.now()}:${req.method} ${req.url} New request received\n`
    const myurl = url.parse(req.url, true)
    
    if(req.url!=="/favicon.ico")
    {
        console.log(myurl)
        fs.appendFile("./log.txt", log, (err, data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                
                switch(myurl.pathname)
                {
                    case "/":
                        const username = myurl.query.name
                        res.end(`Hello ${username} this is HomePage`)
                        break
                    case "/contact":
                        res.end("contact page")
                        break
                    case "/about":
                        res.end("about page")
                        break
                    default:
                        res.end("404 Not Found")
                }
            }
        })
    }
    
})

server.listen(8000, ()=>{
    console.log("server is running successfully")
})