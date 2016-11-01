# WebTestingDemo
Demo For Mocha and Selenium.

**Yêu cầu:**

 1. Đã cày đặt chrome trên máy (vào run chạy chrome)
 2. Nếu máy không sử dụng chrome có thể thay bằng trình duyệt khác trong wdio.conf : `browserName: 'firefox'`

**Cài đặt:**

 1.  Vào thư mục chứa project: 
 `cd WebTestingDemo`
 2.  Cài đặt webdriverio và selenium-standalone: 
 `npm install`
 3.  Cài selenium-standalone:
	 `.\node_modules\.bin\selenium-standalone install`
 4. Chạy selenium-standalone:
	 `.\node_modules\.bin\selenium-standalone start` 
	 

**Chạy test**

1.	Vào thư mục chứa project: 
`cd WebTestingDemo`
2. Chạy test:
`.\node_modules\.bin\wdio`

Pass test:
![Result](http://2.pik.vn/2016b978dc4b-1e97-45dc-9a4b-be9c8e286958.png)