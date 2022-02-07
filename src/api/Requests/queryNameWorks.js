import { gql } from "@apollo/client";

export const GET_NAME_WORKS = gql`
  query nameQuery($name: StringPredicatesInput) {
    wizardWorks(where: { name: $name }, order: { orderIndex: asc }) {
      id
      parentId
      name
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
            }
          }
        }
      }
    }
  }
`;