import { Router } from 'express';

async function setupRoutes(router: Router) {
  router.get('/ping', (req, res) => {
    console.log(req.params);
    res.status(200).json({ message: 'OK' });
  });

  router.post('/auth', (req, res) => {
    console.log(req.body);
    const auth = 'Bearer azerty123';
    res.status(200).json({ auth });
  });
}

export default setupRoutes;
