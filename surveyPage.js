const BasePage = require('./webDriverModule')

BasePage.prototype.webPageIsDisplayed = function () {
    return this.waitForElement('[id="welcometothissurveyaboutgeneralknowledge"]', 100);
};

BasePage.prototype.closeBrowser = function () {
    this.quit();
};

BasePage.prototype.optInCheckBox = function () {
    return this.clickByLocator('#question_answer_1 > div:nth-child(1) > div > div > div.answer_section > div > div > div > div');
};

BasePage.prototype.goToNextPage = function () {
    return this.clickNextButtonByLocator('span > a > button');
};

BasePage.prototype.questionPageIsDisplayed = function (page) {
    return this.waitForElement('#question_answer_' + page + ' > div:nth-child(1) > div > div > div.header.ng-isolate-scope > div > div > div > h1', 30000);
};

BasePage.prototype.selectAnswerOnPage = function (answer, page) {
    return this.clickByLocator('#question_answer_' + page + ' > div:nth-child(1) > div > div > div.answer_section > div > div > div > div:nth-child(' + answer + ')');
};

BasePage.prototype.writeAnswerOnPage = function (answer, page) {
    return this.typeByLocator('#question_answer_' + page + ' > div:nth-child(1) > div > div > div.answer_section > div > div > div > div > input', answer);
};

BasePage.prototype.allDonePage = function () {
    return this.waitForElement('body > div.wrapper.ng-scope > div.static-page-container.ng-scope > div > div > div > div:nth-child(2) > h1', 40000);
};

BasePage.prototype.selectAnswerOn9thPage = function (answer) {
    return this.clickAnswerByGivenName(answer, '#question_answer_9 > div:nth-child(1) label');
};

module.exports = BasePage;