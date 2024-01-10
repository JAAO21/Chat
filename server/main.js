const {PORT}=require('./config')
const main=(serverHttp)=>{
//liste port express
    serverHttp.listen(PORT, () => { console.log(`server on port ${PORT}`) });
}

module.exports=main;