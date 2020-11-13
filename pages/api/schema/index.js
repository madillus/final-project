import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  User {
        id: ID!
        userName: String!
        userRoleId: String!
    }
    type  Beers {
      id: ID!
      name: String!
      Description: String
      slug: String
  }
    type  BeerMenu {
      id: ID!
      name: String!
      germanName: String
      description: String
      germanDescription: String
      allergens: String
      priceTaster: String
      priceSmall: String
      priceNormal: String
      pricePitcher: String
    }

    type  Wines {
      id: ID!
      name: String!
      Description: String
      Price: String!
  }
    type  Seasonal {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!

  }
    type  Soups {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }
    type  Sausages {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Sandwiches {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Salads {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Classics {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Bbq {
       id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Sides {
       id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Desserts {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }


    type  Mittags {
      id: ID!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: String!
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }`