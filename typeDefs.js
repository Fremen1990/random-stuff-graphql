const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: MyQuery
  }

  type MyQuery {
    "Our query types :) "
    greeting: String!
    schroedingersCatGreeting: String
    interestingUrls: [String!]!
    favouriteNumber: Int!
    randomDiceThrow: Int!
    integerArray: [Int!]!
    pi: Float!
    isTodayFriday: Boolean!
    randomCoinTossesUntilTrue: [Boolean!]!
    today: DayOfWeek!
    workDays: [DayOfWeek!]!
    randomQuote: Quote!
  }
  """
  # This is object represents random quotes
  """
  type Quote {
    text: String!
    author: String!
  }

  """
  # This is object enum representing days of the week:
  """
  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
`;

module.exports = typeDefs;
