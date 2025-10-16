export  const  delay  =  (ms)  =>  new  Promise((res)  =>  setTimeout(res,  ms));

export  async  function  withTimeout(promise,  ms,  message  =  'Timeout')  {
  let  timer;
  const  t  =  new  Promise((_,  rej)  =>  (timer  =  setTimeout(()  =>  rej(new  Error(message)),  ms)));
  try  {
    return  await  Promise.race([promise,  t]);
  }  finally  {
    clearTimeout(timer);
  }
}

export  async  function  retry(fn,  {  tries  =  3,  waitMs  =  0  }  =  {})  {
  let  err;
  for  (let  i  =  0;  i  <  tries;  i++)  {
    try  {  return  await  fn();  }  catch  (e)  {  err  =  e;  if  (waitMs)  await  delay(waitMs);  }
  }
  throw  err;
}

export  function  memoizeAsync(fn)  {
  const  cache  =  new  Map();
  return  async  (...args)  =>  {
    const  key  =  JSON.stringify(args);
    if  (cache.has(key))  return  cache.get(key);
    const  p  =  fn(...args).finally(()  =>  cache.delete(key));
    cache.set(key,  p);
    return  p;
  };
}

export  function  simpleQueue(concurrency  =  2)  {
  const  queue  =  [];
  let  active  =  0;
  const  runNext  =  ()  =>  {
    if  (active  >=  concurrency  ||  queue.length  ===  0)  return;
    const  {  task,  resolve,  reject  }  =  queue.shift();
    active++;
    Promise.resolve().then(task).then(resolve,  reject).finally(()  =>  {
      active--;  runNext();
    });
  };
  return  (task)  =>  new  Promise((resolve,  reject)  =>  {  queue.push({  task,  resolve,  reject  });  runNext();  });
}

/**  Alias  for  delay.  */
export  const  sleep  =  delay;

/**  Debounce  a  function  call.  */
export  function  debounce(fn,  waitMs  =  300)  {
  let  timer;
  return  function  (...args)  {
    clearTimeout(timer);
    timer  =  setTimeout(()  =>  fn.apply(this,  args),  waitMs);
  };
}

/**  Throttle  a  function  to  run  at  most  once  per  interval.  */
export  function  throttle(fn,  limitMs  =  300)  {
  let  last  =  0;
  return  function  (...args)  {
    const  now  =  Date.now();
    if  (now  -  last  >=  limitMs)  {
      last  =  now;
      fn.apply(this,  args);
    }
  };
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



