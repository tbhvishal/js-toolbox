export  function  capitalize(s  =  '')  {
  if  (!s)  return  '';
  return  s.charAt(0).toUpperCase()  +  s.slice(1);
}

export  function  titleCase(s  =  '')  {
  return  String(s)
    .toLowerCase()
    .split(/\s+/)
    .map((w)  =>  (w  ?  w[0].toUpperCase()  +  w.slice(1)  :  w))
    .join('  ');
}

export  function  kebabCase(s  =  '')  {
  return  String(s)
    .replace(/([a-z])([A-Z])/g,  '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g,  '-')
    .replace(/-{2,}/g,  '-')
    .replace(/^-|-$/g,  '')
    .toLowerCase();
}

export  function  slugify(s  =  '')  {
  return  kebabCase(s)
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu,  '')
    .toLowerCase();
}

export  function  truncate(s  =  '',  max  =  100,  suffix  =  '…')  {
  const  str  =  String(s);
  if  (str.length  <=  max)  return  str;
  return  str.slice(0,  Math.max(0,  max  -  suffix.length))  +  suffix;
}

export  function  pad(s  =  '',  length  =  2,  ch  =  '  ')  {
  s  =  String(s);
  if  (s.length  >=  length)  return  s;
  return  s  +  ch.repeat(length  -  s.length);
}

export  function  stripAnsi(s  =  '')  {
  return  String(s).replace(/\u001B\[[0-9;]*[A-Za-z]/g,  '');
}

/**  Reverse  a  string.  */
export  function  reverse(s  =  '')  {
  return  String(s).split('').reverse().join('');
}

/**  Convert  to  camelCase.  */
export  function  camelCase(s  =  '')  {
  return  String(s)
    .replace(/[^a-zA-Z0-9]+(.)/g,  (_,  chr)  =>  chr.toUpperCase())
    .replace(/^[A-Z]/,  (chr)  =>  chr.toLowerCase());
}

/**  Convert  to  snake_case.  */
export  function  snakeCase(s  =  '')  {
  return  String(s)
    .replace(/([a-z])([A-Z])/g,  '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g,  '_')
    .replace(/_+/g,  '_')
    .replace(/^_|_$/g,  '')
    .toLowerCase();
}

/**  Repeat  a  string  n  times.  */
export  function  repeat(s  =  '',  times  =  1)  {
  return  String(s).repeat(Math.max(0,  times));
}

/**  Escape  HTML  special  characters.  */
export  function  escapeHtml(s  =  '')  {
  const  map  =  {  '&':  '&amp;',  '<':  '&lt;',  '>':  '&gt;',  '"':  '&quot;',  "'":  '&#39;'  };
  return  String(s).replace(/[&<>"']/g,  (char)  =>  map[char]);
}

//  minor  update

//  minor  update

//  minor  update

//  minor  update

//  minor  update
//  minor  update
//  minor  update
//  minor  update

//  minor  update

//  minor  update

//  minor  update

//  minor  update
//  minor  update

//  minor  update

//  minor  update
//  minor  update
//  minor  update
//  minor  update

//  minor  update


