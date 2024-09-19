import 'dotenv/config'
import connectDB from "./src/db/index.js";
import { app } from './src/app.js';
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"




connectDB()
.then(
    app.listen(process.env.PORT,()=>{
        console.log(`app listing at port ${process.env.PORT}`);
        
    })
)
.catch((err)=>{
    console.log(err);
    
})

//defining routes
app.use("/book",bookRoute);
//final url= http://localhost:4001/book/getBookData
app.use("/user",userRoute)

app.use("/user",userRoute)




