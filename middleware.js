// Authentication middleware

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { // Provided by passport
        req.flash('error', 'You must be signed in')
        res.redirect('/login')
    }
    next()
}
