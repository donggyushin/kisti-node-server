import sequelize from "../database/sequelize";
import Sequelize from "sequelize";
const User = sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
      len: [2, 24]
    }
  },
  scienceId: {
    type: Sequelize.STRING
  },
  registerBoolean: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  pw: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [2, 32]
    }
  },
  email_id: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false,
    validate: {
      len: [2, 24]
    }
  },
  email_domain: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [2, 24]
    }
  },
  is_mailing: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1, 24]
    }
  },
  ename: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 24]
    }
  },
  birth_y: {
    type: Sequelize.STRING,
    allowNull: true
  },
  birth_m: {
    type: Sequelize.STRING,
    allowNull: true
  },
  birth_d: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cp_no1: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 3]
    }
  },
  cp_no2: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  cp_no3: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  tel_no1: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 3]
    }
  },
  tel_no2: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  tel_no3: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  fax_no1: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 3]
    }
  },
  fax_no2: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  fax_no3: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [0, 4]
    }
  },
  usertype: {
    type: Sequelize.TINYINT,
    allowNull: true,
    defaultValue: 6,
    validate: {
      isIn: [[1, 7, 2, 3, 6]]
    },
    comment:
      "01:연구자(대학,연구소), 07:연구자(기업), 02:과제관리기관, 03:부처, 일반이용자: 06"
  },
  job: {
    type: Sequelize.STRING,
    allowNull: true
  },
  dept: {
    type: Sequelize.STRING,
    allowNull: true
  },
  position: {
    type: Sequelize.STRING,
    allowNull: true
  },
  instit_job: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: "담당업무"
  },
  recommender: {
    type: Sequelize.STRING,
    allowNull: true
  },
  is_stay_in_korea: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "국내",
    validate: {
      isIn: [["국내", "국외"]]
    }
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [4, 5]
    }
  },
  road_addr: {
    type: Sequelize.STRING,
    allowNull: true
  },
  addr: {
    type: Sequelize.STRING
  },
  has_organization: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "개인",
    validate: {
      isIn: [["기관", "개인"]]
    }
  },
  organization: {
    type: Sequelize.STRING,
    allowNull: true
  },
  is_korean: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "내국인",
    validate: {
      isIn: [["내국인", "외국인"]]
    }
  },
  user_level: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "normal",
    validate: {
      isIn: [["normal", "agencyAdmin", "intergrated"]]
    }
  }
});

export default User;
