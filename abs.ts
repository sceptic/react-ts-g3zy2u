abstract class Persona {
  abstract saludo():string
}

class Adrian extends Persona {
  saludo() {
    return `hola?`
  }
}

class Ivan extends Persona {
  constructor(private bro: Persona) {
    super()
  }
  saludo() {
    return `hola bro`
  }

  despedida(){
    return `adioooos`
  }
}

const b:Persona = new Adrian()
const c:Ivan = new Ivan(b);
b.saludo()
c.saludo()


class ProfileEntity {
  constructor(private user, private errors = {}){}

  get username() {
    return this.user.username;
  }

  set username(username) {
    if(username.length < 2) {
      this.errors.username = "Mal nombre"
    }
    this.user.username = username;
  }

  get created() {
    return new Date(this.user.created);
  }

  set created(date){
    const nativeDate= new Date()
    if(nativeDate < new Date()) {}
    this.created=date;
  }
}




{}