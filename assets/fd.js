const fs = require('fs')
const a = require('./programAll.json')
const b = require('./program.json')
const res = a.map((e) => {
  const date = e.date.replace(/( с ).*$/g, '').trim()
  const time = e.date.replace(/^(.*)(?= с)/g, '').trim()
  const startTime = time.match(/\d.*(?= д)/)[0]
  const endTime = time.match(/\d.{4}$/)[0]
  const name = e.name
  const sp = b.filter((e) => e.name === name)
  const img = sp.length > 0 ? sp[0].img : ''
  return { ...e, date, time, startTime, endTime, img }
})
fs.writeFileSync('./p2.json', JSON.stringify(res))
