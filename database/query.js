import { db } from './connect.js';

export const Registration = (req, res) => {
    db.query(`Insert into Users (Login, Password, Post) values (?,?,?)`,
        [req.body.Login, req.body.Password, req.body.Post],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        }
        );
}

export const Authorization = (req, res) => {
    db.query(`Select * from Users where Login = '${req.body.Login}' and Password = '${req.body.Password}'`, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet[0]);
        }
    }
    )
}