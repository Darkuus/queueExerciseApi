const removeMongoProps = (result) => {
    delete result._id
    delete result.__v
    
    return result
}

module.exports = removeMongoProps