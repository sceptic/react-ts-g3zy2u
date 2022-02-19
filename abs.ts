abstract class Persona<t> {
  abstract saludo():string
  abstract getProps():t
}

class Adrian extends Persona<string> {
  saludo() {
    return `hola?`
  }

  getProps(){
    return ``
  }
}

class Ivan extends Persona<number> {
  constructor(private bro: Persona<any>) {
    super()
  }
  saludo() {
    return `hola bro`
  }

  getProps(){
    return 123
  }

  despedida(){
    return `adioooos`
  }
}

const b = new Adrian()
const c:Ivan = new Ivan(b);
b.saludo()
c.saludo()


class ProfileEntity {
  constructor(private user, private errors){}

  get username() {
    return this.user.username;
  }

  set username(username) {
    delete this.errors.username;
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