const mysql = require('mysql');
const util = require('util');

function connectWithRetry() {
  const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'testdb',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Lỗi kết nối MySQL:', err.message);
      console.log('Thử kết nối lại sau 5 giây...');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Kết nối MySQL thành công!');
      // Tiếp tục xử lý logic sau khi kết nối thành công
    }
  });
}

connectWithRetry();
