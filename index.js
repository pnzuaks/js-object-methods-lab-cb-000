class President {
  constructor(name, politicalParty, yearsInOffice, homestate) {
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }

  this.veto = function() {
    return "NO!"
  }
  this.passBill = function() {
    return "You can do that!"
  }
  this.doCharity() {
    return "I like to help people."
  }
  this.conductPressInterview() {
    return "I am proud to be an American."
  }
  this.sayHi() {
    return 'Hi, my name is ${this.name}. I am from ${this.homestate}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.'
  }

}
