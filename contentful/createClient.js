import getConfig from 'next/config';
import * as contentful from 'contentful';

const { publicRuntimeConfig } = getConfig();
// const contentful = require('contentful');

const createClient = () => contentful.createClient(publicRuntimeConfig.contentLoad);

export default createClient;
