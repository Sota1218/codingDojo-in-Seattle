const { Cake, Comment } = require("../Models/models");

module.exports = {
  allCakes: (req, res) => {
    Cake.find()
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  oneCake: (req, res) => {
    Cake.findOne({ _id: req.params.id })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  createCake: (req, res) => {
    console.log(req.body);
    Cake.create(req.body)
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  updateCake: (req, res) => {
    let { _id, ...restOfData } = req.body;
    Cake.findOneAndUpdate({ _id: req.params.id }, restOfData, {
      runValidators: true,
      new: true
    })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  deleteCake: (req, res) => {
    Cake.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  createComment: (req, res) => {
    Comment.create(req.body)
      .then(data => {
        Cake.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { comment: data } }
        )
          .then(data => {
            res.json({ message: "success", results: data });
          })
          .catch(err => {
            res.json({ message: "error", results: err });
          });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  }
};
