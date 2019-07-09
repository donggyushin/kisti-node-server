import User from "../models/user";
import checkPassword from "../utils/checkpassword";
import { generatingToken } from "../utils/jsonwebtoken";

export const login = async (req, res) => {
  const { id, pw } = req.body;
  const user = await User.findByPk(id);
  if (user == null) {
    res.json({
      ok: false,
      error: "존재하지 않는 아이디입니다. ",
      token: null
    });
  } else {
    // found user.

    // TODO: check pw same or not. v
    const userPw = user.pw;
    const result = checkPassword(pw, userPw);

    if (result) {
      const token = await generatingToken(user.id);
      if (token == null) {
        res.json({
          ok: false,
          error: "로그인에 실패하였습니다. 이용에 불편을 드려서 죄송합니다.",
          token: null
        });
      } else {
        res.json({
          ok: true,
          error: null,
          token
        });
      }
    } else {
      // wrong password
      res.json({
        ok: false,
        error: "비밀번호가 일치하지 않습니다. ",
        token: null
      });
    }
  }
};

export const userRegister = (req, res) => {
  const {
    id,
    pw,
    email_id,
    email_domain,
    is_mailing,
    name,
    ename,
    birth_y,
    birth_m,
    birth_d,
    cp_no1,
    cp_no2,
    cp_no3,
    tel_no1,
    tel_no2,
    tel_no3,
    fax_no1,
    fax_no2,
    fax_no3,
    usertype,
    job,
    dept,
    position,
    instit_job,
    recommender,
    is_stay_in_korea,
    zipcode,
    road_addr,
    addr,
    has_organization,
    organization,
    is_korean
  } = req.body;

  // TODO: hashing pw or hashing pw in client side.

  User.findOrCreate({
    where: {
      id
    },
    defaults: {
      pw,
      email_id,
      email_domain,
      is_mailing,
      name,
      ename,
      birth_y,
      birth_m,
      birth_d,
      cp_no1,
      cp_no2,
      cp_no3,
      tel_no1,
      tel_no2,
      tel_no3,
      fax_no1,
      fax_no2,
      fax_no3,
      usertype,
      job,
      dept,
      position,
      instit_job,
      recommender,
      is_stay_in_korea,
      zipcode,
      road_addr,
      addr,
      has_organization,
      organization,
      is_korean
    }
  }).then(([user, created]) => {
    // If there is user with that id already, then created will be false.

    if (created) {
      // When success creating new user.
      res.json({
        ok: true,
        error: null
      });
    } else {
      // When fail creating new user.
      res.json({
        ok: false,
        error:
          "새로운 유저를 만드는데에 실패하였습니다. 기입 내용을 다시 한 번 확인해주세요. "
      });
    }
  });
};
