const morning = require('./morning.js');
const evening = require('./evening.js');

module.exports = {
    getMorningMessage: function () {
        console.log(morning);
    },
    getEveningMessage: function () {
        console.log(evening);
    },
};