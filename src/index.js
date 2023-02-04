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
    const pid = parseInt(core.getInput('pid'));
    const issueId = core.getInput('issue-id');
    const repositoryName = core.getInput('repo');
    



    // class initializations
    const p2p2 = new Projects();    
    const addingIssue = new Issue();


    
    
    let { orgProj } = await p2p2.getProjId(org,myToken,pid)
    
    console.log(orgProj)

    await addingIssue.addIssue(myToken, 'PVT_kwDOA9vVw84ABIOm', issueId)

    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "version=" + newVersion);
    // const octokit = github.getOctokit(myToken);
}

run();