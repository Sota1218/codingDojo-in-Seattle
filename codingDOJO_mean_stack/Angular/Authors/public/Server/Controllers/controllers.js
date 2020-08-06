const Pet = require("../Models/models");

module.exports = {
  allPets: (req, res) => {
    Pet.find()
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },

  onePet: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  createPet: (req, res) => {
    console.log(req.body);

    Pet.create(req.body)
      .then(data => {
        res.json({ message: "success", results: data });
        Pet.updateOne(
          { _id: data._id },
          { skill: [req.body.skill1, req.body.skill2, req.body.skill3] }
        )
          .then(data => {
            res.json({ message: "success", results: data });
            console.log(data);
          })
          .catch(err => {
            console.log(err);
            res.json({ message: "error", results: err });
          });
      })
      .catch(err => {
        console.log(err);
        res.json({ message: "error", results: err });
      });
  },
  updatePet: (req, res) => {
    let { _id, ...restOfData } = req.body;
    Pet.findOneAndUpdate({ _id: req.params.id }, restOfData, {
      runValidators: true,
      new: true
    })
      .then(data => {
        res.json({ message: "success", results: data });
        Pet.updateOne(
          { _id: data._id },
          { skill: [req.body.skill1, req.body.skill2, req.body.skill3] }
        )
          .then(data => {
            res.json({ message: "success", results: data });
            console.log(data);
          })
          .catch(err => {
            console.log(err);
            res.json({ message: "error", results: err });
          });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  deletePet: (req, res) => {
    console.log("work");
    Pet.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        console.log(req.params.id);
        console.log(data);
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },

  addLike: (req, res) => {
    let { _id, ...restOfData } = req.body;
    Pet.findOneAndUpdate({ _id: req.params.id }, restOfData, {
      runValidators: true,
      new: true
    })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  }
};
