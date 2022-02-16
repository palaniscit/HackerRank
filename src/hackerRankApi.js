'use strict';
const axios = require('axios');

/*
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */

async function getNumDraws(year) {

}

/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
    // As Team 1
    const homeTeamUrl = `https://jsonmock.hackerrank.com/api/football_matches?year=${ year }&team1=${ team }`
    const homeMatchResults = await getData(homeTeamUrl);
    const homeMatchGoalCount = sum(homeMatchResults, 'team1goals');
    
    // As Team 2
    const awayTeamUrl = `https://jsonmock.hackerrank.com/api/football_matches?year=${ year }&team2=${ team }`
    const awayMatchResults = await getData(awayTeamUrl);
    const awayMatchGoalCount = sum(awayMatchResults, 'team2goals');
    
    console.log(homeMatchGoalCount + awayMatchGoalCount);
    return homeMatchGoalCount + awayMatchGoalCount;
}

const sum = (array, fieldName) => {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += Math.abs(array[i][fieldName]);
    }
    return sum;
};

async function getData(url) {
    let output = [];

    try {
        const response = await axiosCall(url, 1);

        if (response && response.response && response.response.data && response.response.data.length) {
            output = output.concat(response.response.data);
        }
    
        const totalPages = response.response.total_pages;
    
        if(totalPages > 1) {
            const promises = [];
            for ( let i = 2; i <= totalPages; i += 1) {
                promises.push(axiosCall(url, i));
            }
            const moreResponse = await Promise.all(promises).then((response) => {
                if (response && response.length) {
                    for (let i = 0; i < response.length; i += 1) {
                        if (response[i] && response[i].response && response[i].response.data && response[i].response.data.length) {
                            output = output.concat(response[i].response.data);
                        }
                    }
                }
            });
            // console.log(moreResponse);
        }
    } catch (error) {
        console.log(error);
    }
    
    return output;
}

const axiosCall = (url, currPage) => {
    return new Promise(async (resolve,reject) => {
        axios.get(`${ url }&page=${ currPage }`)
        .then((response) => {
            if (response && response.data && response.data.data && response.data.data.length) {
                resolve({
                    response: response.data,
                    error: null
                });
            }
            reject({
                response: null,
                error: 'No match details found'
            });
        });
    });
}

// getTotalGoals('Chelsea', 2014);
getTotalGoals('Barcelona', 2011);
// getTotalGoals('Non Existing Clug', 2013);
