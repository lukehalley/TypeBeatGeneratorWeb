/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBeat = /* GraphQL */ `
  mutation CreateBeat(
    $input: CreateBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    createBeat(input: $input, condition: $condition) {
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
export const updateBeat = /* GraphQL */ `
  mutation UpdateBeat(
    $input: UpdateBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    updateBeat(input: $input, condition: $condition) {
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
export const deleteBeat = /* GraphQL */ `
  mutation DeleteBeat(
    $input: DeleteBeatInput!
    $condition: ModelBeatConditionInput
  ) {
    deleteBeat(input: $input, condition: $condition) {
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
