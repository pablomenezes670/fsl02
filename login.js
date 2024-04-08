//Daods de Formulario
let email = "pablo@gmail.com";
let password = "12345";

//Meu sistema de armazeno (ex: Banco de Dados)
let storage = [
    {
        email: "pablo@gmail.com",
        password: "12345"
    },
    {
        email: "leticia@gmail.com",
        password: "54321"
    }
];

 let sucesso = `usuario ${email} logado com sucesso`;

 if (
    (email === storage[0].email && password === storage[0].password) ||
    (email === storage[1].email && password === storage[1].password)
) {

    console.log(sucesso);

} else {

    let msg;

    if(email !== storage[0].email && email !== storage[1].email) {
        msg = "Email";
    }

    if(password !== storage[0].password && password !== storage[1].password) {
        msg += " ou Password"
    }

    console.log(`${msg} com error`);

}