import { Locator, Page } from "@playwright/test";

export class WordCounterPage {
  readonly page: Page;
  readonly inputTextArea: Locator;
  readonly wordCount: Locator;
  readonly charCount: Locator;
  wordValue;
  badgeValue;

  constructor(page: Page) {
    this.page = page;
    this.inputTextArea = page.getByPlaceholder("Start typing, or copy and paste your document here...");
    this.wordCount = page.locator('//li[@data-title="Words"]/span[@id="word_count"]');
    this.charCount = page.locator('//li[@data-title="Characters"]/span[@id="character_count"]');
  }

  async goto(){
    await this.page.goto('https://wordcounter.net');
  }

  async fillText(text: string){
    await this.inputTextArea.fill(text);
  }

  async getWordCount(): Promise<string | null>{
    return await this.wordCount.textContent();
  }

  async getCharCount(): Promise<string | null>{
    return await this.charCount.textContent();
  }

  async getKeywordDensity(): Promise<{word: string; count: string}[]>{
    const result: { word: string; count: string}[] = [];

    for (let index = 1; index < 4; index++) {
      this.wordValue = await this.page.locator('//div[@id="kwd-accordion-data"]/a[' + index + ']/span[@class="word"]').textContent();
      this.badgeValue = await this.page.locator('//div[@id="kwd-accordion-data"]/a[' + index + ']/span[@class="badge"]').textContent();

      result.push({word: this.wordValue, count: this.badgeValue});
    }

    return result;
  }
}
