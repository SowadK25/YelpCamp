// Authentication middleware

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { // Provided by passport
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in')
        res.redirect('/login')
    }
    next()
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}
