var assert = require('assert');
var faker = require('faker');
describe('phptravels.com',function(){
    describe('Login into', function() {
        it('should have .name and .password to input ', function() {
        	browser.url("http://phptravels.net/admin");
            browser.waitForExist("input[name='email']",10000);
        	assert.ok(browser.isExisting("input[name='email']"));
            browser.waitForExist("input[name='password",10000);
            assert.ok(browser.isExisting("input[name='password']"));
            browser.waitForExist("form.logpanel",10000);
            assert.ok(browser.isExisting("form.logpanel"));
        });
        it('login with admin@phptravels.com:demoadmin', function() {
            browser
                .click('input[name="email"]')
				.keys("admin@phptravels.com")
			.setValue('input[name="password"]',"demoadmin")
			.submitForm('.logpanel.form-signin')
            .waitUntil(function(){
            	return browser.getTitle() === "Dashboard";
			},10000);
            assert.equal( browser.getTitle(),"Dashboard");
        });
    });

    describe('Blog Post',function(){
        it('go to blog create page', function() {
            browser
			.url('http://phptravels.net/admin/blog/add')
			.waitForExist("#cke_1_contents",10000);
            assert.equal( browser.getTitle(),"Add Blog");
            assert.ok(browser.isExisting("input[name='title']"));
            assert.ok(browser.isExisting("#cke_1_contents"));
            assert.equal( browser.getTitle(),"Add Blog");
        });
        it('Create An sample blog post', function() {
        	let title = faker.lorem.sentence();
        	let contents = faker.lorem.paragraphs();
            browser
			.setValue("input[name='title']",title)
            .waitForExist("#cke_1_contents",10000);
            browser.click(".cke_wysiwyg_frame.cke_reset")
				.keys(contents)
                .selectByValue("select[name='category']","15")
				.click("button=Submit")
                .waitForVisible("=" + title,10000)
        });
	})
});