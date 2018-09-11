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
