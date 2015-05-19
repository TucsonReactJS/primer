import request from "superagent"
import {API_BASE,SORT_STARS,SORT_FORKS,SORT_UPDATED} from "../constants";

export default function getReactRepositories(actionContext, payload) {
    //indicate that we are beginning to load repositories
    actionContext.dispatch('LOADING_REPOS',true);

    //return a promise object
    return new Promise((resolve,reject)=>{

        //make the request for repositories
        request.get(API_BASE + "search/repositories")
            .query({q: `react ${SORT_STARS}:>=${payload.numStars}`})
            .query({sort: payload.sort})
            .end(( err, resp ) => {

                if ( !err ) {
                    //dispatch the received repos event
                    actionContext.dispatch('RECEIVED_REPOS', resp.body.items);
                    //dispatch that we are done loading
                    actionContext.dispatch('LOADING_REPOS',false);
                    //resolve the promise
                    resolve();
                } else {
                    //dispatch that we are done loading
                    actionContext.dispatch('LOADING_REPOS',false);
                    //something bad happened, so reject the promise
                    reject();
                }
            });

    })

};
