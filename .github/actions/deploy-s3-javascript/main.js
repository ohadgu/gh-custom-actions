const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process').exec;

function run() {
    core.notice('Hello from my custom JS Action!');
}

run();