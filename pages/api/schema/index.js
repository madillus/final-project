import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  User {
        id: Int!
        userName: String!
        userRoleId: String!
    }
    type  Beers {
      id: Int!
      name: String!
      Description: String
      slug: String
  }
    type  BeerMenu {
      id: Int!
      name: String!
      germanName: String
      description: String
      germanDescription: String
      allergens: String
      priceTaster: Int
      priceSmall: Int
      priceNormal: Int
      pricePitcher: Int
    }

    type  Wines {
      id: Int!
      name: String!
      Description: String
      Price: Int!
  }
    type  Seasonal {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!

  }
    type  Soups {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }
    type  Sausages {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Sandwiches {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Salads {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Classics {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Bbq {
       id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Sides {
       id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Desserts {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }


    type  Mittags {
      id: Int!
      Name: String!
      GermanName: String
      Description: String
      GermanDescription: String
      Allergens: String
      Price: Int!
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }`