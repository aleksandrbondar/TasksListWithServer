import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

let data;
let app;

const loadData = async () => {
  try {
    data = await fs.readFile('./server/data.json', 'utf-8');
  } catch (error) {
    console.log('Ошибка при загрузке данных:', error);
  }
};

const loadMainPage = async () => {
  try {
    app = await fs.readFile('./dist/index.html', 'utf-8');
  } catch (error) {
    console.log('Ошибка при загрузке index.html:', error);
  }
};

loadData().catch(console.log);
loadMainPage().catch(console.log);

const serveFile = async (filePath, contentType, response) => {
  try {
    const content = await fs.readFile(filePath);
    response.statusCode = 200;
    response.setHeader('Content-Type', contentType);
    response.end(content);
  } catch (error) {
    console.log('Ошибка при загрузке файла:', error);
    generateError(response);
  }
};

const serveMainPage = (response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(app);
};

const getData = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(data);
};

const generateError = (response) => {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/plain');
  response.end('404 Error');
};

const postData = (request, response) => {
  let updatedData = '';
  request.on('data', (chunk) => {
    updatedData += chunk;
  });

  request.on('end', () => {
    if (updatedData) {
      data = updatedData;
      response.statusCode = 201;
      response.setHeader('Content-Type', 'application/json');
      response.end(data);
    }
  });

  request.on('error', (error) => {
    console.error('Error in request:', error);
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Internal Server Error');
  });
};

const PORT = 3000;
const server = http.createServer((request, response) => {

  if (request.url === '/') {
    serveMainPage(response);
  } else if (request.method === 'GET' && request.url === '/getData') {
    getData(request, response);
  } else if (request.method === 'POST' && request.url === '/postData') {
    postData(request, response);
  } else {
    const filePath = path.join('./dist', request.url);

    const ext = path.extname(filePath).toLowerCase();
    const contentTypeMap = {
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.jpg': 'image/jpeg',
    };
    const contentType = contentTypeMap[ext] || 'text/plain';

    fs.access(filePath)
      .then(() => serveFile(filePath, contentType, response))
      .catch(() => generateError(response));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});