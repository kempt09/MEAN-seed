var express = require('express');
var router = express.Router();
var Person = require('./../modules/data');

// Handles front-end routing
router.get('/', function (req, res) {
    'use strict';
    res.sendfile('./public/index.html'); // load our public/index.html file
});

// API Configuration

router.get('/api', function (req, res) {
    'use strict';
    res.json({greeting: 'hello'});
});

router.use(function (req, res, next) {
    next(); // make sure we go to the next route
});

// API Calls for Person Models (accessed at POST http://localhost:8080/api/person)
router.route('/person')
    // create a Person
    .post(function (req, res) {
        'use strict';
        var person = new Person();      // create a new instance of the Person model
        person.name = req.body.name;    // properties for our model
        person.age = req.body.age;
        person.location = req.body.location;
        person.title = req.body.title;
        person.department = req.body.department;

        // save the Person and check for errors
        person.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Person created!'});
        });
    })
    .get(function (res, req) { //get the entire collection of people
        'use strict';
        Person.find(function (err, payload) {
            if (err) {
                res.send(err);
            }
            console.log('huh');
            req.json(payload);
        });
    });
router.route('/person/:people_id') // search and manipulate person by specific id
    .get(function (req, res) {
        'use strict';
        // Get Person by ID
        Person.findById(req.params.people_id, function (err, payload) {
            if (err)
                res.send(err);
            res.json(payload);
        });
    })
        // Update Person Info
    .put(function (req, res) { // update person information
        'use strict';
        Person.findById(req.params.people_id, function (err, person) {
            if (err) {
                res.send(err);
            }
            person.name = req.body.name;  // update the persons info
            person.age = req.body.age;
            person.location = req.body.location;
            person.title = req.body.title;
            person.department = req.body.department;

            // save the bear
            person.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Person updated!'});
            });
        });
    })
    .delete(function(req, res){ // delete person from database
        'use strict';
        Person.remove({_id: req.params.people_id}, function (err, person) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Person deleted'});
        });
    });
module.exports = router;