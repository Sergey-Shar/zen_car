import { gql } from "@apollo/client";

export const GET_PARENT_ID_WORKS = gql`
  query getParentId($parentId: IntPredicatesInput) {
    wizardWorks(where: { parentId: $parentId }, order: { orderIndex: asc }) {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      image {
        id
        objectId
        objectType
        objectProperty
        filename
        mimetype
        encoding
        file {
          url
          path
        }
      }
      orderIndex
      createdAt
      updatedAt
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        image {
          id
          objectId
          objectType
          objectProperty
          filename
          mimetype
          encoding
          file {
            url
            path
          }
        }
        orderIndex
        createdAt
        updatedAt
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
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          image {
            id
            objectId
            objectType
            objectProperty
            filename
            mimetype
            encoding
            file {
              url
              path
            }
          }
          orderIndex
          createdAt
          updatedAt
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            image {
              id
              objectId
              objectType
              objectProperty
              filename
              mimetype
              encoding
              file {
                url
                path
              }
            }
            orderIndex
            createdAt
            updatedAt
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
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              image {
                id
                objectId
                objectType
                objectProperty
                filename
                mimetype
                encoding
                file {
                  url
                  path
                }
              }
              orderIndex
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;