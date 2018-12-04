Promise.resolve().then(() => {
  throw new Error('test throw')
}).catch(err => console.log(err))
