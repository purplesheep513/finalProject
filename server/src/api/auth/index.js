import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";
import koaMulter from 'koa-multer';
// import koaBody from 'koa-body';
const path = require('path');
let passport = require('passport');

let storage = koaMulter.diskStorage({
    destination: (req, profile_pic, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, profile_pic, callback) => {
        let extension = path.extname(profile_pic.originalname);
        let basename = path.basename(profile_pic.originalname, extension);
        callback(null, basename + "_" + Date.now() + extension);
    }
});

let upload = koaMulter({
    storage: storage,
    limits: {
        files: 9,
        fileSize: 1024 * 1024 * 1024
    }
});

const auth = new Router();

auth.post("/register",upload.single('profile_pic',1),authCtrl.register);
auth.post("/login", authCtrl.login);
auth.post("/findpw", authCtrl.findpw);
auth.patch("/changePw/:id", authCtrl.changePw);
auth.patch("/profile/:id",upload.array('file',1), authCtrl.profileUpdate);
auth.get("/check", authCtrl.check);
auth.post("/logout", authCtrl.logout);
auth.patch("/snsRegister/:id",authCtrl.snsRegister);
auth.post('/', upload.array('file', 1), authCtrl.register);


//sns
module.exports = function(router, passport){
auth.route('/auth/facebook').get(passport.authenticate('facebook',{
    scope: 'email'
}));

auth.route('/auth/facebook/callback').get(passport.authenticate('facebook',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));

auth.route('/auth/kakao').get(passport.authenticate('kakao',{
    account_email: 'account_email'
}));

auth.route('/auth/kakao/callback').get(passport.authenticate('kakao',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));
auth.route('/auth/google').get(passport.authenticate('google',{
    scope: ['profile','email']
    
}));

auth.route('/auth/google/callback').get(passport.authenticate('google',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));
}
// auth.get('/write', async ctx => {
//     console.log('/write 호출')
//     ctx.body = '<h2>파일 업로드</h2><form method="post" action="/api/auth" enctype="multipart/form-data"><p><label>아이디 : <input type="text" name="user_email"></label></p><p><label>비밀번호 : <input type="password" name="user_pw"></label></p><p><label>성별 : <input type="text" name="user_gender"></label></p><p><label>나이 : <input type="text" name="user_age"><p><label>닉네임 : <input type="text" name="user_nick"></label></p></label></p><p><label>사진 : <input type="file" name="file"></label></p><p><input type="submit" value="전송"></p></form>';
// });

// auth.post('/', upload.array('file', 1), authCtrl.register);
// auth.post('/', upload.single('file'), authCtrl.register);

export default auth;
