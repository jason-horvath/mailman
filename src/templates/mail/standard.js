const standard = (data) => {
  const { heading, message } = { ...data }
  return `
    <h1>${heading}</h1>
    <p>${message}</p>
  `
} 

module.exports = standard
