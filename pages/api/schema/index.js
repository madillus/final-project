import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  User {
        id: ID
        login: String
        avatar_url: String
    }
    type  Beers {
      id: ID
      name: String
      Description: String
      Price: Int
  }
    type  Wines {
      id: ID
      name: String
      Description: String
      Price: Int
  }
    type  Seasonal {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
  }
    type  Soups {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Sausages {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Sandwiches {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Salads {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Classics {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Bbq {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Sides {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Desserts {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Sauces {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }
    type  Mittags {
      id: ID
      Name: String
      Description: String
      Price: Int
      Allergens: String
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }`