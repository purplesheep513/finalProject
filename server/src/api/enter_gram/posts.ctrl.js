import Gram from '../../models/gram';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    // console.log('write Post 호출');
    // console.log(ctx.request.body);
    // console.log(ctx.request.file);
    // console.log('!!!', ctx.req.file);
    // console.log('@@@', ctx.req.body);
    // const schema = Joi.object().keys({
    //     InstaImage: Joi.string().required(),
    //     content: Joi.string().required(),
    //     comment: Joi.array().items(Joi.string())
    // });

    // const result = schema.validate(ctx.request.body);
    // if(result.error){
    //     ctx.status = 400;
    //     ctx.body = result.error;
    //     return;
    // }

    const content = ctx.req.body.content;
    const comment = ctx.req.body.comment;
    const InstaImage = ctx.req.file.filename;
    console.log('content', content, ' comment', comment, ' InstaImage', InstaImage);
    // console.log(ctx.state.user._id);
    const user_id = ctx.state.user._id;
    // const user_id = '5f9f692d8413900d78dd8773';
    const user = await User.findById(user_id);
    // console.log(user.user_nick);

    const post = new Gram({
        InstaImage: InstaImage,
        content: content,
        comment: [comment],
        User: {
            user_nick: user.user_nick
        }
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const likeList = async ctx => {
    try{
        const posts = await Gram.find().sort({ likeCount: -1 }).limit(4).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, 0);
    }
}

export const list = async ctx => {
    try{
        const posts = await Gram.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    const { post_id } = ctx.params;
    console.log(post_id);
    try{
        const post = await Gram.findById(post_id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { post_id } = ctx.params;
    console.log(post_id);
    try{
        await Gram.findByIdAndRemove(post_id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
}