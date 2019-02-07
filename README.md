[![Build Status](https://travis-ci.org/alheimsins/node-p360.svg?branch=master)](https://travis-ci.org/telemark/node-p360)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# p360

Node wrapper module for Public 360 SIF SOAP Web Service from [Tieto](https://www.tieto.no/)

# Installation

```bash
$ npm install alheimsins@p360 --save
```

## SIF documentation

SI Integration Framework (SIF) is public 360s SOAP-webservice.

For a full list of calls and callbacks see the documentation  [here](https://github.com/telemark/skoleskyss-arbeid/blob/master/biztalk/GenericWebServiceLayer.pdf)

## Usage

```JavaScript
(async () => {
  const p360 = require('alheimsins@p360')

  const options = {
    baseUrl: 'http://server.domain.no:8088/SI.WS.Core/SIF',
    username: 'domain/username',
    password: 'password'
  }
  try {
    const client = p360(options)
    const contactService = await client.ContactService()
    // console.log(contactService.describe())
    const { result } = await contactService.GetContactPersons({ parameter: { Name: 'Maccyber' } })
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error)
  }
})()
```
