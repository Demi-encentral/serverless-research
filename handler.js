'use strict'

async function greet(event) {
  try {
    // Check if event.body exists and is a non-empty string
    if (
      !event.body ||
      typeof event.body !== 'string' ||
      event.body.trim() === ''
    ) {
      throw new Error('Event body is missing or empty')
    }

    const { email, password, endpoint } = JSON.parse(event.body)
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, endpoint }),
    })

    const responseData = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    }
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify(error),
    }
  }
}

async function hello(event) {
  try {
    // Check if event.body exists and is a non-empty string
    if (
      !event.body ||
      typeof event.body !== 'string' ||
      event.body.trim() === ''
    ) {
      throw new Error('Event body is missing or empty')
    }

    const { email, password, endpoint } = JSON.parse(event.body)
    const modifiedData = `Email: ${email}, Password: ${password}, Endpoint: ${endpoint}`

    // Prepare the response
    const responseData = {
      message: 'Data processed successfully',
      modifiedData: modifiedData,
    }

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    }
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify(error),
    }
  }
}

module.exports = {
  hello,
  greet,
}
