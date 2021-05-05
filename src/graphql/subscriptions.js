/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLibrary = /* GraphQL */ `
  subscription OnCreateLibrary($owner: String) {
    onCreateLibrary(owner: $owner) {
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
          createdAt
          updatedAt
          public
          bpm
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateLibrary = /* GraphQL */ `
  subscription OnUpdateLibrary($owner: String) {
    onUpdateLibrary(owner: $owner) {
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
          createdAt
          updatedAt
          public
          bpm
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteLibrary = /* GraphQL */ `
  subscription OnDeleteLibrary($owner: String) {
    onDeleteLibrary(owner: $owner) {
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
          createdAt
          updatedAt
          public
          bpm
          schedule
          free
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateBeat = /* GraphQL */ `
  subscription OnCreateBeat($owner: String) {
    onCreateBeat(owner: $owner) {
      id
      libraryID
      title
      artist {
        artistId
        artistName
      }
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
      tags {
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
      bpm
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
export const onUpdateBeat = /* GraphQL */ `
  subscription OnUpdateBeat($owner: String) {
    onUpdateBeat(owner: $owner) {
      id
      libraryID
      title
      artist {
        artistId
        artistName
      }
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
      tags {
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
      bpm
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
export const onDeleteBeat = /* GraphQL */ `
  subscription OnDeleteBeat($owner: String) {
    onDeleteBeat(owner: $owner) {
      id
      libraryID
      title
      artist {
        artistId
        artistName
      }
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
      tags {
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
      bpm
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
