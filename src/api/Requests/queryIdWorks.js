import { gql } from "@apollo/client";

export const GET_ID_WORKS = gql`
  query getId($id: IntPredicatesInput) {
    wizardWorks(where: { id: $id }, order: { orderIndex: asc }) {
      id
      name
      question
      vehicleWorks {
        id
        name
        action
        group {
          id
          parentId
          name
          parent {
            id
            name
            parent {
              id
              name
            }
          }
        }
      }
      children(order: { orderIndex: asc }) {
        id
        parentId
        name
        question
        other
      }
    }
  }
`;