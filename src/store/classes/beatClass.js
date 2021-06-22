class Beat {
    constructor(id, title, ownerId, ownerUsername, thumbnail, audio, genre, tags, isPublic, prices, bpm, schedule, split, free) {
        this.id = id;
        this.title = title;
        this.ownerId = ownerId;
        this.ownerUsername = ownerUsername;
        this.thumbnail = {
            region: thumbnail.region,
            bucket: thumbnail.bucket,
            key: thumbnail.key
        };
        this.audio = {
            mp3: {
                region: audio.mp3.region,
                bucket: audio.mp3.bucket,
                key: audio.mp3.key,
            },
            wav: {
                region: audio.wav.region,
                bucket: audio.wav.bucket,
                key: audio.wav.key,
            },
            zip: {
                region: audio.zip.region,
                bucket: audio.zip.bucket,
                key: audio.zip.key,
            }
        };
        this.genre = {
            genre1: genre.genre1,
            genre2: genre.genre2,
            genre3: genre.genre3,
        };
        this.tags = tags;
        this.public = true;
        this.price = {
            mp3Price: prices.mp3Price,
            wavPrice: prices.wavPrice,
            TrackoutPrice: prices.TrackoutPrice,
            UnlimitedPrice: prices.UnlimitedPrice,
            ExclusivePrice: prices.ExclusivePrice,
        };
        this.bpm = bpm;
        this.schedule = schedule;
        this.split =
            {
                split1: {
                    email: split.split1.email,
                    percentage: split.split1.percentage,
                },
                split2: {
                    email: split.split2.email,
                    percentage: split.split2.percentage,
                },
                split3: {
                    email: split.split3.email,
                    percentage: split.split3.percentage,
                },
                split4: {
                    email: split.split4.email,
                    percentage: split.split4.percentage,
                }
            };
        this.free = free;
    }
}

export default Beat