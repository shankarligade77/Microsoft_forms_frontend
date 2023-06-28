import { gql } from "@apollo/client";
import EditForm from './../pages/EditForm';

export const GetForms = gql`
  query forms {
    forms {
      id
      title
      description
    }
  }
`;

export const GetItems = gql`
  query Items {
    Items {
      id
      question
      description
      QuestionType
    }
  }
`;



export const EditFormData=gql`
query editForm($id: Float!){
  editForm(id: $id){
    id
    question
    description
  }
}

`
