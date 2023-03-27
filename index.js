console.log('cool')

import express from 'express'

// basis url voor de api
// const url = 'https://api.vinimini.fdnd.nl/api/v1'

// Maak een nieuwe express app
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))



// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Maak een route voor de index
server.get('/', (request, response) => {
  const baseUrl = "https://api.vinimini.fdnd.nl/api/v1/"
  const pepijnId = "notities?id=clemozv3c3eod0bunahh71sx7"
  const url = `${baseUrl}${pepijnId}`

  fetchJson(url).then((data) => {
    response.render('index', data)
  })
})

server.post('/', function (req, res, next) {
  const baseurl = "https://api.vinimini.fdnd.nl/api/v1/"
  const url = `${baseurl}`
  req.body.afgerond = false
  req.body.persoonId = 'clemozv3c3eod0bunahh71sx7'
  req.body.datum = req.body.datum + ':00Z';
  req.body.herinnering = [req.body.herinnering + ':00Z']
  console.log(req.body)
  postJson(url + '/notities', req.body).then((data) => {
    console.log(JSON.stringify(data))
    let newNotitie = { ... req.body }

    if (data.success) {
      res.redirect('/new') 
      // TODO: squad meegeven, message meegeven
      // TODO: Toast meegeven aan de homepagina
    } else {
      const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
      const newdata = { error: errormessage, values: newData }
      
      res.render('index', newdata)
    }
  })
})
  







  // definieer de fetchJson functie
  async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }
  
  // Start met luisteren
server.listen(server.get('port'), () => {
    console.log(`Application started on http://localhost:${server.get('port')}`)
  })







  export async function postJson(url, body) {
    return await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => error)
  }