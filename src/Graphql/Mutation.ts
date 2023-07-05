import { gql } from "@apollo/client";

// export const Create_Items = gql`
// mutation createItem($question:String! ,$description:String!){
//   createItem(input:{question: $question, description: $description}){
//       id
//       question
//       description
//     }
//   }

// `

export const Create_Form = gql`
  mutation createform($title: String!, $description: String!) {
    createform(input: { title: $title, description: $description }) {
      token
    }
  }
`;



// export const DELETE_FORM = gql`
//   mutation deleteItem($id: Float!) {
//     deleteItem(id: $id) {
//       token
//     }
//   }
// `;

export const DELETE_FORM = gql`
  mutation deleteForm($id: Float!) {
    deleteForm(id: $id) {
      title
    }
  }
`;

export const ADD_ITEMS = gql`
  mutation addItems($input: [ItemsInputType!]!) {
    addItems(input: $input) {
      result
    }
  }
`;


export const UPDATE_ITEMS = gql`
  mutation updateItems($id: Float!,$input: [ItemsInputType!]!) {
    updateItems(id: $id,input: $input) {
      result
    }
  }
`;
