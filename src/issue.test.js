'use strict';

const path = require('path');
const os = require('os');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('wallaby-issue-1268', () => {
    const cwd = process.cwd();
    const cwdTemp = path.resolve(os.tmpdir());

    beforeEach(() => {
        // type quickly here:
        return sleep(cwdTemp).then(() => {
            process.chdir(cwdTemp);
        });
    });

    afterEach(() => {
        // type quickly here:
        return sleep(100).then(() => {
            process.chdir(cwd);
        });
    });

    it('creates file', () => {
        // type quickly here:
        return sleep(1).then(() => {
            expect(1).toEqual(1);
        });
    });
});
