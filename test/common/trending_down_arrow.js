const test = require('tape');

test('should render a styled down arrow', function(t){
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
     *           className="glyphicon glyphicon-arrow-down"
     *           aria-hidden="true">
     *       </span>);
    */
    const TrendingDownArrow = require('../../build/js/common/trending_down_arrow.js');
    
    /**
    * TrendingDownArrow.prototype.render()
    * will return a React.Element
    * which looks like this
    * {
        "type":"span",
        "key":null,
        "ref":null,
        "_owner":null,
        "_context":{},
        "_store":{
            "props":{
                "style":{
                    "color":"#9494FF"
                },
               "className":"glyphicon glyphicon-arrow-down",
               "aria-hidden":"true"
        },
        "originalProps":{
            "style":{
                "color":"#9494FF"
            },
            "className":"glyphicon glyphicon-arrow-down",
            "aria-hidden":"true" 
        }}}"
    */
    const TrendingDownArrowRendered = TrendingDownArrow.prototype.render();
    
    
    const React = require('react/addons');
    const TestUtils = React.addons.TestUtils;
    
    /**
     * Render a component into a detached DOM node in the document. This function requires a DOM.
     * https://facebook.github.io/react/docs/test-utils.html#renderintodocument
     */
    
    const TrendingDownArrowNode =  TestUtils.renderIntoDocument(TrendingDownArrowRendered);
    
    /**
     * If this component has been mounted into the DOM,
     *  this returns the corresponding native browser DOM element.
     *  This method is useful for reading values out of the DOM,
     *  such as form field values and performing DOM measurements. 
     * When render returns null or false, findDOMNode returns null.
     * 
     * https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode
     */
    const whatWasMounted = React.findDOMNode(TrendingDownArrowNode);
        
    
    //Did it render as a span?
    t.equals(whatWasMounted.tagName, 'SPAN');
    
    //Did it render with the correct number of classes?
    t.equals(2,whatWasMounted.classList.length);
    
    //Did it render with the correct classes?
    t.equals("glyphicon glyphicon-arrow-down",whatWasMounted.attributes.class.value);
});
