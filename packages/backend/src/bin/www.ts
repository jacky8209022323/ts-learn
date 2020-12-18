import * as http from 'http';
import { LOGGER, customArgvs } from '@demo/app-common';
import { App } from '..';

global.Promise = require('bluebird');

LOGGER.info('Initial server start...');

const _port = Number.parseInt(customArgvs.port, 10);
const _core = http.createServer(App);
_core.listen(_port);
_core.on('listening', () => LOGGER.info(`Server up on ${_port}`));
_core.on('error', (err) => LOGGER.error(err.stack));