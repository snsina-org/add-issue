'use strict';


const _ = require('lodash');
const { graphql } = require("@octokit/graphql");


module.exports = class Projectss {

    constructor() {

    }

    async getProjId(org, myToken, pid) {
        const graphqlWithAuth = graphql.defaults({
            headers: {
                authorization: `token ${myToken}`,
            },
        });
 
        return await graphqlWithAuth(
            `
            {
                organization(login: "${org}"){
                  projectV2(number: ${pid}) {
                    id
                  }
                }
              }
            `
        );       
    }
}