$(document).ready(function(){$("#overlay-toggle").click(function(){return $("body").toggleClass("has-overlay"),!1}),$(".masthead").click(function(a){$(a.target).is("a")||$("body").removeClass("has-overlay")})});