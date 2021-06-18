const StudentModel =require ('../models/student.model')
const express = require('express');



  // ======
  // Create
  // ======
  exports.create = (req, res) => {
    console.log('create method runned')
    const newEntry = req.body;
    StudentModel.create(newEntry, (e,newEntry) => {
      if(e) {
        console.log(e);
        res.sendStatus(500);
      } else {
        res.redirect('/student');
        
      }
    });
  };
  
  // =========
  // Read many
  // =========
  exports.readMany = (req, res) => {
    console.log('readMany method runned')
    let query = res.locals.query || {};
  
    StudentModel.find(query, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.render('list',{students:result});
      }
    });
  };

  // ========
  // Read one
  // ========
  exports.readOne = (req, res) => {
    console.log('readOne method runned')
    const { _id } = req.params;
  
    StudentModel.findById(_id, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.render('profile',{student:result});
      }
    });
  };
  
  // ======
  // Update
  // ======
  exports.update = (req, res) => {
    console.log('update method runned')
    const changedEntry = req.body;
    StudentModel.update({ _id: req.params._id }, { $set: changedEntry }, (e) => {
      if (e)
        res.sendStatus(500);
      else
        res.redirect('/student');
    });
  };
  
  // ======
  // Remove
  // ======
  exports.remove = (req, res) => {
    console.log('remove method runned')
    StudentModel.remove({ _id: req.params._id }, (e) => {
      if (e)
      res.status(500).send(e);
      else
        res.redirect('/student');
    });
  };
