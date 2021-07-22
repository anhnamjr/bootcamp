const getBootcamps = (req, res, next) => {
  res.status(200).send("All bootcamps");
};

const getBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;
  res.status(200).send(`Bootcamp ${bootcampId}`);
};

const createBootcamp = (req, res, next) => {
  res.status(201).send("Create bootcamp success");
};

const updateBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;
  res.status(200).send(`Update bootcamp ${bootcampId}`);
};

const deleteBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;
  res.status(200).send(`Delete bootcamp ${bootcampId}`);
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
