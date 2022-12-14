Demo: https://dtphu0169.github.io/ReactWeb

## Đây là dự án sử dung template html vào và xử lí bằng reactjs
1. [Chức năng thực hiện](#function)
2. [Chạy dự án trên localhost](#run_localhost)

<a name="function"></a>
## Chức năng thực hiện <a name="Chức năng thực hiện"></a>
1. Đăng kí
Bạn có thể đăng kí bằng cách nhấn nút login phía bên góc trên bên phải màn hình và ấn dòng chữ Sign In
Thông tin tài khoản đăng kí thành công sẽ được lưu lại trên localStorage

2. Đăng nhập
Bạn có thể đăng nhập vào bằng tài khoản {name: "admin", email: "admin@admin.com", password: "pass"}
hoặc bằng tài khoản đã đăng kí
Tài khoản đăng nhập thành công sẽ được lưu trên session

3. Đăng xuất
Khi đăng nhập thành công, bạn có thể nhấn nút Logout xuất hiện bên góc trên bên phải màn hình để logout
Sau khi ấn Logout, thông tin tài khoản trên session sẽ được huỷ bỏ

<a name="run_localhost"></a>
## Chạy dự án trên localhost 

Để chạy trên localhost bạn cần chuyển về phiên bản commit Initialize project with login,register,logout (b83d4aa6b859eb89c6ccf2eaf50e83c5eb4324bf) bằng cách thực hiện các lệnh sau:
> git reset --hard b83d4aa6b859eb89c6ccf2eaf50e83c5eb4324bf


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
