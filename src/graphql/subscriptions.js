/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBeat = /* GraphQL */ `
  subscription OnCreateBeat {
    onCreateBeat {
      id
      title
      owner {
        ownerId
        ownerUsername
      }
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
    }
  }
`;
export const onUpdateBeat = /* GraphQL */ `
  subscription OnUpdateBeat {
    onUpdateBeat {
      id
      title
      owner {
        ownerId
        ownerUsername
      }
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
    }
  }
`;
export const onDeleteBeat = /* GraphQL */ `
  subscription OnDeleteBeat {
    onDeleteBeat {
      id
      title
      owner {
        ownerId
        ownerUsername
      }
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
    }
  }
`;
