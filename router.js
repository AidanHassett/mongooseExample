const router = require("express").Router();

const Film = require("./db.js");

router.get("/", (req, res) => res.send("Hello World!"));

let names = ["Callum", "Tasnima", "Kieran", "Connor", "Aidan"];
router.get("/getAll", (req, res, next) => {
  Film.find((err, films) => {
    if (err) {
      return next({status: err.status, message: err.message});
    } else {
      return res.json(films);
    }
  });
});

router.get("/get/:id", (req, res, next) => {
  const id = req.params.id;

  Film.findById(id, (err, film) => {
    if (err) {
      return next({status: err.status, message: err.message});
    } else {
      return res.status(200).send(film);
    }
  });
});

router.post("/add", (req, res, next) => {
  const inFilm = req.body;
  new Film(inFilm).save().then(() => {
    res.status(201).send("Successfully added");
  }).catch(err => next({status: err.status, message: err.message}));
});

router.put("/replace/:id", (req, res, next) => {
  const id = req.params.id;
  const inFilm = req.body;

  Film.findByIdAndUpdate(id, inFilm, (err, film) => {
    if (err) {
      return next({status: err.status, message: err.message});
    } else {
      return res.status(200).send(film);
    }
  });
});

router.delete("/remove/:id", (req, res, next) => {
  const id = req.params.id;

  Film.findByIdAndDelete(id, (err, film) => {
    if (err) {
      return next({status: err.status, message: err.message});
    } else {
      return res.status(200).send(film);
    }
  });
})

module.exports = router;
