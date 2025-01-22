const errorhandler = (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status.json(err);
  }
};
export default errorhandler;
