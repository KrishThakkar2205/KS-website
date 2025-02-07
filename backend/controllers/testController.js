const homeController = (request, response) => {
    response.status(200).json({ message: 'Recieved the message successfully!' });
}

module.exports = {
    homeController
}