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
    t.plan(10);

    var RepoListFilter = require('../../../build/js/repo_list/repo_list_filter.js');
    var constants = require('../../../build/js/constants.js');
    var RepoListFilterComponent = new RepoListFilter({
                                              sort: "stars",
                                              stars: "500",
                                              applySort:constants.noop,
                                              applyFilter: constants.noop,
                                              clearFilters: constants.noop
                                          });

    var RepoListFilterRendered = RepoListFilterComponent.render();

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    /**
    * Render a component into a detached DOM node in the document. This function requires a DOM.
    * https://facebook.github.io/react/docs/test-utils.html#renderintodocument
    * 
    * This returns an object of type ReactComponent tree
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
    t.equals('DIV', whatWasMounted.tagName , 'render as a span?');




    /**
    * Returns true if element is any ReactElement.
    * https://facebook.github.io/react/docs/test-utils.html#iselement
    */

    var isReactElement =  TestUtils.isElement(RepoListFilterRendered);

    //is it a React Element?

    t.equals(true,isReactElement, 'is it a React Element?');




    /**
    * Returns true if element is a ReactElement whose type is of a React componentClass.
    * https://facebook.github.io/react/docs/test-utils.html#iselementoftype
    */

    var isElementOfType = TestUtils.isElementOfType(RepoListFilterRendered, 'div');


    //Is it a React componentClass? What even is a React componentClass???
    t.equals(true,isElementOfType , 'is rendered as React componentClass');



    /**
    * Returns true if instance is a DOM component (such as a <div> or <span>).
    * https://facebook.github.io/react/docs/test-utils.html#isdomcomponent
    */

    var isDomComponent = TestUtils.isDOMComponent(RepoListFilterNode);

    t.equals(true,isDomComponent, 'is attached to the DOM as a DOM component');



    /**
    * Returns true if instance is a composite component (created with React.createClass())
    * https://facebook.github.io/react/docs/test-utils.html#iscompositecomponent
    */

    var isCompositeComponent = TestUtils.isCompositeComponent(RepoListFilterNode);

    t.equals(true, isCompositeComponent, 'is attached to the DOM as a composite component');

    /**
    * Returns true if instance is a composite component (created with React.createClass()) 
    * whose type is of a React componentClass.
    */

    var isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(RepoListFilterComponent,RepoListFilter);

    t.equals(true,isCompositeComponentOfType,'is RepoListFilterComponent a composite component of a type RepoListFilter');

    /**
    * Finds all instances of components in the rendered tree that are DOM components with 
    * the class name matching className.
    * https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithclass
    */

    var radioButtons = TestUtils.scryRenderedDOMComponentsWithClass(RepoListFilterNode,'radio');


    t.equals(3,radioButtons.length, 'contains 3 radio buttons');


    /**
    * Like scryRenderedDOMComponentsWithClass() but expects there to be one result,
    * and returns that one result, or throws exception if there is any other number of matches besides one.
    * https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithclass
    */

    var formControl = TestUtils.findRenderedDOMComponentWithClass(RepoListFilterNode,'form-control');
    t.ok(formControl, 'has one node with a class form-control');

    /**
    * Finds all instances of components in the rendered tree that are DOM components with the tag
    * name matching tagName.
    * https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithtag
    */

    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(RepoListFilterNode,'input');
    t.equals(4,inputs.length,'has 4 input fields');

    /**
    * Like scryRenderedDOMComponentsWithTag() but expects there to be one result,
    * and returns that one result, or throws exception if there is any other number of matches besides one.
    * https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithtag
    */
    var formNode = TestUtils.findRenderedDOMComponentWithTag(RepoListFilterNode, 'form');
    t.ok(formNode.tagName, 'has only one form');

    /**
    * Finds all instances of components with type equal to componentClass.
    * https://facebook.github.io/react/docs/test-utils.html#scryrenderedcomponentswithtype
    */

   // var allKindsOfComponents = TestUtils.scryRenderedComponentsWithType((ReactComponent tree, function componentClass));

    /**
    * Same as scryRenderedComponentsWithType() but expects there to be one result and returns
    * that one result, or throws exception if there is any other number of matches besides one.
    * https://facebook.github.io/react/docs/test-utils.html#findrenderedcomponentwithtype
    */

    //var justOneKindOfComponent = TestUtils.findRenderedComponentWithType(ReactComponent tree, function componentClass)


});
