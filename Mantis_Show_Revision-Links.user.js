// ==UserScript==
// @name        Mantis Show Revision Links
// @description Makes links where a revision is written starting with 'r' (or similar) and followed by a number
// @author      phija
// @namespace   http://www.phiworld.de
// @include     http://tracker.atrics.loc/view.php*
// @grant       none
// @version      0.1.2
// ==/UserScript==

var url="http://svn.atrics.loc/viewvc/repository?view=revision&revision="

function makeCodeLinks()
{
  console.log("making links where r1234 is written.");

  var formElements = document.getElementsByTagName("td");

  for (var i = 0; i < formElements.length; i++)
  {
    var form = formElements[i];
    var html = form.innerHTML;
    html = html.replace(/[^a-zA-Z](r|rev. |rev.|Revision |revision )([0-9]+)/g, " <a href=\"" + url + "\$2\" title=\"look at that beautiful code!\">Revision \$2</a>");
    form.innerHTML = html;    
  }
}

makeCodeLinks();
