import app from './app'

const env = process.env.NODE_ENV ?? 'prod';

// dynamic dev environment
if (!['prod', 'production'].includes(env)) {
    import('dotenv').then(dotenv => dotenv.config())
}

console.log(`env: ${env}`);
console.log(app);
console.log('FIN')