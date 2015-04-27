var test = require('tape');

test('should render a repo list item', function(t){
    'use strict';
    
    /**
     * Declare that n assertions should be run. 
     * t.end() will be called automatically after the nth assertion.
     * If there are any more assertions after the nth, 
     * or after t.end() is called, they will generate errors.
     * 
     * https://github.com/substack/tape#tplann
     */
    t.plan(1);

    var RepoListItem = require('../../../build/js/repo_list/repo_list_item.js');
    
    var RepoListItemRendered = RepoListItem.prototype.render();
    
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    
    /**
     * Render a component into a detached DOM node in the document. This function requires a DOM.
     * https://facebook.github.io/react/docs/test-utils.html#renderintodocument
     */
    
    var RepoListItemNode =  TestUtils.renderIntoDocument(RepoListItemRendered);
    
    /**
     * If this component has been mounted into the DOM,
     *  this returns the corresponding native browser DOM element.
     *  This method is useful for reading values out of the DOM,
     *  such as form field values and performing DOM measurements. 
     * When render returns null or false, findDOMNode returns null.
     * 
     * https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode
     */
    var whatWasMounted = React.findDOMNode(RepoListItemNode);
        
    
    //Did it render as a span?
    t.equals(true, false);
    
});
