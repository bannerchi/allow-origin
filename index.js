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
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, __setXHR_');
            res.setHeader('Access-Control-Allow-Credentials', true);
            return next();
        }
        var origin = req.headers.origin === undefined ? null : req.headers.origin;

        if(origin === null){
            next();
        } else {
            if(JSON.stringify(writeList).indexOf(origin) !== -1){
                res.setHeader('Access-Control-Allow-Origin', origin);
		        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, __setXHR_');
                res.setHeader('Access-Control-Allow-Credentials', true);
            }
            next();
        }
    }
};
