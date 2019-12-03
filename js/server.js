
import sMainJs from 'raw-loader!../dist/main.js'
import sIndexHtml from '../html/index.html'

const Express = require('express')
const oServer = Express()

oServer.get('/', (oRequest, oResponse) => {
	oResponse.send(sIndexHtml)
})

oServer.get('/dist/main.js', (oRequest, oResponse) => {
    oResponse.send(sMainJs)
})

const PORT = process.env.PSM_PORT || 8100
oServer.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})