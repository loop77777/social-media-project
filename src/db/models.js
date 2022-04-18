const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  database: "socialmediadb",
  username: "cbsocialuser",
  password: "cbsocialpass",
});

const COl_ID_DEF = {
  type: Sequelize.DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
};

const COl_USERNAME_DEF = {
  type: Sequelize.DataTypes.STRING(30),
  unique: true,
  allowNull: false,
};

const COL_TITLE_DEF = {
  type: Sequelize.DataTypes.STRING(140),
  allowNull: false,
};

const Users = db.define("user", {
  id: COl_ID_DEF,
  username: COl_USERNAME_DEF,
});

const Posts = db.define("post", {
  id: COl_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false,
  },
});

const Comments = db.define("comment", {
  id: COl_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT("tiny"),
  },
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

module.exports = {
  db,
  Users,
  Posts,
  Comments,
};
