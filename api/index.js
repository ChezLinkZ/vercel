const { exec } = require('child_process');

module.exports = (req, res) => {
  exec('php ./api/index.php', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`exec error: ${error}`);
      return;
    }
    if (stderr) {
      res.status(500).send(`stderr: ${stderr}`);
      return;
    }
    res.status(200).send(stdout);
  });
};
