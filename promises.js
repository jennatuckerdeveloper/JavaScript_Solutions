let maybePromise = new Promise(function (resolve, reject) {
  let value = Math.random() > 0.5
  if (value) resolve('Good')
  if (!value) reject(new Error('Bad'))
})

maybePromise
  .then(function (value) { console.log('then', value) })
  .catch(function (value) { console.log('catch', value) })

  // Typically, you want to return, since there are often a chain of then's.