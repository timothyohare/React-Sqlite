// Import database
const knex = require('./../db')

// retrieve all companies
exports.companiesAll = async (req, res) => {
    knex
    .select('*')
    .from('swsCompany')
    .then(userData => {
        // send extracted companies in the response
        res.json(userData)
    })
    .catch(err => {
        // Send an error in response
        // eslint-disable-next-line no-template-curly-in-string
        res.json({ message: 'There was an error retrieving companies: ${err}'})
    });
};
