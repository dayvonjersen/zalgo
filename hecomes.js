function Register(elementName, elementTag, elementPrototype, elementTemplate) {
    var protoDef = {};
    for(func in elementPrototype) {
        if(elementPrototype.hasOwnProperty(func)) {
            protoDef[func] = {
                enumerable: true,
                value: elementPrototype[func]
            };
        }
    }
    var protoObj = Object.create(HTMLElement.prototype, protoDef);
    window[elementName] = document.registerElement(elementTag, {
        prototype: protoObj
    });
    Object.defineProperty(protoObj, 'template', {
        get: function() {
            var fragment = document.createDocumentFragment();
            var div = fragment.appendChild(document.createElement('div'));
            div.innerHTML = elementTemplate;
            while(child = div.firstChild) {
                fragment.insertBefore(child,div);
            }
            fragment.removeChild(div);
            return {
                content: fragment
            };
        }
    });
}
