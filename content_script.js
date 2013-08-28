walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )  
  {
  case 1:  // Element
  case 9:  // Document
  case 11: // Document fragment
    child = node.firstChild;
    while ( child ) 
    {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;

  case 3: // Text node
    handleText(node);
    break;
  default: // Nothing happened
    break;
  }
  }

  function handleText(textNode) 
  {
    var v = textNode.nodeValue;
    var penisesAr = [
      'penis',
      'dick',
      'cock',
      'dong',
      'dildo',
      'prick',
      'johnson',
      'rod',
      'boner',
      'weenie',
      'meatsicle',
      'phallus',
      'schlong'
    ];

    /* choose a random dick from the length of the penises array 
     * divide by two
     * */
    var randomDick = penisesAr[Math.floor( Math.random() * penisesAr.length )];

    // just nip the tip for uppercase cocks
    randomDick = randomDick.charAt(0).toUpperCase() + randomDick.slice(1);

    // Hold on
    v = v.replace(/\bCompliance\b/g, randomDick);
    
    // insert joke 
    v = v.replace(/\bcompliance\b/g, randomDick.toLowerCase() );

    // SPEAK IN CAPS
    v = v.replace(/\bCOMPLIANCE\b/g, randomDick.toUpperCase() )

    textNode.nodeValue = v;
  }


