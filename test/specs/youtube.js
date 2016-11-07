var assert = require('assert');
var youtube = require('./../../options.js').youtube;
describe('Youtube',function(){
	describe('login into', function() {
		before(function() {
		browser
			.url('https://www.youtube.com')
			.waitForExist('.yt-uix-button-content',10000);
            browser.click('span=Sign in');
		});
		it('should have login form', function() {
            browser.waitForExist('h2*=Sign in to continue to YouTube',10000);
			browser.element("h2*=Sign in to continue to YouTube").waitForText(10000);
			let text = browser.getText("h2*=Sign in to continue to YouTube");
			assert.equal("Sign in to continue to YouTube",text);
		});
		it('should login success', function() {
			browser
			.waitForExist('#Email',5000);
			browser
			.setValue('#Email',youtube.username)
			.click('#next');
			browser
			.waitForExist('#Passwd',5000);
			browser
			.setValue("#Passwd",youtube.password)
			.click('#signIn')
			.waitForExist('#yt-masthead-account-picker');
		});
	});
	describe('search for a keyword', function() {
		it("open Youtube", function() {
		browser
			.url('https://www.youtube.com')
			.setValue('#masthead-search-term', 'Em Có Yêu Anh Không')
			.keys('\uE007');
		});
		it('should have number of results (.num-results)', function() {
			browser.waitForExist('.num-results*=About',5000);
			title = browser.getText('.num-results*=About');
			assert.ok(title.search(/About .* results/gi) !== -1);
		});
		it('have video elements (.yt-lockup-video)', function() {
			assert.ok(browser.isExisting('.yt-lockup.yt-lockup-tile.yt-lockup-video.clearfix'));
		});
	});
});