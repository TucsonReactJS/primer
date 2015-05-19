/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import {BaseStore} from 'fluxible/addons';
import {SORT_STARS,DEFAULT_STARS_AMOUNT} from "../constants";

class ReposStore extends BaseStore {
    constructor( dispatcher ) {
        super(dispatcher);
        /**
         * The list of repositories
         * @type {Array}
         */
        this.repos = [];
        /**
         * Are repos currently loading?
         * @type {boolean}
         */
        this.loadingRepos = false;
        /**
         * Set the initial sort
         * @type {string}
         */
        this.sort = SORT_STARS;
        /**
         * Set the number of stars
         * @type {string}
         */
        this.numberOfStars = DEFAULT_STARS_AMOUNT;
    }

    /**
     * Handler for toggling whether repos are currently being loaded
     * @param payload
     */
    handleReposLoading( payload ) {
        this.loadingRepos = payload;
        this.emitChange();
    }

    /**
     * Handler that is called when repos are successfully loaded
     * @param payload
     */
    handleReceivedRepos( payload ) {
        this.repos = payload;
        this.emitChange();
    }

    getState() {
        return {
            repos: this.repos,
            loadingRepos: this.loadingRepos,
            sort: this.sort,
            numberOfStars: this.numberOfStars
        };
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate( state ) {
        this.repos = state.repos;
        this.loadingRepos = state.loadingRepos;
        this.sort = state.sort;
        this.numberOfStars = state.numberOfStars;
    }
}

ReposStore.storeName = 'ReposStore'; // PR open in dispatchr to remove this need
ReposStore.handlers = {
    'LOADING_REPOS': 'handleReposLoading',
    'RECEIVED_REPOS': 'handleReceivedRepos'
};

export default ReposStore;