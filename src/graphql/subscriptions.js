/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBeat = /* GraphQL */ `
  subscription OnCreateBeat($owner: String) {
    onCreateBeat(owner: $owner) {
      id
      title
      ownerId
      ownerUsername
      thumbnail {
        filename
        region
        bucket
        key
      }
      audio {
        mp3 {
          filename
          region
          bucket
          key
        }
        wav {
          filename
          region
          bucket
          key
        }
        zip {
          filename
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
        mp3Price
        wavPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      bpm
      schedule
      split {
        split1 {
          email
          percentage
        }
        split2 {
          email
          percentage
        }
        split3 {
          email
          percentage
        }
        split4 {
          email
          percentage
        }
      }
      free
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBeat = /* GraphQL */ `
  subscription OnUpdateBeat($owner: String) {
    onUpdateBeat(owner: $owner) {
      id
      title
      ownerId
      ownerUsername
      thumbnail {
        filename
        region
        bucket
        key
      }
      audio {
        mp3 {
          filename
          region
          bucket
          key
        }
        wav {
          filename
          region
          bucket
          key
        }
        zip {
          filename
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
        mp3Price
        wavPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      bpm
      schedule
      split {
        split1 {
          email
          percentage
        }
        split2 {
          email
          percentage
        }
        split3 {
          email
          percentage
        }
        split4 {
          email
          percentage
        }
      }
      free
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBeat = /* GraphQL */ `
  subscription OnDeleteBeat($owner: String) {
    onDeleteBeat(owner: $owner) {
      id
      title
      ownerId
      ownerUsername
      thumbnail {
        filename
        region
        bucket
        key
      }
      audio {
        mp3 {
          filename
          region
          bucket
          key
        }
        wav {
          filename
          region
          bucket
          key
        }
        zip {
          filename
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
        mp3Price
        wavPrice
        TrackoutPrice
        UnlimitedPrice
        ExclusivePrice
      }
      bpm
      schedule
      split {
        split1 {
          email
          percentage
        }
        split2 {
          email
          percentage
        }
        split3 {
          email
          percentage
        }
        split4 {
          email
          percentage
        }
      }
      free
      createdAt
      updatedAt
      owner
    }
  }
`;
