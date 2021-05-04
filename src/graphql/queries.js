/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
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
export const listLibrarys = /* GraphQL */ `
  query ListLibrarys(
    $filter: ModelLibraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibrarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        beats {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBeat = /* GraphQL */ `
  query GetBeat($id: ID!) {
    getBeat(id: $id) {
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
export const listBeats = /* GraphQL */ `
  query ListBeats(
    $filter: ModelBeatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        free
        owner
      }
      nextToken
    }
  }
`;
