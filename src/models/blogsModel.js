const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjecId

const blogsSchema = new mongoose.Schema({
title: {
    type: String,
required: true}, 
body: {
    type: String,
    required: true}, 
authorId: {
    type: objectId,
    ref: Author,
    required: true
}, 
tags: [String], 
category:  {
    type: String,
required: true}, 
subcategory: [String],
isDeleted: {
    type: Boolean, 
    default: false
}, 
publishedAt:String,
isPublished: {
    type: Boolean, 
    default: false
},
}, { timestamps: true})


module.exports = mongoose.model("Blog", blogsSchema )