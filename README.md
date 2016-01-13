**zalgo**<sup>[\*] which may or may not parse HTML with regex.҉̳̞̮̳̺͙̹̝͉̮̳͓̗͈</sup> will help you create custom elements.

```
usage: zalgo [OPTIONS]
options:
--single=input-file - an input-file.html in src/
--src-dir=src       - path to use as source (default src/)
--tmp-dir=tmp       - path to use for temp  (default tmp/)
--dist-dir=dist     - path to use as dist  (default dist/)
```

## example widget result demo thing:

[zalgo-text-generator](https://generaltso.github.io/zalgo/)

## given this input file:
```html
<!-- to expose an element

    <zalgo-text-generator>

    use this incantation:-->
<element name="zalgo-text-generator">
<!-- The name attribute must be lowercase -->
<!-- and contain at least one dash        -->
<!-- and not be any of the following:
     annotation-xml,color-profile,font-face,
     font-face-src,font-face-uri,
     font-face-format,font-face-name,
     missing-glyph.
     -->


<!-- there is no shadowdom features here
    and no scoped css either

    you have to use old fashioned cascade and
    specificity features of css -->


            <!--

            the whole style element is wrapped in a variable like

            "element-name { $cssText }"

            then thrown through Sass

            -->


    <!-- this does not ( cannot ) provide total style encapsulation -->
    <style>
        /**
         * thus you can use Sass here, specifically e.g. target the element itself:
         */
        & {
            font-family: sans-serif;
            color: #000;
        }
        /* cheap reset */
        * { margin: 0; padding: 0; }
        /* isn't vendor prefixing AMAZING */
        ::selection { background: #000; color: #ccc; }
        ::-moz-selection { background: #000; color: #ccc; }
        ::-webkit-selection { background: #000; color: #ccc; }

        /* stuff */
        header { padding: 1em 0; }
        h1, h2 { line-height: 2em; }
        h2 { font-size: 1rem; }
        h2 a { color: #000; }
        h2 a:hover {
            text-decoration: none;
            background: #000;
            color: #fff;
        }
        pre, textarea {
            font-family: sans-serif;
        }

        /* more stuff */
        main, .zalgo-input {
            display: flex;
            flex-wrap: wrap;
        }
        .zalgo-output {
            overflow: auto;
        }
        .zalgo-output, .zalgo-input {
            border: 2px solid;
            flex: 1 1 100%;
            margin: 2px;
        }

        /**
         * pond sieve
         */
        @media (min-width: 800px) { // mobl furst
            main {
                flex-wrap: nowrap;
            }
            .zalgo-output, .zalgo-input {
                flex: 1 1 50%;
            }
        }
        .zalgo-output__destination {
            padding: 1em;
            text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
        }
        textarea {
            flex: 1 1 100%;
            min-height: 10em;
            resize: resize-y;
            margin: 1px;
            padding: 2px;
        }
        .zalgo-input__options {
            flex: 0 1 50%;
        }
        .zalgo-input__options label {
            display: block;
            padding: 2px;
        }
        .zalgo-input__options input {
            margin-right: 2px;
        }
        @media (min-width: 640px) {
            .zalgo-output__destination {
                padding: 4em;
            }
            .zalgo-input__options {
                flex: 0 1 33%;
            }
        }
    </style>

    <template>
        <!-- template is a new HTML5 element you can use in any context

        allows you to create a...template, which isn't attached to the document yet

        so you can manipulate it as you see fit before inserting it

        is useful too so you don't have to create such elements with pure JS DOM API.
        -->
        <header>
            <h1>Zalgo text generator</h1>
            <h2>2009 - tchouky &mdash; <a href="http://eeemo.net/" target="_blank">Original Site</a></h2>
        </header>
        <main>
            <div class="zalgo-output">
                <pre class="zalgo-output__destination"></pre>
            </div>
            <div class="zalgo-input">
                <textarea class="zalgo-input__textarea"
                          autofocus>To invoke the hive-mind representing chaos.
Invoking the feeling of chaos.
With out order.
The Nezperdian hive-mind of chaos. Zalgo.
He who Waits Behind The Wall.
ZALGO!</textarea>
                <div class="zalgo-input__options">
                    <label>
                        <input type="checkbox"
                               class="zalgo-input__direction--up"
                               >fuck up going up</label>
                    <label>
                        <input type="checkbox"
                               class="zalgo-input__direction--mid"
                               checked>fuck up going the middle</label>
                    <label>
                        <input type="checkbox"
                               class="zalgo-input__direction--down"
                               checked>fuck up going down</label>
                </div>
                <div class="zalgo-input__options">
                    <label>
                        <input type="radio"
                               class="zalgo-input__amount--mini"
                               name="zalgo-input__amount"
                               value="0"
                               checked>mini fuck up</label>
                    <label>
                        <input type="radio"
                               class="zalgo-input__amount--normal"
                               name="zalgo-input__amount"
                               value="1">normal fuck up</label>
                    <label>
                        <input type="radio"
                               class="zalgo-input__amount--maxi"
                               name="zalgo-input__amount"
                               value="2">maxi fuck up</label>
                </div>
            </div>
        </main>
    </template>

    <script>
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
    </script>
</element>
```

## you get this output:

[demo of zalgo-text-generator](https://generaltso.github.io/zalgo/)

## when called with:

`./zalgo --single=zalgo-text-generator.html`

(*will extract relevant bits from the html and mess with them a bit*)

(*build.sh will concatenating with CustomElements.js and hecomes.js in project directory*)

## use in your public-facing html:

```html
<!doctype html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Zalgo text generator</title>
        <link rel="stylesheet" href="zalgo-text-generator.css">
        <!-- or <link rel="stylesheet" href="dist/webcomponents.css" -->

        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.20/CustomElements.js"></script>
        <script src="hecomes.js"></script>
        <script src="zalgo-text-generator.js"></script>
        <!-- or <script src="dist/webcomponents.js"></script> -->
    </head>
    <body>
        <zalgo-text-generator></zalgo-text-generator>
    </body>
</html>
```
