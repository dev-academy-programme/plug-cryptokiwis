# Crypto Kiwis

This is a challenge for the plug blockchain curriculum.

This challenge is inspired by https://www.cryptokitties.co/
Watch [this video](https://www.youtube.com/watch?v=jGfvkjzLrNw) to find out more about what is going on with CryptoKitties, and what it means.

## Setup

### React

Run the command

``` sh
yarn install
 - or -
npm install
```

to install modules.

Run

``` sh
yarn start
 - or -
npm start
```

To start the react frontend dev-server

Go to http://localhost:8080/ to see the site.

## User Stories

* As a User I can create a new public/private key pairing using a command-line interface
* As an early adopter, I can claim one of the first 20 "Gen 1" Kiwis.
* As a User who owns a Kiwi, I can make a breeding request to another Kiwi.
* As a User with a Kiwi, I can see all breeding requests made to that Kiwi.
* As a User with a kiwi I can accept a breeding request, which will spawn a next Gen Kiwi for both Owners, with pseudo random "DNA" which is affected by the traits of both parents.


## Traits (WIP)

### DNA traits
| Trait | Is Visual | Value | Purpose |
| --- | --- | --- | --- |
| Size | Yes | 1 - 5 | Larger Kiwis will appear larger |
| Colour | Yes | Hex Color | Colour of the kiwi when displayed |
| Speed | No | 1 - 10 | Trait to make Kiwis desireable |
| Strength | No | 1 - 10 | Trait to make Kiwis desireable |
| Cuteness | No | 1 - 10 | Trait to make Kiwis desireable |


## API

The client code is created and will be expecting to receive certain information from different API endpoints.

All APIs should be on the endpoint of `/_api/v1/`

### Index

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /kiwis | myKey=<SIGNING_KEY> | Retrieve a list of all kiwis to browse | [Info](#get-kiwis) |
| GET | /kiwis/my | myKey=<SIGNING_KEY> | Retrieve a list of all kiwis owned by the user | [Info](#get-my-kiwis) |
| GET | /breeding/incoming | myKey=<SIGNING_KEY> | Retrieve a list breeding requests towards kiwis owned by the user | [Info](#breeding-requests-incoming) |
| GET | /breeding/outgoing | myKey=<SIGNING_KEY> | Retrieve a list breeding requests from kiwis owned by the user | [Info](#breeding-requests-outgoing) |
| GET | /danceoff/incoming | myKey=<SIGNING_KEY> | Retrieve a list dance-off requests towards kiwis owned by the user | [Info](#dance-off-requests-incoming) |
| GET | /danceoff/outgoing | myKey=<SIGNING_KEY> | Retrieve a list dance-off requests from kiwis owned by the user | [Info](#dance-off-requests-outgoing) |

### Get Kiwis

| Method | Endpoint | Data | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /kiwis | myKey=<SIGNING_KEY> | Retrieve a list of all kiwis to browse | [Info](#get-kiwis) |


#### Response

``` js
[
  {
    id: 1,
    name: "Kumura Pai",
    size: 4,
    strength: 7,
    cuteness: 2,
    speed: 2,
    colour: #ffffff,
    pursuers: 3,
    wins: 2,
    losses: 6
  },
  ...
]
```

### Get My Kiwis

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /kiwis/my | myKey=<SIGNING_KEY> | Retrieve a list of all kiwis owned by the user | [Info](#get-my-kiwis) |


#### Response

```js
[
  {
    id: 1,
    name: "Kumura Pai",
    size: 4,
    strength: 7,
    cuteness: 2,
    speed: 2,
    colour: #ffffff,
    pursuers: 3,
    wins: 2,
    losses: 6
  },
  ...
]
```

### Breeding Requests Incoming

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /breeding/incoming | myKey=<SIGNING_KEY> | Retrieve a list breeding requests towards kiwis owned by the user | [Info](#breeding-requests-incoming) |

#### Response

``` js
[
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  },
  ...
]
```

### Breeding Requests Outgoing

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /breeding/outgoing | myKey=<SIGNING_KEY> | Retrieve a list breeding requests from kiwis owned by the user | [Info](#breeding-requests-outgoing) |

#### Response

``` js
[
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  },
  ...
]
```

### Dance Off Requests Incoming

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /danceoff/incoming | myKey=<SIGNING_KEY> | Retrieve a list dance-off requests towards kiwis owned by the user | [Info](#dance-off-requests-incoming) |

#### Response

``` js
[
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  },
  ...
]
```

### Dance Off Requests Outgoing

| Method | Endpoint | Query | Purpose | Info |
| --- | --- | --- | --- | --- |
| GET | /danceoff/outgoing | myKey=<SIGNING_KEY> | Retrieve a list dance-off requests from kiwis owned by the user | [Info](#dance-off-requests-outgoing) |

#### Response

``` js
[
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  },
  ...
]
```
