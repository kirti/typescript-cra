import { Selector } from 'testcafe';
fixture`Getting Started`
    .page`http://localhost:3000`;

    test('App Run successfully', async t => {
        const firstApp = await Selector('.App').find('header');
        await t.expect(firstApp.innerText).eql('My name is kirti');
    });