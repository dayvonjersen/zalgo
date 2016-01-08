**zalgo**<sup>[\*] which may or may not parse HTML with regex.҉̳̞̮̳̺͙̹̝͉̮̳͓̗͈</sup> will help you create custom elements.

## given an input file:
```html
<!-- to expose an element

    <chaotic-hivemind>

    use this incantation:-->
<element name="chaotic-hivemind">
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
    <style>
        blockquote { font-family: serif; }
        /**
         * you can use Sass here, specifically e.g. target the element itself:
         */
        & { text-shadow: 2px 2px 3px; }
    </style>
    <!-- style element here will compile to, e.g:

chaotic-hivemind blockquote { font-family: serif; }
chaotic-hivemind { text-shadow: 2px 2px 3px; }

-->
            <!-- whole style element is wrapped in a variable like

            "element-name { $cssText }"

            then thrown through Sass -->


    <!-- this does not ( cannot ) provide total style encapsulation -->


    <template>
        <!-- template is a new HTML5 element you can use in any context

        allows you to create a...template, which isn't attached to the document yet

        so you can manipulate it as you see fit before inserting it

        is useful too so you don't have to create such elements with pure JS DOM API.
        -->
        <h1>Zalgo text generator</h1>
		<span>2009 - tchouky </span>
		<p></p>
		<table id="zalgotable"><!--- TODO: edit and add this for nice example --></table>
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

                /*** TODO: edit and add this for a nice example ***/

        /**
         * that was all optional, THIS PART IS REQUIRED:
         */
		// object literal for this element
        var Z = {
            createdCallback: function() {
                //called when a custom element is created.

                //almost always required
                this.appendChild(this.template.content.cloneNode(true));
            },
            attachedCallback: function() {
                //called when a custom element is inserted into a DOM subtree.
            },
            detachedCallback: function() {
                //called when a custom element is removed from a DOM subtree.
            },
            attributeChangedCallback: function(attributeName) {
                //called when a custom element's attribute value has changed.
            },
            childListChangedCallback: function(removedNodes, addedNodes) {
                //called when a user of your element updates its DOM children.
            }
        };
    </script>
</element>
```

## you get this output:

*(todo: insert example here, go to [zalgo text generator](http://eeemo.net/) to see what I'm on about)*

>T̰͍̖̭̟o͈͙̭͔͇̫̹ ̖̣̀į̥̺͓͉n̮̮̠v̘̪̝͎͚͉o̪̙̦k̹͔̦̰e̴̬̱͚̗͎̘ ̯̰̻͖̩t̝̱͔̩̹̠̟he̴͉̰̙̣̜̥ ̟͔̟̰̟͖͍͞h̵̤͖͇i̖̤̟͉̥v̩̠e̮̟̗͓̮̭-̘͉m̵̮i̵̮̞̬̦̦̯n͈̟͓̤͉͓͞ͅḓ͚͇̘̭̞ ̞͖͕̥̫͙r̹͚͓̪̝̫̤e̤p̹͍̪r̻̬̰̼ẹ͙͖͈͉͟ş͔̞͕̪̘̱͉e̼̖̫̦͡nt̨̬̜͉̮̲i͔͖̜̠n̻͞g̥̲͕̼ͅ ̼͙c̦̤̹̳͚ͅh̢͖ạ̣͈̯ơ̙̩s̲͇̱̙.

>In̼͉̹͎̯͞v͚̩̞̠o͙k̞͔̤̣͟i̱͍̲̥̣͖̲n̗̺̼̖̰̲g̷̱̺͍ ̡̞̱͕̰t҉̪ͅh̢̖̝̻͎̩è̝ ̣̩͝f̙̻̥͜e̡̪̥̤̳̘̖ͅe̬͍̩̲͓͜l̶i҉n̦̩͉̟͙̘̻͢g ̮̟͓̖̘͝o̲̩͝f͏ ̞̟̮̩̪͠c̥͖͈̗̘͓͉h͍̟̞̟͞a̡̖̖̰ͅo̗͙͉̜̟͉s͞.̺͖

>̮̝͍̲Wi͏͖̼̥̳t̩͚̮̀h ̭̜̣͡o̺̻̹̼̦͠ṳ̠͚̜̙̤͘t͕̩̮̘̣̱̤͠ ̳͈͝o͖̭̠͖̣̹r̟d̹͎̬̹͚ͅe͚r.͙̠̱

>T̶̞̼͎̭͓̤h͚̭̥e̩̟̱̣̳̺ ̞̪̫̪̩͔̤N̘͉e̦̹̬̣z͚̰̟̟̥̖p̘̠̙̺e̪̟̟̤r̗̖̯͍͓̠d̤̘i̠̗̙͍͇͜a̮n̞̪̘͎͘ ̜͚͈͜hi̵̯̖̼͔v͔̥̮͙e-̳͓̩̪͖̭͢m̛̳̜̪̺̙i̲n͍͈͓͖͈͟d͉̱͜ ͖o͙̗̠̮f̫͎̪̬̙̖̀ ̳̹̙c͈̻̰̤͔ͅh̞̮a͔͜o҉̹͉s̙̜.̜͚͓̹͔̼͡ Z͇̗ạ̤̭̗̱̤l̘̰͝g̷̭͖̗͖͙͎o̰̖͍͍̜̖.

>͟H̰͓͖̰͓͖̟͡e ̝̣͈ͅͅw̹͙̪̲̤̫h̥̪ò̥̙̫͔͔ ̗̬̖̙͕̺̫W̘͙͚͎̪a̹̥̜i̝̜͎̖̬͜ͅt̷̥͇͉̜s҉̪̰͚̹̹ ͔̟͓B̝͞e̳͕h̢̩ḭ̜͝n͓̰̮̞̖d̺̺ ̤T͇̼̳̬͚̰h̟̩͚̘͢e̪̰̯̕ ̲̣̗̖̪̤͔Ẉ͔̳̤͝ḁ͚̭̪͈̩̪͠l̘̗̪̣̝l̼͖̪̙̳͈.҉̖̬̪

when called with:

`./zalgo --single=/path/to/above/input-file.html`

(*will extract relevant bits from the html and mess with them a bit

before concatenating with CustomElements.js and hecomes.js in project directory*)

## use in your public-facing html:
```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CustomElements Example</title>
        <link rel="stylesheet" href="dist/webcomponents.css">
        <script src="dist/webcomponents.js"></script>
    </head>
    <body>
        <chaotic-hivemind></chaotic-hivemind>
    </body>
</html>
```

I don't know why I'm finding this so hard to explain.
