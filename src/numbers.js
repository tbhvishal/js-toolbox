/**  Clamp  a  number  between  min  and  max.  */
export  function  clamp(n,  min,  max)  {
  if  (min  >  max)  [min,  max]  =  [max,  min];
  return  Math.min(Math.max(n,  min),  max);
}

/**  True  if  n  is  inclusively  between  a  and  b.  */
export  function  between(n,  a,  b)  {
  if  (a  >  b)  [a,  b]  =  [b,  a];
  return  n  >=  a  &&  n  <=  b;
}

/**  Random  integer  in  [min,  max].  */
export  function  randInt(min,  max)  {
  min  =  Math.ceil(min);  max  =  Math.floor(max);
  return  Math.floor(Math.random()  *  (max  -  min  +  1))  +  min;
}

/**  Random  float  in  [min,  max).  */
export  function  randFloat(min,  max)  {
  return  Math.random()  *  (max  -  min)  +  min;
}

/**  Sum  of  a  numeric  array.  */
export  function  sum(xs)  {
  return  xs.reduce((acc,  n)  =>  acc  +  Number(n  ||  0),  0);
}

/**  Average  of  a  numeric  array.  */
export  function  avg(xs)  {
  if  (!xs.length)  return  0;
  return  sum(xs)  /  xs.length;
}

/**  Median  of  a  numeric  array.  */
export  function  median(xs)  {
  if  (!xs.length)  return  0;
  const  sorted  =  [...xs].sort((a,  b)  =>  a  -  b);
  const  mid  =  Math.floor(sorted.length  /  2);
  return  sorted.length  %  2  ?  sorted[mid]  :  (sorted[mid  -  1]  +  sorted[mid])  /  2;
}

/**  Format  a  number  as  currency.  */
export  function  toCurrency(n,  locale  =  'en-US',  currency  =  'USD')  {
  return  new  Intl.NumberFormat(locale,  {  style:  'currency',  currency  }).format(n);
}

/**  Round  to  a  given  number  of  decimal  places.  */
export  function  round(n,  decimals  =  0)  {
  const  factor  =  Math.pow(10,  decimals);
  return  Math.round(n  *  factor)  /  factor;
}

/**  Calculate  percentage  (value/total  *  100).  */
export  function  percentage(value,  total)  {
  if  (total  ===  0)  return  0;
  return  (value  /  total)  *  100;
}

/**  Check  if  a  number  is  even.  */
export  function  isEven(n)  {
  return  n  %  2  ===  0;
}

/**  Check  if  a  number  is  odd.  */
export  function  isOdd(n)  {
  return  n  %  2  !==  0;
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


