import {Pool, PoolClient, QueryResult} from "pg";

//TODO: should not check NODE_ENV programatically, but separate config from code 
const config = process.env.NODE_ENV !== "test"?{

    ssl: {
        rejectUnauthorized: false,
        ca: process.env.SSH_DATABASE_CERTIFICATE,
    }
}:{};

const pool = new Pool(config);

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1)
});



export const withDatabase = async (action: (client: PoolClient) => Promise<any>) => {

    const client = await pool.connect();
    const result = await action(client);
    client.release();

    return result;
};
