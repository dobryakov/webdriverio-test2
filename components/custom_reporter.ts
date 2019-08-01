import WDIOReporter from '@wdio/reporter';

export default class CustomReporter extends WDIOReporter {
    constructor (options) {
        /**
         * make reporter to write to output stream by default
         */
        options = Object.assign(options, { stdout: true });
        super(options);
    }

    onTestPass (test) {
        console.log(`Congratulations! Your test "${test.title}" passed 👏`);
    }
};