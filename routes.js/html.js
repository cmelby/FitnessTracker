module.exports = function(app, path) {
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/views/createPost.html"));
    });
  
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../stats/stats.html"));
    });
  
  };
  