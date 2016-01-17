;(function(){

        /**
         * you can add here javascript for this custom element
         *  which by now you must realize is euphemism for
         *   widget.
         *
         * all this JS is encapsulated in a (function(){ ... })() thing.
         *
         * so you can optionally add relevant context-local specific stuff:
         */
        //============================================================
        // ZALGO text script by tchouky
        //============================================================
        // (edit by tso 1/12/2016)

        // data set of leet unicode chars
        //---------------------------------------------------

        //those go UP
        var zalgo_up = [
            '\u030d','\u030e','\u0304','\u0305','\u033f','\u0311',
            '\u0306','\u0310','\u0352','\u0357','\u0351','\u0307',
            '\u0308','\u030a','\u0342','\u0343','\u0344','\u034a',
            '\u034b','\u034c','\u0303','\u0302','\u030c','\u0350',
            '\u0300','\u0301','\u030b','\u030f','\u0312','\u0313',
            '\u0314','\u033d','\u0309','\u0363','\u0364','\u0365',
            '\u0366','\u0367','\u0368','\u0369','\u036a','\u036b',
            '\u036c','\u036d','\u036e','\u036f','\u033e','\u035b',
            '\u0346','\u031a'
        ];

        //those go DOWN
        var zalgo_down = [
            '\u0316','\u0317','\u0318','\u0319','\u031c','\u031d',
            '\u031e','\u031f','\u0320','\u0324','\u0325','\u0326',
            '\u0329','\u032a','\u032b','\u032c','\u032d','\u032e',
            '\u032f','\u0330','\u0331','\u0332','\u0333','\u0339',
            '\u033a','\u033b','\u033c','\u0345','\u0347','\u0348',
            '\u0349','\u034d','\u034e','\u0353','\u0354','\u0355',
            '\u0356','\u0359','\u035a','\u0323'
        ];

        //those always stay in the middle
        var zalgo_mid = [
            '\u0315','\u031b','\u0340','\u0341','\u0358','\u0321',
            '\u0322','\u0327','\u0328','\u0334','\u0335','\u0336',
            '\u034f','\u035c','\u035d','\u035e','\u035f','\u0360',
            '\u0362','\u0338','\u0337','\u0361','\u0489'
        ];

        // rand funcs
        //---------------------------------------------------
        
        //gets an int between 0 and max
        function rand(max) {
            return Math.floor(Math.random() * max);
        }

        //gets a random char from a zalgo char table
        function rand_zalgo(array) {
            return array[rand(array.length)];
        }
        
        // utils funcs
        //---------------------------------------------------
                    
        //lookup char to know if its a zalgo char or not
        function is_zalgo_char(c){
            [zalgo_up,zalgo_down,zalgo_mid].forEach(function(zalgo){
                zalgo.forEach(function(z){
                    if(c === z) return true;
                });
            });
            return false;
        }

        function zalgo_text(txt, amt, up, mid, down) {
            var newtxt = '';
            [].forEach.call(txt, function(c) {
                if(is_zalgo_char(c)) {
                    return;
                }
                newtxt += c;

                var num_up, num_mid, num_down;
                switch(amt) {
                case 0: // mini
                    num_up = rand(8);
                    num_mid = rand(2);
                    num_down = rand(8);
                    break;
                case 1: // normal
                    num_up = rand(16)/2+1;
                    num_mid = rand(6)/2;
                    num_down = rand(16)/2+1;
                    break;
                case 2: // maxi
                    num_up = rand(64)/4+3;
                    num_mid = rand(16)/4+1;
                    num_down = rand(64)/4+3;
                    break;
                }
                if(!!up) {
                    for(var i = 0; i < num_up; i++) {
                        newtxt += rand_zalgo(zalgo_up);
                    }
                }
                if(!!mid) {
                    for(var i = 0; i < num_mid; i++) {
                        newtxt += rand_zalgo(zalgo_mid);
                    }
                }
                if(!!down) {
                    for(var i = 0; i < num_down; i++) {
                        newtxt += rand_zalgo(zalgo_down);
                    }
                }
            });
            return newtxt;
        }

        /**
         * this is what's required to make a custom element:
         */

		// object literal for this element
        var Z = {
            /**
             * NOTE: for this example, I'm not using these
             * but they are here for your reference
             */
            //called when a custom element is inserted into a DOM subtree.
            attachedCallback: function() {},

            //called when a custom element is removed from a DOM subtree.
            detachedCallback: function() {},

            //called when a custom element's attribute value has changed.
            attributeChangedCallback: function(attributeName) {},

            //called when a user of your element updates its DOM children.
            childListChangedCallback: function(removedNodes, addedNodes) {},

            /**
             * only using this one in this example:
             */
            // called when a custom element is created.
            createdCallback: function() {
                /**
                 * NOTE: in all of these callback functions, 
                 * `this` is the custom element itself.
                 */
                // grab template
                var tpl = this.template.content.cloneNode(true);
                // select the elements we need 
                var destination = tpl.querySelector('.zalgo-output__destination');
                var textarea = tpl.querySelector('.zalgo-input__textarea');
                var direction_up = tpl.querySelector('.zalgo-input__direction--up');
                var direction_mid = tpl.querySelector('.zalgo-input__direction--mid');
                var direction_down = tpl.querySelector('.zalgo-input__direction--down');
                var amount_mini = tpl.querySelector('.zalgo-input__amount--mini');
                var amount_normal = tpl.querySelector('.zalgo-input__amount--normal');
                var amount_maxi = tpl.querySelector('.zalgo-input__amount--maxi');

                function getAmount() {
                    [amount_mini,amount_normal,amount_maxi].forEach(function(radioElement){
                        if(radioElement.checked) {
                            return radioElement.value;
                        }
                    });
                    return 0;
                }

                function doIt() {
                    destination.innerHTML = zalgo_text(
                        textarea.value, 
                        getAmount(), 
                        direction_up.checked,
                        direction_mid.checked,
                        direction_down.checked
                    );
                }
                
                // attach some event listeners
                textarea.addEventListener('keyup', doIt, false);
                textarea.addEventListener('keydown', doIt, false);
                textarea.addEventListener('keypress', doIt, false);
                textarea.addEventListener('change', doIt, false);
                textarea.addEventListener('focus', doIt, false);
                textarea.addEventListener('blur', doIt, false);
                direction_up.addEventListener('change', doIt, false);
                direction_mid.addEventListener('change', doIt, false);
                direction_down.addEventListener('change', doIt, false);
                amount_mini.addEventListener('change', doIt, false);
                amount_normal.addEventListener('change', doIt, false);
                amount_maxi.addEventListener('change', doIt, false);
                destination.parentElement.addEventListener('click', function(){
                    // select all on click
                    var r = document.createRange();
                    r.setStart(destination, 0);
                    r.setEnd(destination, destination.childNodes.length);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(r);
                });
                // and transform the initial placeholder text
                doIt();

                // finally add to the DOM
                this.appendChild(tpl);
            }
        };
    
Register("ZalgoTextGenerator", "zalgo-text-generator", Z, "\n <!-- template is a new HTML5 element you can use in any context\n\n allows you to create a...template, which isn\'t attached to the document yet\n\n so you can manipulate it as you see fit before inserting it\n\n is useful too so you don\'t have to create such elements with pure JS DOM API.\n -->\n <header>\n <h1>Zalgo text generator</h1>\n <h2>2009 - tchouky — <a href=\"http://eeemo.net/\" target=\"_blank\">Original Site</a></h2>\n </header>\n <main>\n <div class=\"zalgo-output\">\n <pre class=\"zalgo-output__destination\"></pre>\n </div>\n <div class=\"zalgo-input\">\n <textarea class=\"zalgo-input__textarea\" autofocus=\"\">To invoke the hive-mind representing chaos.\nInvoking the feeling of chaos.\nWith out order.\nThe Nezperdian hive-mind of chaos. Zalgo.\nHe who Waits Behind The Wall.\nZALGO!</textarea>\n <div class=\"zalgo-input__options\">\n <label>\n <input type=\"checkbox\" class=\"zalgo-input__direction--up\"></input>fuck up going up</label>\n <label>\n <input type=\"checkbox\" class=\"zalgo-input__direction--mid\" checked=\"\"></input>fuck up the middle</label>\n <label>\n <input type=\"checkbox\" class=\"zalgo-input__direction--down\" checked=\"\"></input>fuck up going down</label>\n </div>\n <div class=\"zalgo-input__options\">\n <label>\n <input type=\"radio\" class=\"zalgo-input__amount--mini\" name=\"zalgo-input__amount\" value=\"0\" checked=\"\"></input>mini fuck up</label>\n <label>\n <input type=\"radio\" class=\"zalgo-input__amount--normal\" name=\"zalgo-input__amount\" value=\"1\"></input>normal fuck up</label>\n <label>\n <input type=\"radio\" class=\"zalgo-input__amount--maxi\" name=\"zalgo-input__amount\" value=\"2\"></input>maxi fuck up</label>\n </div>\n </div>\n </main>\n ");
})();