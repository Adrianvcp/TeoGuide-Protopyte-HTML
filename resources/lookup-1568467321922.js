(function(window, undefined) {
  var dictionary = {
    "71854493-87f6-440c-bb65-31dbb2a6ab19": "explorar",
    "4429c76e-4e9e-433e-ab3b-4fa3d6beb31a": "fichaImagenes",
    "6ad92310-cf6d-482a-9fa5-f4ca1f79825e": "inicio",
    "92a0a45b-5332-4c14-bca7-753d0ed0340b": "planes",
    "d2a60379-2983-42d5-8e43-3a3bd28185b7": "forgot pass",
    "b80ea6ce-06c6-4f84-a0c3-24f7de833b7d": "agregarplan",
    "7b500689-01eb-4f60-9b1f-ec7591ed81c0": "camera",
    "f4dc6d8d-5bfe-443d-8e35-4da841dfda55": "micuenta",
    "340711a0-84a8-4d41-8919-cab325112f07": "login",
    "12419a77-a331-4e8b-90e9-70807ca3ac3b": "fichatecnica",
    "c209cc42-854d-46b8-a922-2ba92ae2a174": "galeria",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "signin",
    "9715a5bf-2441-4698-a01c-150d9c290348": "digitacion",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);