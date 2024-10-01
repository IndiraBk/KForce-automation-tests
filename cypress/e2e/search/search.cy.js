import role from "../../fixtures/jobSearch_role.json"
import find_workPage from "../../page_object/find_work.page";
import result_page from "../../page_object/result_page";
import search_page from "../../page_object/search_page";

describe('Job search functionality', () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit('/find-work');
  });

  it('Should search job by title only', () => {
    find_workPage.searchJobsBtn.first().invoke('removeAttr', 'target').click();
    cy.url().should('include', 'search-jobs/');
    search_page.byTitleInput.type(role.Position);
    search_page.searchIcon.click();
    result_page.results.each(($el) => {cy.wrap($el).invoke('text').then((jobText) => {
       expect(jobText.toLowerCase()).to.satisfy(text => text.includes('qa') || text.includes('engineer'));
    });
    });
  });
});
