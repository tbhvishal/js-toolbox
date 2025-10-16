export  function  formatDate(d  =  new  Date(),  locale  =  'en-US',  opts  =  {})  {
  const  date  =  d  instanceof  Date  ?  d  :  new  Date(d);
  return  new  Intl.DateTimeFormat(locale,  {  year:  'numeric',  month:  '2-digit',  day:  '2-digit',  ...opts  }).format(date);
}

export  function  addDays(d  =  new  Date(),  days  =  0)  {
  const  date  =  new  Date(d);
  date.setDate(date.getDate()  +  Number(days  ||  0));
  return  date;
}

export  function  isSameDay(a,  b)  {
  const  da  =  new  Date(a);  const  db  =  new  Date(b);
  return  da.getFullYear()  ===  db.getFullYear()  &&  da.getMonth()  ===  db.getMonth()  &&  da.getDate()  ===  db.getDate();
}

export  function  fromNow(d  =  new  Date())  {
  const  diffMs  =  new  Date()  -  new  Date(d);
  const  sec  =  Math.round(diffMs  /  1000);
  if  (sec  <  60)  return  `${sec}s  ago`;
  const  min  =  Math.round(sec  /  60);
  if  (min  <  60)  return  `${min}m  ago`;
  const  hr  =  Math.round(min  /  60);
  if  (hr  <  24)  return  `${hr}h  ago`;
  const  day  =  Math.round(hr  /  24);
  return  `${day}d  ago`;
}

export  function  parseISO(s)  {
  const  d  =  new  Date(s);
  return  isNaN(d.getTime())  ?  null  :  d;
}

/**  Get  the  start  of  day  (00:00:00.000).  */
export  function  startOfDay(d  =  new  Date())  {
  const  date  =  new  Date(d);
  date.setHours(0,  0,  0,  0);
  return  date;
}

/**  Get  the  end  of  day  (23:59:59.999).  */
export  function  endOfDay(d  =  new  Date())  {
  const  date  =  new  Date(d);
  date.setHours(23,  59,  59,  999);
  return  date;
}

/**  Get  the  number  of  days  between  two  dates.  */
export  function  daysBetween(a,  b)  {
  const  da  =  startOfDay(a);
  const  db  =  startOfDay(b);
  const  diffMs  =  Math.abs(db  -  da);
  return  Math.floor(diffMs  /  (1000  *  60  *  60  *  24));
}



//  minor  update
//  minor  update
//  minor  update

//  minor  update
//  minor  update

//  minor  update
//  minor  update
