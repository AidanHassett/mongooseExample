const router = require("express").Router();

const Film = require("./db.js");

router.get("/", (req, res) => res.send("Hello World!"));

let names = ["Callum", "Tasnima", "Kieran", "Connor", "Aidan"];
router.get("/getAll", (req, res, next) => {
  Film.find(err, films) => {
    if (err) {
      return next({status: err.status, message = err.message});
    } else {
      return res.json(films);
    }
  }
});

router.get("/get/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  if (id === Nan || id == null || undefined) {
    return next({status: 400, message: "Invalid id"})
  } else {
    Film.findById(id, (err, film) => {
      if (err) {
        return next({status: err.status, message = err.message});
      } else {
        return res.json(film);
      }
    });
  }
});

router.post("/add", (req, res, next) => {
  const in = req.body;
  new Film(in).save().then(() => {
    res.status(201).send("Successfully added")
  }).catch(err => next({status: err.status, message: err.message}));
});

router.put("/replace/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const in = req.body;

  if (id === Nan || id == null || undefined) {
    return next({status: 400, message: "Invalid id"})
  } else {
    Film.findOneAndReplce({_id: id}, in, (err, film) => {
      if (err) {
        return next({status: err.status, message = err.message});
      } else {

      }
    });
  }
});

router.delete("/remove/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  if (id === Nan || id == null || undefined) {
    return next({status: 400, message: "Invalid id"})
  } else {
    Film.findByIdAndDelete(id, (err, film) => {
      if (err) {
        return next({status: err.status, message = err.message});
      }
    });
  }
})

module.exports = router;
