function BasicAuthSettings() { }

var settings = {
    username: process.env.ROM_BASICAUTH_ID      || "hoegekis_staging",
    password: process.env.ROM_BASICAUTH_SECRET  || "super_secret_var",
    rom_host: process.env.ROM_SITE              || "https://staging.rom.roqua.nl"
};

BasicAuthSettings.prototype.getUsername = function() {
    return settings.username;
};

BasicAuthSettings.prototype.getPassword = function() {
    return settings.password;
};

BasicAuthSettings.prototype.getBaseUrl = function() {
    return settings.rom_host;
};

module.exports = BasicAuthSettings;