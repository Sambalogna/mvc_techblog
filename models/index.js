const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: user_id,
    onDelete: 'CASCADE'
})