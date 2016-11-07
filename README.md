# WebTestingDemo
Demo For Mocha and Selenium.

**Yêu cầu:**

 1. Đã cài đặt chrome trên máy (vào run chạy chrome)
 2. Nếu máy không sử dụng chrome có thể thay bằng trình duyệt khác trong wdio.conf.js : `browserName: 'firefox'`

**Cài đặt:**

 1.  Vào thư mục chứa project: 
 `cd WebTestingDemo`
 2.  Cài đặt webdriverio và selenium-standalone: 
 `npm install`
	

**Chạy test**

1.	Vào thư mục chứa project: 
`cd WebTestingDemo`
2. Chạy server:
`npm run server`
3. Chạy test:
`npm start`

**Chạy test trên cloud**

1.	Vào thư mục chứa project: 
`cd WebTestingDemo`
2. Vào options.js đặt `options.useTestingBot = true;`
3. Chạy test:
`npm start`
4. Đăng nhập vào testingbot.com để theo dõi quá trình test:  
Email: snoob.bot@gmail.com
Password: snoobbot123
Pass test:

![Result](http://2.pik.vn/2016b978dc4b-1e97-45dc-9a4b-be9c8e286958.png)

![CloudTesting](http://2.pik.vn/20168f9809c4-1232-46fd-9992-a6d2f59284ac.png)
