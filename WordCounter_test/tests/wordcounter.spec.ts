import { test, expect } from '@playwright/test';
import { WordCounterPage } from '../src/pages/wordcounter-page';

test.describe('Validation on WordCounter.net', () => {
    let wordcounter: WordCounterPage;
    const testText = 'automation automation testing is great testing is great';

    test.beforeEach(async ({ page }) => {
        wordcounter = new WordCounterPage(page);
        await wordcounter.goto();
    });

    test('Validate the number of words', async ({ page }) => {
        wordcounter.fillText(testText);

        await page.waitForTimeout(1000);

        const wordCount = await wordcounter.getWordCount();

        expect(wordCount).toEqual('8');
    })

    test('Validate the number of characters', async ({ page }) => {
        wordcounter.fillText(testText);

        await page.waitForTimeout(1000);

        const charCount = await wordcounter.getCharCount();

        expect(charCount).toEqual('55');
    })

    test('Validate the 3 most repeated words and their number of repetitiond', async ({ page }) => {
        wordcounter.fillText(testText);

        await page.waitForTimeout(1000);

        const keyword = await wordcounter.getKeywordDensity();

        expect(keyword[0].word).toEqual('automation');
        expect(keyword[0].count).toEqual(' 2 (33%)');

        expect(keyword[1].word).toEqual('testing');
        expect(keyword[1].count).toEqual(' 2 (33%)');

        expect(keyword[2].word).toEqual('great');
        expect(keyword[2].count).toEqual(' 2 (33%)');
        
    })
})