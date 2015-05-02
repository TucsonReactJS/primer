var test = require('tape');

test('Renders a repo list filter', function(t){
    /**
     * Declare that n assertions should be run. 
     * t.end() will be called automatically after the nth assertion.
     * If there are any more assertions after the nth, 
     * or after t.end() is called, they will generate errors.
     * 
     * https://github.com/substack/tape#tplann
     */
    t.plan(1);
    
    var RepoListFilter = require('../../../build/js/repo_list/repo_list_filter.js');
    var constants = require('../../../build/js/constants.js');
    var RepoListFilterComponent = new RepoListFilter({
                                              sort: "stars",
                                              stars: "500",
                                              applySort:constants.noop,
                                              applyFilter: constants.noop,
                                              clearFilters: constants.noop
                                          });
	
	/**
	 * {
    SomeOtherComponent: React.createClass({
      render: function() { return <div />; }
    })
  }
	 */
    
    var RepoListFilterRendered = RepoListFilterComponent.render();
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
        
    /**
     * Render a component into a detached DOM node in the document. This function requires a DOM.
     * https://facebook.github.io/react/docs/test-utils.html#renderintodocument
     */
    
     var RepoListFilterNode =  TestUtils.renderIntoDocument(RepoListFilterRendered);
    
    /**
     * If this component has been mounted into the DOM,
     *  this returns the corresponding native browser DOM element.
     *  This method is useful for reading values out of the DOM,
     *  such as form field values and performing DOM measurements. 
     * When render returns null or false, findDOMNode returns null.
     * 
     * https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode
     */
    
     var whatWasMounted = React.findDOMNode(RepoListFilterNode);
        
    
    //Did it render as a span?
    t.equals('DIV', whatWasMounted.tagName);
    
});
