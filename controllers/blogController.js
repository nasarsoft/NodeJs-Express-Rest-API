exports.showPost=(req,res,next)=>{
    res.status(200).json({
        title:'post title',
        content:'Post Conte'
    });
};

exports.demo=(req,res,next)=>{
   res.status(200).json({
          Name:'nasar',
          mobile:9746680005
   });
};


exports.createPost=(req,res,next)=>{
 const title=req.body.title;
 const content= req.body.content;

 res.status(201).json({
       message:'post saved sucessfully',
       title:title,
       content:content
 });
};