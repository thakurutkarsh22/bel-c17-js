function HomePageResponse (req, res) {
    // .send is good for sending only STRING DATA
    res.send('Hello, World! express');
}

function AboutsPageResponse (req, res) {
    res.send('abouts express!');
}

module.exports = {HomePageResponse, AboutsPageResponse}