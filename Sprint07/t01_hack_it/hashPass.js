import bcrypt from 'bcrypt';

const generateSaltHash = (password, saltCount) => {
	const salt = bcrypt.genSaltSync(Number(saltCount));
	const HASH = bcrypt.hashSync(password, salt);
	return { HASH };
};

const isCorrectPass = (pass, hash) => bcrypt.compareSync(pass, hash);

export { generateSaltHash, isCorrectPass };

