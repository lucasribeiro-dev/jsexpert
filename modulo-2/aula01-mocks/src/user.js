class User { 
    constructor({name,id,profession,age}) {
        this.name = name
        this.id = parseInt(id)
        this.profession = profession
        this.birthday = new Date().getFullYear() - age
    }
}

module.exports = User;