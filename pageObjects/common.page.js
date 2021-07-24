const data = require('../data/data');
const multiremote = require('webdriverio');
class Common {

//  Define Elements

 signin = await browser.$('//a[normalize-space()="Sign in"]');
 email = await browser.$('//input[@id="j_username"]');
 password = await browser.$('//input[@id="j_password"]');
 rememberMe = await browser.$('//label[normalize-space()="Remember Me"]');
 signin1 = await browser.$('//button[normalize-space()="Sign In"]');

 search = await browser.$('//input[@id="js--search"]');
 addToCart = await browser.$('//button[@class="btn cart-btn js--add-to-cart"]');
 addToCart = await browser.$(`//a[normalize-space()="${book}"]`);


}
module.exports = Common;
