const { soap } = require('strong-soap')

function p360 (options) {
  return new Promise((resolve, reject) => {
    if (!options) throw Error('Missing required input: options')
    if (!options.baseUrl) throw Error('Missing required input: options.baseUrl')
    if (!options.username) throw Error('Missing required input: options.username')
    if (!options.password) throw Error('Missing required input: options.password')

    const url = `${options.baseUrl.endsWith('/') ? options.baseUrl : options.baseUrl + '/'}${options.service}.svc?wsdl`
    soap.createClient(url, { forceSoapVersion: 1 }, async (error, client) => {
      if (error) throw error
      client.setSecurity(new soap.BasicAuthSecurity(options.username, options.password))
      client.setEndpoint(url.replace('?wsdl', ''))
      resolve(client)
    })
  })
}

module.exports = options => ({
  ContactService: () => p360({ ...options, service: 'ContactService' }),
  UserService: () => p360({ ...options, service: 'UserService' }),
  CaseService: () => p360({ ...options, service: 'CaseService' }),
  DocumentService: () => p360({ ...options, service: 'DocumentService' }),
  FileService: () => p360({ ...options, service: 'FileService' })
})
