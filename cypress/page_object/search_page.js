class SearchJobs {
    get byTitleInput() { return cy.get ('[placeholder="Search by Job Title or Skill"]')};
    get byLocationInput() { return cy.get('[class="Select-placeholder"]')}; 
    get searchIcon() { return cy.get('[class="search-icon submitIcon"]')};
  }
  
  export default new SearchJobs();
  