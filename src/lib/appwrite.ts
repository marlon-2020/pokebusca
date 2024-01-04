import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658ca9cb201cf6cce42f');

export const account = new Account(client);
export { ID } from 'appwrite';
