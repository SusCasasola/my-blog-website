import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const contentful = require('contentful');

const createClient = () => contentful.createClient(publicRuntimeConfig.contentLoad);

export default createClient;
