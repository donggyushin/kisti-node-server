import User from "../models/user";
import checkPassword from "../utils/checkpassword";
import { generatingToken, decodeToken } from "../utils/jsonwebtoken";

export const userLevel = async (req, res) => {
  const token = req.header("token");
  const userId = await decodeToken(token);
  const user = await User.findByPk(userId);

  if (user == null) {
    res.json({
      ok: true,
      error: null,
      userLevel: null
    });
  }

  const userLevel = user.user_level;
  res.json({
    ok: true,
    error: null,
    userLevel
  });
};

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
  console.log("id:", id);
  console.log("pw:", pw);
  console.log("email_id", email_id);
  console.log("email_domain", email_domain);
  console.log("name", name);
  console.log("ename", ename);
  console.log("birth_y", birth_y);
  console.log("birth_m", birth_m);
  console.log("birth_d", birth_d);
  console.log("cp_no1", cp_no1);
  console.log("cp_no2", cp_no2);
  console.log("cp_no3", cp_no3);
  console.log("tel_no1", tel_no1);
  console.log("tel_no2", tel_no2);
  console.log("tel_no3", tel_no3);
  console.log("usertype", usertype);
  console.log("job", job);
  console.log("is_stay_in_korea", is_stay_in_korea);
  console.log("zipcode", zipcode);
  console.log("road_addr", road_addr);
  console.log("addr", addr);
  console.log("has_organization", has_organization);
  console.log("organization", organization);
  console.log("is_korean", is_korean);

  // TODO: hashing pw or hashing pw in client side.

  try {
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
        is_korean,
        user_level: "normal"
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
  } catch (err) {
    console.log("asdlkjasldkjasldkj");
    res.json({
      ok: false,
      error: err.message
    });
  }
};
