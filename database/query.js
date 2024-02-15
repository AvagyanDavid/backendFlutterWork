import { db } from './connect.js';

// отображение данных
export const ShowUser = (req, res) => {
    db.query("select * from Barsuk.Users WHERE idUsers = ?", [req.body.idUsers], (err, otvet) => {
        if (err) {
            console.log(err);
        } else {
            res.json(otvet[0]);
        }
    })
}

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

export const BranchId = (req, res) => {
    db.query(`Select * from Branch`, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet);
        }
    }
    )
}

export const BranchSelection = (req, res) => {
    db.query(`Select Users.idUsers, Users.Login, Users.Password, Users.Post, Branch.idBranch, Branch.BranchName from Users, Branch where Users.Branch_idBranch = '${req.body.Branch_idBranch}' and Users.Branch_idBranch = Branch.idBranch`, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet);
        }
    }
    )
}