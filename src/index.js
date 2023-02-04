const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const { graphql } = require("@octokit/graphql");
const Projects = require('./utils/proj.js');
const Issue = require('./utils/issues.js');

async function run() {
    // Inputs
    const myToken = core.getInput('token');
    const org = core.getInput('org');
    const pid = pasrseInt(core.getInput('pid'));
    const issueId = core.getInput('issue-id');
    const repositoryName = core.getInput('repo');
    



    // class initializations
    const project = new Projects();    
    const addingIssue = new Issue();


    
    
    const { orgProj } = await project.getProjId(org, myToken, pid);
    
    console.log(orgProj)

    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "version=" + newVersion);
    // const octokit = github.getOctokit(myToken);
}

run();