import { gql } from "@apollo/client";

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
