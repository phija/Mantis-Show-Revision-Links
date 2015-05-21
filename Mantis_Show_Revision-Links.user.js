// ==UserScript==
// @name        Mantis Show Revision Links
// @description Makes links where a revision is written starting with 'r' (or similar) and followed by a number
// @author      phija
// @namespace   http://www.phiworld.de
// @include     http://tracker.atrics.loc/view.php*
// @grant       none
// @version      0.1.0
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
    html = html.replace(/(r|rev. |rev.|evision )([0-9]+)/ig, " <a href=\"" + url + "\$2\" alt=\"look at that beautiful code!\">r\$2</a>");
    form.innerHTML = html;    
  }
}

makeCodeLinks();
