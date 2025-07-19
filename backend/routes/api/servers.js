const express = require('express');
const router = express.Router();
const Server = require('../../models/Server');

// @route   POST api/servers/create
// @desc    Create a server
router.post('/create', (req, res) => {
  const newServer = new Server({
    user_id: req.body.user_id,
    server_name: req.body.server_name,
    game_type: req.body.game_type,
    version: req.body.version,
    ram: req.body.ram,
    port: req.body.port
  });

  newServer.save().then(server => res.json(server));
});

// @route   POST api/servers/start/:id
// @desc    Start a server
router.post('/start/:id', (req, res) => {
  Server.findById(req.params.id)
    .then(server => {
      // Logic to start the server process (e.g., using Docker or screen)
      server.status = 'online';
      server.save().then(server => res.json(server));
    })
    .catch(err => res.status(404).json({ success: false }));
});

// @route   POST api/servers/stop/:id
// @desc    Stop a server
router.post('/stop/:id', (req, res) => {
  Server.findById(req.params.id)
    .then(server => {
      // Logic to stop the server process
      server.status = 'offline';
      server.save().then(server => res.json(server));
    })
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
