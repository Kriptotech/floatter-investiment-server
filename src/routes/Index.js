const router = require("express").Router();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "einsrocket00@gmail.com",
        pass: "ljwmmtlcguzxujhw",
        // pass: process.env.smtp_gmail,
    },
});

router.post("/send_email", async (req, res) => {
    const { email, name, number, message } = req.body;

    console.log(req.body);

    if (email && name && message) {
        //#region
        let html_code = `<!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <!-- fonst -->
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <!-- fonst -->
                    <title>Codigo de recuperação de senha</title>
                    <style>
                        * {
                            padding: 0;
                            margin: 0;
                            box-sizing: border-box;
                        }
                        body {
                            background-color: rgb(18, 18, 20);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            color: rgb(237, 242, 247);
                            padding: 10px 5%;
                            font-family: "Roboto", Arial, Helvetica, sans-serif;
                        }
            
                        .container {
                            width: min(450px, 100%);
                            min-height: 100px;
                            background-color: rgb(32, 32, 36);
                            padding: 15px;
                            border-radius: 10px;
                            color: rgb(237, 242, 247);
                        }
            
                        .container img {
                            width: min(300px, 90%);
                            margin-left: 50%;
                            transform: translateX(-50%);
                        }
            
                        p {
                            line-height: 30px;
                            text-align: justify;
                            margin-bottom: 15px;
                            color: rgb(237, 242, 247);
                        }
                        strong {
                            margin-bottom: 15px;
                            color: rgb(237, 242, 247);
                        }
                        ul {
                            padding-left: 10%;
                            margin-top: 10px;
                            color: rgb(237, 242, 247);
                        }
                        li {
                            margin-bottom: 10px;
                            color: rgb(237, 242, 247);
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <p>
                            Olá, o usuario ${name}, com o email: ${email}  
                            enviou a seguinte mensagem através do site floatter investiment: 
                        </p>
                        <strong>
                            ${message}
                        </strong>
                        
                    </div>
                </body>
            </html>`;
        ////#endregion

        transport
            .sendMail({
                from: "Kriptotech <kriptotech2022@gmail.com>",
                to: [
                    "fazbemfrancisco6@gmail.com",
                    "eufrasiojoao00@gmail.com",
                    "floatterinvestiment@gmail.com",
                ],
                subject:
                    "Mensagem enviada através do site floatter investiment",
                html: html_code,
                text: `Ola, uma mensagem foi enviada através do site floatter investiment por ${name}, conteudo: ${message} `,
            })
            .then(() => {
                res.json({
                    message: `o email foi enviado com sucesso!`,
                    succes: true,
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({
                    message: `Ocorreu um erro enviando o email`,
                    succes: false,
                });
            });
    } else {
        res.json({
            message: "Preencha todos os campos",
            succes: false,
        });
    }
});

module.exports = router;
