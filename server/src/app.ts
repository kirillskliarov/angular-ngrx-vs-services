import { Request, Response } from "express";
import jsonServer from 'json-server';
import { PHONES } from './data/phones';
import { Account } from './models/account';
import { USER_DB } from './data/user-db';
import { TARIFF_LIST, TARIFF_MAP } from './data/tariff-list';
import { TARIFF_MODIFIERS_LIST, TARIFF_MODIFIERS_MAP } from './data/tariff-modifiers-list';
import { SUBSCRIPTION_LIST, SUBSCRIPTION_MAP } from './data/subscription-list';
import { Tariff } from './models/tariff';
import { TariffModifier } from './models/tariff-modifier';
import { Subscription } from './models/subscription';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

server.get('/user/phones/list', (request: Request, response: Response) => {
  response.status(200).jsonp(PHONES);
});

// http://localhost:5000/user/tariff?phone=%2B79995555555
server.get('/user/tariff', (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const tariff: Tariff | undefined = TARIFF_MAP.get((USER_DB.get(phone) as Account).tariff);
  response.status(200).jsonp(tariff);
});

// http://localhost:5000/user/tariff-modifiers?phone=%2B79995555555
server.get('/user/tariff-modifiers', (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const tariffModifierList: (TariffModifier | undefined)[] = (USER_DB.get(phone) as Account).tariffModifierList
    .map((tariffModifierId: string) => TARIFF_MODIFIERS_MAP.get(tariffModifierId));
  response.status(200).jsonp(tariffModifierList);
});

// http://localhost:5000/user/subscriptions?phone=%2B79280001133
server.get('/user/subscriptions', (request: Request, response: Response) => {
  const phone = request.query.phone as string;
  const subscriptionList: (Subscription | undefined)[] = (USER_DB.get(phone) as Account).subscriptionList
    .map((subscriptionId: string) => SUBSCRIPTION_MAP.get(subscriptionId));
  response.status(200).jsonp(subscriptionList);
});

// http://localhost:5000/tariff/list
server.get('/tariff/list', (request: Request, response: Response) => {
  setTimeout(() => {
    response.status(200).jsonp(TARIFF_LIST);
  }, 500);
});

// http://localhost:5000/tariff-modifier/list
server.get('/tariff-modifier/list', (request: Request, response: Response) => {
  setTimeout(() => {
    response.status(200).jsonp(TARIFF_MODIFIERS_LIST);
  }, 500);
});

// http://localhost:5000/subscription/list
server.get('/subscription/list', (request: Request, response: Response) => {
  setTimeout(() => {
    response.status(200).jsonp(SUBSCRIPTION_LIST);
  }, 500);
});

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`)
});
