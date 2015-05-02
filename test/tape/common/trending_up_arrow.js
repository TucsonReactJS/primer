var test = require('tape');

test('Renders a styled up arrow', function(t){
    'use strict';
    
    /**
     * Declare that n assertions should be run. 
     * t.end() will be called automatically after the nth assertion.
     * If there are any more assertions after the nth, 
     * or after t.end() is called, they will generate errors.
     * 
     * https://github.com/substack/tape#tplann
     */
    t.plan(3);

    /**
     * (
     *       <span 
     *           style={trendingDownStyle} 
     *           className="glyphicon glyphicon-arrow-up"
     *           aria-hidden="true">
     *       </span>);
    */
    var TrendingUpArrow = require('../../../build/js/common/trending_up_arrow.js');
    
    var TrendingUpArrowRendered = TrendingUpArrow.prototype.render();
    
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    
    /**
     * Render a component into a detached DOM node in the document. This function requires a DOM.
     * https://facebook.github.io/react/docs/test-utils.html#renderintodocument
     */
    
    var TrendingUpArrowNode =  TestUtils.renderIntoDocument(TrendingUpArrowRendered);
    
    /**
     * If this component has been mounted into the DOM,
     *  this returns the corresponding native browser DOM element.
     *  This method is useful for reading values out of the DOM,
     *  such as form field values and performing DOM measurements. 
     * When render returns null or false, findDOMNode returns null.
     * 
     * https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode
     */
    var whatWasMounted = React.findDOMNode(TrendingUpArrowNode);
        
    
    //Did it render as a span?
    t.equals('SPAN', whatWasMounted.tagName);
    
    //Did it render with the correct number of classes?
    t.equals(2, whatWasMounted.classList.length);
    
    //Did it render with the correct classes?
    t.equals("glyphicon glyphicon-arrow-down",whatWasMounted.attributes.class.value);
});
