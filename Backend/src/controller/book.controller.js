import Book from "../models/book.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";

const getBook=asyncHandler(async (req,res)=>{
    const book=await Book.find();
   try {
    const book=await Book.find();
    res.status(200).json(book);
   } catch (error) {
      console.log("Eorror",error);
      res.status(500).json(error);
      
   }
})

export {getBook};