'use strict';
/**
 * middleware of cross domain
 * @param env
 * @param writeList is an array those urls could cross domain
 * @returns {Function}
 */
module.exports = function(env, writeList){
    return function(req, res, next){
        if(env == 'development'){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET');

            return next();
        }
        var origin = req.headers.origin === undefined ? null : req.headers.origin;

        if(origin === null){
            next();
        } else {
            if(JSON.stringify(writeList).indexOf(origin) !== -1){
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.setHeader('Access-Control-Allow-Methods', 'GET');
            }
            next();
        }
    }
};