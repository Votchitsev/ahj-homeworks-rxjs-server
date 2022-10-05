import { faker } from '@faker-js/faker';

export const messages = []

function createMessage() {
  return {
    id: faker.datatype.uuid(),
    from: faker.internet.email(),
    subject: faker.lorem.word(),
    body: faker.lorem.sentence(),
    received: faker.date.recent(),
  }
};

let counter = 0

setInterval(() => {
  if (counter < 10) {
    messages.push(createMessage())
    counter += 1;
  } else {
    messages.length = 0;
    counter = 0;
  }
}, 10000);
