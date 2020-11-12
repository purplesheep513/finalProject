import client from "./client";

export const login = ({ user_email, user_pw }) =>
  client.post("/api/auth/login", { user_email, user_pw });

export const register = ({ user_email, user_pw,user_gender,user_age,user_nick,profile_pic }) =>
  client.post("/api/auth/register", { user_email, user_pw,user_gender,user_age,user_nick,profile_pic });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout"); //logout api서버 호출
