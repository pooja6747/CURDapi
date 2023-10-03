const User = require('../Model/userModel')

exports.getUser = async(req,res)=>{
    try {
        const data = await User.find();
        res.json(data) 
    } catch (error) {
        res.status(400).send('error',error.message)
    }
} 

exports.postUser = async(req,res)=>{
    try {
        const data = await User.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({
            errors: true, message: error.message
        })
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const data = await Book.findByIdAndDelete(req.params.id)
        res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({
            errors: true, message: error.message
        })
    }
}

