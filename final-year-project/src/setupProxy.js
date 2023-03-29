const {createProxyMiddleware}=require("http-proxy-middleware");
module.exports=function (app){
    app.use(
        "/api",
        createProxyMiddleware({
            target:"http://locahost:3001",
            changeOrigin:true,
        })
    )
}