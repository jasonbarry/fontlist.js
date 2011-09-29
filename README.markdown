### jquery.fontlist.js
### https://github.com/jasonbarry/fontlist.js
### 9/29/11

This plugin applies a given array of font names to an element 
and tests their width and height against the default font's 
width and height. If the dimensions are different, it is very 
likely that the font is installed.

Inspiration to create this plugin originated from 
[Carlo's jquery-browser-fingerprint plugin](https://github.com/carlo/jquery-browser-fingerprint) 
that assigns a browser a unique hash based on user agent, screen size, 
time zone, and installed plugins. By checking for installed fonts, 
a more unique hash can be generated. 

This is not a foolproof method, but more of a hack to read the 
installed fonts on a system. Obviously, more font names need to 
be included in the `fonts` array for a more thorough test.

Simply call `$.fontlist()` to retrieve an array of installed fonts. 

Tested in webkit. 