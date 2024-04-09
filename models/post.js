const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {

}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    create_on_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },

    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },

    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',

  }
);
module.exports = Post;