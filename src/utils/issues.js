'use strict';


const _ = require('lodash');
const { graphql } = require("@octokit/graphql");


module.exports = class IssueLib {

    constructor() {

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
                addProjectV2ItemById(input: {projectId: "PVT_kwDOA9vVw84ABIOm" contentId: "${issue_node_id}"}) {
                  item {
                    id
                  }
                }
            }
            `
        );       
    }
}