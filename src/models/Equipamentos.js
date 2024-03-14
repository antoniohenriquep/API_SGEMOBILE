const User = sequelize.define('User', {
  // Model attributes are defined here
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patrimonio: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }

}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
