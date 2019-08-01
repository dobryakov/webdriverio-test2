import WDIOReporter from '@wdio/reporter';

export default class CustomReporter extends WDIOReporter {

    results:Array<any>;

    constructor (options) {
        /**
         * make reporter to write to output stream by default
         */
        options = Object.assign(options, { stdout: true });
        super(options);
        this.results = [];
    }

    onTestPass(test) {
        //console.log(test);
        console.log(`Congratulations! Your test "${test.title}" passed 👏`);
        this.results.push(test);
    }

    onTestFail(test) {
        //console.log(test);
        console.log(`Your test "${test.title}" failed 👏`);
        this.results.push(test);
    }

    onSuiteEnd() {
        //console.log(this.results);
        console.log({results: this.results.map(function(result, index, arr){

            let comment   = '';

            let status_id = null;
            if (result.state == 'passed') { status_id = 1 }
            if (result.state == 'failed') {
                status_id = 5;
                comment   = result.error.message;
            }

            return {
                // todo refactor it to catch multiple test cases in one test
                case_id:   result.title.match(/C\d/g)[0].match(/\d/g)[0],
                status_id: status_id,
                comment:   comment,
            }

        })});
    }
};