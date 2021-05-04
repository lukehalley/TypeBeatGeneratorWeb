/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLibrary = /* GraphQL */ `
  mutation CreateLibrary(
    $input: CreateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    createLibrary(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      beats {
        items {
          id
          libraryID
          title
          ownerId
          createdAt
          updatedAt
          public
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateLibrary = /* GraphQL */ `
  mutation UpdateLibrary(
    $input: UpdateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    updateLibrary(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      beats {
        items {
          id
          libraryID
          title
          ownerId
          createdAt
          updatedAt
          public
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteLibrary = /* GraphQL */ `
  mutation DeleteLibrary(
    $input: DeleteLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    deleteLibrary(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      beats {
        items {
          id
          libraryID
          title
          ownerId
          createdAt
          updatedAt
          public
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const createBeat = /* GraphQL */ `
  mutation CreateBeat(
    $input: CreateBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    createBeat(input: $input, condition: $condition) {
      id
      libraryID
      title
      ownerId
      createdAt
      updatedAt
      thumbnail {
        region
        bucket
        key
      }
      audio {
        mp3 {
          region
          bucket
          key
        }
        wav {
          region
          bucket
          key
        }
        zip {
          region
          bucket
          key
        }
      }
      genre {
        genre1
        genre2
        genre3
      }
      tag {
        tag1
        tag2
        tag3
      }
      public
      price {
        MP3Price
        WAVPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      schedule
      split {
        split1 {
          paypalEmail
          percentage
        }
        split2 {
          paypalEmail
          percentage
        }
        split3 {
          paypalEmail
          percentage
        }
        split4 {
          paypalEmail
          percentage
        }
      }
      free
      owner
    }
  }
`;
export const updateBeat = /* GraphQL */ `
  mutation UpdateBeat(
    $input: UpdateBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    updateBeat(input: $input, condition: $condition) {
      id
      libraryID
      title
      ownerId
      createdAt
      updatedAt
      thumbnail {
        region
        bucket
        key
      }
      audio {
        mp3 {
          region
          bucket
          key
        }
        wav {
          region
          bucket
          key
        }
        zip {
          region
          bucket
          key
        }
      }
      genre {
        genre1
        genre2
        genre3
      }
      tag {
        tag1
        tag2
        tag3
      }
      public
      price {
        MP3Price
        WAVPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      schedule
      split {
        split1 {
          paypalEmail
          percentage
        }
        split2 {
          paypalEmail
          percentage
        }
        split3 {
          paypalEmail
          percentage
        }
        split4 {
          paypalEmail
          percentage
        }
      }
      free
      owner
    }
  }
`;
export const deleteBeat = /* GraphQL */ `
  mutation DeleteBeat(
    $input: DeleteBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    deleteBeat(input: $input, condition: $condition) {
      id
      libraryID
      title
      ownerId
      createdAt
      updatedAt
      thumbnail {
        region
        bucket
        key
      }
      audio {
        mp3 {
          region
          bucket
          key
        }
        wav {
          region
          bucket
          key
        }
        zip {
          region
          bucket
          key
        }
      }
      genre {
        genre1
        genre2
        genre3
      }
      tag {
        tag1
        tag2
        tag3
      }
      public
      price {
        MP3Price
        WAVPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      schedule
      split {
        split1 {
          paypalEmail
          percentage
        }
        split2 {
          paypalEmail
          percentage
        }
        split3 {
          paypalEmail
          percentage
        }
        split4 {
          paypalEmail
          percentage
        }
      }
      free
      owner
    }
  }
`;
