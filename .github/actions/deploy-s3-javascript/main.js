const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process').exec;

function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucketRegion', { required: true });
    const distFolder = core.getInput('distFolder', { required: true });

    // 2) Upload files
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hello from my custom JS Action!');
}

run();