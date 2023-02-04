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
    let issueId = core.getInput('issue-id');
    const repositoryName = core.getInput('repo');
    const issueNo = parseInt(core.getInput('issue-number'));
    



    // class initializations
    const p2p2 = new Projects();    
    const addingIssue = new Issue();

    if(issueNo != 0 && issueId == '') {
        let issueDetail = await addingIssue.getIssueId(org, repositoryName, myToken, issueNo)
        
        issueId = issueDetail.data.node_id
        console.log("ISSUE DETAIL: ", issueId)
    }
    
    
    await p2p2.getProjId(org,myToken,pid).then(data => {
        console.log(data)

         addingIssue.addIssue(myToken, data.organization.projectV2.id, issueId)
    })
    
    

    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "version=" + newVersion);
    // const octokit = github.getOctokit(myToken);
}

run();