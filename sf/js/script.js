function GetBC(lngPostid) {
  intTimeZone = < -BlogTimeZone - > ;
  strBlogId = "<-BlogId->";
  intCount = -1;
  strResult = "";
  try {
      for (i = 0; i < BlogComments.length; i += 2) {
          if (BlogComments[i] == lngPostid)
              intCount = BlogComments[i + 1];
      }
  } catch (e) {}
  if (intCount == -1) strResult = "آرشیو نظرات";
  if (intCount == 0) strResult = "نظر بدهید";
  if (intCount == 1) strResult = "یک نظر";
  if (intCount > 1) strResult = intCount + " نظر";

  strUrl = "/comments/?blogid=" + strBlogId + "&postid=" + lngPostid + "&timezone=" + intTimeZone;
  strResult = "<a href=\"javascript:void(0)\" onclick=\"javascript:window.open('" + strUrl + "','blogfa_comments','status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=500px,height=500px')\" >" + strResult + " </a>";

  document.write(strResult);
}

function OpenLD() {
  window.open('/links', 'blogfa_ld', 'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=500px,height=500px');
  return true;
}