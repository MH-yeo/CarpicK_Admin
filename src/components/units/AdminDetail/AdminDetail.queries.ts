import { gql } from "@apollo/client";

export const FETCH_CAR_REGISTRATION = gql`
  query fetchCarRegistration($carRegistrationId: String!) {
    fetchCarRegistration(carRegistrationId: $carRegistrationId) {
      id
      carNumber
      isHipass
      model
      oil
      address
      status
      user {
        id
        name
        phone
      }
      imageCar {
        url
      }
      imageRegistration {
        url
      }
    }
  }
`;

export const CREATE_CAR = gql`
  mutation createCar($createCarInput: CreateCarInput!) {
    createCar(createCarInput: $createCarInput) {
      id
    }
  }
`;

export const UPDATE_REGISTRATION_STATUS = gql`
  mutation updateCarRegistrationStatus(
    $carRegistrationId: String!
    $status: String!
  ) {
    updateCarRegistrationStatus(
      carRegistrationId: $carRegistrationId
      status: $status
    ) {
      id
    }
  }
`;

export const FETCH_CAR_CATEGORY = gql`
  query fetchCarCategory {
    fetchCarCategory {
      id
      name
      carModel {
        id
        name
      }
    }
  }
`;

export const CREATE_CAR_CATEGORY = gql`
  mutation createCarCategory($createCarCategoryInput: CreateCarCategoryInput!) {
    createCarCategory(createCarCategoryInput: $createCarCategoryInput) {
      id
      name
    }
  }
`;

export const CREATE_CAR_MODEL = gql`
  mutation createCarModel($createCarModelInput: CreateCarModelInput!) {
    createCarModel(createCarModelInput: $createCarModelInput) {
      id
      name
    }
  }
`;

export const DELETE_CAR_CATEGORY = gql`
  mutation deleteCarCategory($carCategoryId: String!) {
    deleteCarCategory(carCategoryId: $carCategoryId)
  }
`;

export const DELETE_CAR_MODEL = gql`
  mutation deleteCarModel($carModelId: String!) {
    deleteCarModel(carModelId: $carModelId)
  }
`;
