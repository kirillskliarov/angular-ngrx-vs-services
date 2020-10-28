import { Request, Response } from "express";
import jsonServer from 'json-server';
import { PHONES } from './data/phones';
import { Account } from './models/account';
import { USER_DB } from './data/user-db';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

server.get("/user/phones/list", (request: Request, response: Response) => {
  response.status(200).jsonp(PHONES);
});

server.get("/user/phones/default", (request: Request, response: Response) => {
  response.status(200).jsonp(PHONES[0]);
});

// http://localhost:5000/user/tariff?phone=%2B79280001133
server.get("/user/tariff", (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const tariff: string = (USER_DB.get(phone) as Account).tariff;
  response.status(200).jsonp(tariff);
});

// http://localhost:5000/user/tariff-modifiers?phone=%2B79280001133
server.get("/user/tariff-modifiers", (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const tariffModifierList: string[] = (USER_DB.get(phone) as Account).tariffModifierList;
  response.status(200).jsonp(tariffModifierList);
});

// http://localhost:5000/user/subscriptions?phone=%2B79280001133
server.get("/user/tariff", (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const subscriptionList: string[] = (USER_DB.get(phone) as Account).subscriptionList;
  response.status(200).jsonp(subscriptionList);
});

server.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}/`)
});
