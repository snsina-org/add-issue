'use strict';


const _ = require('lodash');
const { graphql } = require("@octokit/graphql");
const { Octokit } = require("@octokit/rest");


module.exports = class IssueLib {

    constructor() {

    }

    async getIssueId(org, repo, myToken, issue_number) {
        let repoArray = repo.split('/')

        console.log("ISSUE NUMBER: ", issue_number, repoArray[1], org)
        const octokit = new Octokit({
            auth: myToken
        })
        
        return await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
            owner: `${org}`,
            repo: `${repoArray[1]}`,
            issue_number: `${issue_number}`
          });
    }
 

    async addIssue(myToken, p_node_id, issue_node_id) {
        const graphqlWithAuth = graphql.defaults({
            headers: {
                authorization: `token ${myToken}`,
            },
        });
 
        return await graphqlWithAuth(
            `
            mutation {
                addProjectV2ItemById(input: {projectId: "${p_node_id}" contentId: "${issue_node_id}"}) {
                  item {
                    id
                  }
                }
            }
            `
        );       
    }
}