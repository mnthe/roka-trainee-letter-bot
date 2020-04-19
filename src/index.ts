import { MessengerBuilder, DaumNewsMessageBuilder } from 'love-to-soldier';

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const TRAINEE_ID = process.env.TRAINEE_ID;

const main = async () => {
    const builder = new MessengerBuilder();

    if (!USERNAME || !PASSWORD || !TRAINEE_ID) {
        console.log(`Empty ENV Exists) USERNAME: ${USERNAME} PASSWORD: ${PASSWORD} TRAINEE_ID: ${TRAINEE_ID}`);
        return;
    }
    const client = await builder
        .withAccount(USERNAME, PASSWORD)
        .withTarget(TRAINEE_ID)
        .withMessageBuilder(DaumNewsMessageBuilder)
        .build();

    await client.send();
}

main()
    .then(() => console.log('All Done!'))
    .catch(e => console.error(e));
