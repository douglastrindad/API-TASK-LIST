const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
	return res.status(401).json({ error:'Token não existe.' });
  }

  const [token] = authorization.split(' ');

  try{

	const dados = jwt.verify(token, authConfig.secret);

	req.userId = dados.id;

	return next();

  } catch (err) {
	return res.status(401).json({ error:'Token invalido.' });
  }
};
