
import {Category} from '../app/shared/game/game';
import {Rol, Genre} from '../app/shared/user/user';
import {Tournament} from '../app/shared/tournament/tournament';
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

//var db = mongoose.connect('mongodb://localhost:27017/Mean',['user','game']);

//  Conexion con mLab.
//  Te he ocultado la sentencia anterior
//  Dejate de game, probemos con solo user
var db = mongojs('mongodb://rootDB:rootDB@ds111559.mlab.com:11559/tornijuegos', ['user']);


/* GET All Users */
router.get('/User', function(req, res, next) {
    console.log("Llego");
    db.user.find(function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});
 
/* GET One User with the provided ID */
router.get('/User/:id', function(req, res, next) {
    db.user.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});
 
/* POST/SAVE a User */
router.post('/User', function(req, res, next) {
    var PostUser = req.body;
    if (!PostUser.nick || !PostUser.name || !PostUser.dni || !PostUser.birthdate || !PostUser.password || PostUser.rol===NULL) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.user.save(todo, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
 
/* PUT/UPDATE a Todo */
router.put('/User/:id', function(req, res, next) {
    var UpdatedUser = req.body;
    var updObj = {};
 
    if (UpdatedUser.name) {
        updObj.name = UpdatedUser.name;
    }
    if (UpdatedUser.nick) {
        updObj.nick = UpdatedUser.nick;
    }
    if(UpdatedUser.dni){
        updObj.dni = UpdatedUser.dni;
    }
    
    if(UpdatedUser.birthdate){
        updObj.birthdate = UpdatedUser.birthdate;
    }

    if(UpdatedUser.rol){
        updObj.dni = UpdatedUser.dni;
    }

    if(UpdatedUser.genre){
        updObj.dni = UpdatedUser.dni;
    }

    if(UpdatedUser.password){
        updObj.password = UpdatedUser.password;
    }

    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.user.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
 
 
});
 
/* DELETE a Todo */
router.delete('/User/:id', function(req, res) {
    db.user.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
 
});

/* GET All Games */
router.get('/Game', function(req, res, next) {
    db.game.find(function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});
 
/* GET One Game with the provided ID */
router.get('/Game/:id', function(req, res, next) {
    db.game.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});
 
/* POST/SAVE a Game */
router.post('/Game', function(req, res, next) {
    var PostGame = req.body;
    if (!PostGame.name || !PostGame.description || !PostGame.category || !PostGame.tournaments) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.game.save(PostGame, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
 
/* PUT/UPDATE a Game */
router.put('/Game/:id', function(req, res, next) {
    var UpdatedGame = req.body;
    var updObj = {};
 
    if (UpdatedGame.name) {
        updObj.name = UpdatedGame.name;
    }

    if (UpdatedGame.description) {
        updObj.description = UpdatedGame.description;
    }

    if (UpdatedGame.category) {
        updObj.category = UpdatedGame.category;
    }

    if (UpdatedGame.description) {
        updObj.tournaments = UpdatedGame.tournaments;
    }

    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.game.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
 
 
});
 
/* DELETE a Game */
router.delete('/Game/:id', function(req, res) {
    db.game.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
 
});

module.exports = router;